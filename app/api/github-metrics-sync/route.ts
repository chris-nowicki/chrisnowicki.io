import { NextRequest, NextResponse } from 'next/server'
import { Octokit } from 'octokit'
import { getStoredGithubMetrics, updateGithubMetrics } from '@/lib/planetscale'
import { env } from '@/types/env-private'

// Nextjs route segment config
export const dynamic = 'force-dynamic' // Force dynamic (server) route instead of static page

export async function GET(req: NextRequest) {
  const authToken = (req.headers.get('authorization') || '')
    .split('Bearer ')
    .at(1)

  if (!authToken || authToken != env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const octokit = new Octokit({
    auth: env.GITHUB_TOKEN,
  })

  // Retrieve all repos from my account
  const repos = await octokit.request('GET /user/repos', {
    per_page: 100,
    affiliation: 'owner',
  })

  // Count all repos
  const totalRepos = repos.data.length

  // Retrieve all commits and count them
  let totalCommits = 0

  for (const repo of repos.data) {
    const commits = await octokit.request(
      'GET /repos/{owner}/{repo}/contributors',
      {
        owner: repo.owner.login,
        repo: repo.name,
      }
    )

    // Only count commits from my account
    if (commits.data.length > 0) {
      for (const contributor of commits.data) {
        if (contributor.login === repo.owner.login) {
          totalCommits += contributor.contributions
        }
      }
    }
  }

  // update PlanetScale database with new metrics
  if (totalCommits === 0 || totalRepos === 0) {
    return NextResponse.json({ error: 'No commits or repos found' })
  }

  const storedGithubMetrics = await getStoredGithubMetrics()

  // If the metrics haven't changed, return 208 status code
  if (
    storedGithubMetrics.commits == totalCommits &&
    storedGithubMetrics.repos == totalRepos
  ) {
    return NextResponse.json(
      `(no change) commits: ${totalCommits} repos: ${totalRepos}`,
      {
        status: 208,
      }
    )
  } else {
    // If the metrics have changed, update the stored metrics and return 200 status code
    updateGithubMetrics(totalCommits, totalRepos)
    return NextResponse.json(
      `(updated) commits: ${totalCommits}, repos: ${totalRepos}`,
      { status: 200 }
    )
  }
}
