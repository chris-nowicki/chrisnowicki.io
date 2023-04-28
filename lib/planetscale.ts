import { Kysely } from 'kysely'
import { PlanetScaleDialect } from 'kysely-planetscale'

// zod env type checking
import { env } from '../types/env'

// types
import { Database, Metrics } from '../types/planetscale'

export const queryBuilder = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: env.DATABASE_URL,
  }),
})

// query to fetch tweet count and github metrics
export async function getMetrics(): Promise<Metrics> {
  const res = await queryBuilder
    .selectFrom(['tweetCount', 'githubMetrics'])
    .select([
      'tweetCount.count as tweetCount',
      'githubMetrics.commits as githubCommits',
      'githubMetrics.repos as githubRepos',
    ])
    .execute()
  return res[0]
}

// query to update tweet count
export const updateTweetCount = (tweetCount: number) => {
  queryBuilder
    .insertInto('tweetCount')
    .values({ count: tweetCount })
    .onDuplicateKeyUpdate({ count: tweetCount })
    .execute()
}

// update github metrics
export const updateGithubMetrics = (commits: number, repos: number) => {
  queryBuilder
    .insertInto('githubMetrics')
    .values({ commits: commits, repos: repos })
    .onDuplicateKeyUpdate({ commits: commits, repos: repos })
    .execute()
}
