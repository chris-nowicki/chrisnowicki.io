import { NextRequest, NextResponse } from 'next/server'
import { Octokit } from 'octokit'
import { getGithubMetrics, updateGithubMetrics } from '@/lib/appwrite'

// Force dynamic (server) route instead of static page
export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  })

  // Retrieve all repos from my account
  const repos = await octokit.request('GET /user/repos', {
    per_page: 100,
    affiliation: 'owner',
  })

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
  if (totalCommits === 0) {
    return NextResponse.json({ error: 'No commits found' })
  }

  const storedCommits = await getGithubMetrics()

  // If the metrics haven't changed, return 208 status code
  if (storedCommits == totalCommits) {
    return NextResponse.json(`(no change) commits: ${totalCommits}`, {
      status: 208,
    })
  } else {
    // If the metrics have changed, update the stored metrics and return 200 status code
    await updateGithubMetrics(totalCommits)
    return NextResponse.json(`(updated) commits: ${totalCommits}`, {
      status: 200,
    })
  }
}
