import { Generated, ColumnType } from 'kysely'
import { createKysely } from '@vercel/postgres-kysely'

// types
import { Metrics } from '../types/metrics'

type Database = {
  tweetcount: TweetCountTable
  githubmetrics: GitHubMetricsTable
}

type TweetCountTable = {
  id: Generated<number>
  count: number
  updated_at: ColumnType<Date, string | undefined>
}

type GitHubMetricsTable = {
  id: Generated<number>
  commits: number
  repos: number
  updated_at: ColumnType<Date, string | undefined>
}

const db = createKysely<Database>()

// query to fetch tweet count and github metrics
export async function getMetrics(): Promise<Metrics> {
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

// update tweet count
export const updateTweetCount = (tweetCount: number) => {
  db.updateTable('tweetcount')
    .set({ count: tweetCount })
    .where('tweetcount.id', '=', 1)
    .executeTakeFirst()
}

// update github metrics
export const updateGithubMetrics = (commits: number, repos: number) => {
  db.updateTable('githubmetrics')
    .set({ commits: commits, repos: repos })
    .where('githubmetrics.id', '=', 1)
    .executeTakeFirst()
}
