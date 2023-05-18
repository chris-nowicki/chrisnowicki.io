import { z } from 'zod'

const privateEnvSchema = z.object({
  TWITTER_CONSUMER_KEY: z.string(),
  TWITTER_CONSUMER_SECRET: z.string(),
  TWITTER_ACCESS_TOKEN: z.string(),
  TWITTER_ACCESS_TOKEN_SECRET: z.string(),
  GITHUB_TOKEN: z.string(),
  DEVTO_API_KEY: z.string(),
  NODE_ENV: z.string(),
})

export type Env = z.infer<typeof privateEnvSchema>

export const env: Env = {
  TWITTER_CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET,
  TWITTER_ACCESS_TOKEN: process.env.TWITTER_ACCESS_TOKEN,
  TWITTER_ACCESS_TOKEN_SECRET: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  DEVTO_API_KEY: process.env.DEVTO_API_KEY,
  NODE_ENV: process.env.NODE_ENV,
}

privateEnvSchema.parse(env)
