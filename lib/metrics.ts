import { cache } from 'react'
import { NextResponse } from 'next/server'
import { Kysely } from 'kysely'
import { PlanetScaleDialect } from 'kysely-planetscale'
import type { Database, githubMetricsType, MetricsType } from '@/types/types'

// PLANETSCALE
// create an instance of Kysely
export const db = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL,
  }),
})

// query to fetch tweet count and github metrics
async function getMetrics(): Promise<MetricsType> {
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

// cache the response of the getMetrics function
export const fetchMetrics = cache(getMetrics)

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
    .execute()
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

// TWITTER FETCH FUNCTION
export const getTweetCount = async (url: string, headers: HeadersInit) => {
  const response = await fetch(url, {
    headers,
  }).then((res) => res.json())

  if (response.status === 429) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })
  }

  return response.data.public_metrics.tweet_count
}
