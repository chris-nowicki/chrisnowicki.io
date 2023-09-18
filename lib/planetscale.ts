import { Kysely, ColumnType } from 'kysely'
import { PlanetScaleDialect } from 'kysely-planetscale'
import { env } from '@/types/env-private'
import { MetricsType } from '@/types/types'

export type Database = {
  tweetCount: TweetCountTable
  githubMetrics: GitHubMetricsTable
}

type TweetCountTable = {
  count: number
  updated_at?: ColumnType<Date, string | undefined>
  id?: number
}

type GitHubMetricsTable = {
  commits: number
  repos: number
  updated_at?: ColumnType<Date, string | undefined>
  id?: number
}

type githubMetricsType = {
  commits: number
  repos: number
}

export const db = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: env.DATABASE_URL,
  }),
})

// query to fetch tweet count and github metrics
export async function getMetrics(): Promise<MetricsType> {
  const res = await db
    .selectFrom(['tweetCount', 'githubMetrics'])
    .select([
      'tweetCount.count as tweetCount',
      'githubMetrics.commits as githubCommits',
      'githubMetrics.repos as githubRepos',
    ])
    .execute()
  return res[0]
}

// get stored tweet count
export async function getStoredTweetCount(): Promise<number> {
  const res = await db
    .selectFrom('tweetCount')
    .select(['tweetCount.count as tweetCount'])
    .execute()
  return res[0].tweetCount
}

// update tweet count
export const updateTweetCount = (tweetCount: number) => {
  db.updateTable('tweetCount')
    .set({ count: tweetCount, updated_at: new Date() })
    .where('tweetCount.id', '=', 1)
    .executeTakeFirst()
}

// get stored github metrics
export const getStoredGithubMetrics = async (): Promise<githubMetricsType> => {
  const res = await db
    .selectFrom('githubMetrics')
    .select([
      'githubMetrics.commits as commits',
      'githubMetrics.repos as repos',
    ])
    .execute()
  return res[0]
}

// update github metrics
export const updateGithubMetrics = (commits: number, repos: number) => {
  db.updateTable('githubMetrics')
    .set({ commits: commits, repos: repos, updated_at: new Date() })
    .where('githubMetrics.id', '=', 1)
    .execute()
}
