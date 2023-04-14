'server-only'
import { Octokit } from 'octokit'

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
})

export async function getCommits() {
    const repos = await octokit.request('GET /user/repos', {
        per_page: 100,
        affiliation: 'owner',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28',
        },
    })

    let totalRepos = repos.data.length
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
}
