import { Octokit } from 'octokit'
import { NextResponse } from 'next/server'
import {
  getStoredGithubMetrics,
  updateGithubMetrics,
} from '@/lib/vercel-storage'

// zod env type checking
import { env } from '@/types/env-private'

export async function GET() {
  const octokit = new Octokit({
    auth: env.GITHUB_TOKEN,
  })

  // retrieve all repos from my account
  const repos = await octokit.request('GET /user/repos', {
    per_page: 100,
    affiliation: 'owner',
  })

  // count all repos
  const totalRepos = repos.data.length

  // retrieve all commits and count them
  let totalCommits = 0

  for (const repo of repos.data) {
    const commits = await octokit.request(
      'GET /repos/{owner}/{repo}/contributors',
      {
        owner: repo.owner.login,
        repo: repo.name,
      }
    )

    // only count commits from my account
    if (commits.data.length > 0) {
      for (const contributor of commits.data) {
        if (contributor.login === repo.owner.login) {
          totalCommits += contributor.contributions
        }
      }
    }
  }

  // update vercel database with new metrics

  if (totalCommits === 0 || totalRepos === 0) {
    return NextResponse.json({ error: 'No commits or repos found' })
  }
  const storedGithubMetrics = await getStoredGithubMetrics()
  if (
    storedGithubMetrics.commits === totalCommits &&
    storedGithubMetrics.repos === totalRepos
  ) {
    return NextResponse.json(
      `commits: ${totalCommits} repos: ${totalRepos} - (no change)`,
      {
        status: 208,
      }
    )
  } else {
    updateGithubMetrics(totalCommits, totalRepos)
    return NextResponse.json(
      `commits: ${totalCommits}, repos: ${totalRepos} - (updated)`,
      { status: 200 }
    )
  }
}
