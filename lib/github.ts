import 'server-only'

import { Octokit } from '@octokit/rest'
import { cache } from 'react'

export const getCommits = cache(async () => {
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
            'GET /repos/{owner}/{repo}/commits',
            {
                owner: repo.owner.login,
                repo: repo.name,
            }
        )

        totalCommits += commits.data.length
    }

    return { repos: repos.data, totalCommits, totalRepos }
})
