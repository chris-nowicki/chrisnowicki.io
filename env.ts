import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    APPWRITE_ENDPOINT: z.string().min(1),
    APPWRITE_PROJECT_ID: z.string().min(1),
    APPWRITE_API_KEY: z.string().min(1),
    CRON_SECRET: z.string().min(1),
    DEVTO_DOCUMENT_ID: z.string().min(1),
    GITHUB_DOCUMENT_ID: z.string().min(1),
    GITHUB_TOKEN: z.string().min(1),
    SANITY_API_READ_TOKEN: z.string().min(1),
    SANITY_REVALIDATE_SECRET: z.string().min(1),
    TWITTER_ACCESS_TOKEN: z.string().min(1),
    TWITTER_ACCESS_TOKEN_SECRET: z.string().min(1),
    TWITTER_CONSUMER_KEY: z.string().min(1),
    TWITTER_CONSUMER_SECRET: z.string().min(1),
    VERCEL_ENV: z.string().min(1),
    X_DOCUMENT_ID: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: z.string().min(1),
    NEXT_PUBLIC_SANITY_DATASET: z.string().min(1),
    NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().min(1),
    NEXT_PUBLIC_SANITY_API_VERSION: z.string().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME:
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  },
})
