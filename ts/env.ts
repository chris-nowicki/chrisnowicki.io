import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().optional(),
  NEXT_PUBLIC_SANITY_DATASET: z.string().optional(),
  TWITTER_CONSUMER_KEY: z.string().optional(),
  TWITTER_CONSUMER_SECRET: z.string().optional(),
  TWITTER_ACCESS_TOKEN: z.string().optional(),
  TWITTER_ACCESS_TOKEN_SECRET: z.string().optional(),
  GITHUB_TOKEN: z.string().optional(),
  DATABASE_URL: z.string().optional(),
})

export type Env = z.infer<typeof envSchema>

export const env: Env = {
  NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
  TWITTER_CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET,
  TWITTER_ACCESS_TOKEN: process.env.TWITTER_ACCESS_TOKEN,
  TWITTER_ACCESS_TOKEN_SECRET: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  DATABASE_URL: process.env.DATABASE_URL,
}

envSchema.parse(env)
