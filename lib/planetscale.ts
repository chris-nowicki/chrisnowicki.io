// import 'server-only' not working with API routes yet
import { Kysely } from 'kysely'
import { PlanetScaleDialect } from 'kysely-planetscale'

interface TweetCountTable {
    count: number
    updated_at?: string
}

interface GitHubMetricsTable {
    commits: number
    repos: number
}

interface Database {
    tweetCount: TweetCountTable
    githubMetrics: GitHubMetricsTable
}

export const queryBuilder = new Kysely<Database>({
    dialect: new PlanetScaleDialect({
        url: process.env.DATABASE_URL,
    }),
})

// query to fetch tweet count
export async function getTweetCount() {
    const res = await queryBuilder
        .selectFrom('tweetCount')
        .select('count')
        .execute()
    return res[0].count
}

// query to update tweet count
export const updateTweetCount = (tweetCount: number) => {
    queryBuilder
        .insertInto('tweetCount')
        .values({ count: tweetCount })
        .onDuplicateKeyUpdate({ count: tweetCount })
        .execute()
}

// query to fetch github metrics
export async function getGithubMetrics() {
    const res = await queryBuilder
        .selectFrom('githubMetrics')
        .select(['commits', 'repos'])
        .execute()
    return res[0]
}

// update github metrics
export const updateGithubMetrics = (commits: number, repos: number) => {
    queryBuilder
        .insertInto('githubMetrics')
        .values({ commits: commits, repos: repos })
        .onDuplicateKeyUpdate({ commits: commits, repos: repos })
        .execute()
}
