// import 'server-only' not working with API routes yet
import { Kysely } from 'kysely'
import { PlanetScaleDialect } from 'kysely-planetscale'

interface TweetCountTable {
    count: number
    updated_at?: string
}

interface Database {
    tweetCount: TweetCountTable
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
