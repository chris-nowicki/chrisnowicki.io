import 'server-only'
import { Generated, ColumnType } from 'kysely'
import { createKysely } from '@vercel/postgres-kysely'
import format from 'date-fns/format'

// types
import { MetricsType } from 'types'

type Database = {
  tweetcount: TweetCountTable
  githubmetrics: GitHubMetricsTable
}

type TweetCountTable = {
  id: Generated<number>
  count: number
  updated_at: ColumnType<string | undefined>
}

type GitHubMetricsTable = {
  id: Generated<number>
  commits: number
  repos: number
  updated_at: ColumnType<string | undefined>
}

type githubMetricsType = {
  commits: number
  repos: number
}

const db = createKysely<Database>()

const date = format(new Date(), 'dd-MM-yy HH:mm')

// query to fetch tweet count and github metrics
export async function getMetrics(): Promise<MetricsType> {
  const res = await db
    .selectFrom(['tweetcount', 'githubmetrics'])
    .select([
      'tweetcount.count as tweetCount',
      'githubmetrics.commits as githubCommits',
      'githubmetrics.repos as githubRepos',
    ])
    .execute()
  return res[0]
}

// get stored tweet count
export async function getStoredTweetCount(): Promise<number> {
  const res = await db
    .selectFrom('tweetcount')
    .select(['tweetcount.count as tweetCount'])
    .execute()
  return res[0].tweetCount
}

// update tweet count
export const updateTweetCount = (tweetCount: number) => {
  db.updateTable('tweetcount')
    .set({ count: tweetCount, updated_at: date })
    .where('tweetcount.id', '=', 1)
    .executeTakeFirst()
}

// get stored github metrics
export const getStoredGithubMetrics = async (): Promise<githubMetricsType> => {
  const res = await db
    .selectFrom('githubmetrics')
    .select([
      'githubmetrics.commits as commits',
      'githubmetrics.repos as repos',
    ])
    .execute()
  return res[0]
}

// update github metrics
export const updateGithubMetrics = (commits: number, repos: number) => {
  db.updateTable('githubmetrics')
    .set({ commits: commits, repos: repos, updated_at: date })
    .where('githubmetrics.id', '=', 1)
    .executeTakeFirst()
}
