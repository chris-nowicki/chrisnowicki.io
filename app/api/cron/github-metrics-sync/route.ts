import { Octokit } from '@octokit/rest'
import { NextResponse } from 'next/server'
import { updateGithubMetrics } from '../../../../lib/planetscale'

export async function GET() {
    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN,
    })

    // retrieve all repos
    const repos = await octokit.request('GET /user/repos', {
        per_page: 100,
        affiliation: 'owner',
    })

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

        // only count commits if there are any along with only counting my commits
        if (commits.data.length > 0) {
            for (const contributor of commits.data) {
                if (contributor.login === 'chris-nowicki') {
                    totalCommits += contributor.contributions
                }
            }
        }
    }

    try {
        updateGithubMetrics(totalCommits, totalRepos)
        return NextResponse.json({ totalCommits, totalRepos })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error })
    }
}
