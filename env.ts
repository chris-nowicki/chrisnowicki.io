import { z } from 'zod'

const envSchema = z.object({
    SANITY_DATASET: z.string(),
    SANITY_PROJECT_ID: z.string(),
    SANITY_TOKEN: z.string(),
    TWITTER_CONSUMER_KEY: z.string(),
    TWITTER_CONSUMER_SECRET: z.string(),
    TWITTER_ACCESS_TOKEN: z.string(),
    TWITTER_ACCESS_TOKEN_SECRET: z.string(),
    GITHUB_TOKEN: z.string(),
    DATABASE_URL: z.string(),
})

export type Env = z.infer<typeof envSchema>

export const env: Env = {
    SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    SANITY_TOKEN: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    TWITTER_CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY,
    TWITTER_CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET,
    TWITTER_ACCESS_TOKEN: process.env.TWITTER_ACCESS_TOKEN,
    TWITTER_ACCESS_TOKEN_SECRET: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    DATABASE_URL: process.env.DATABASE_URL,
} as const

envSchema.parse(env)
