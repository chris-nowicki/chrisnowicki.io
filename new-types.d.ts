import { z } from 'zod'

const envVariables = z.object({
  CRON_SECRET: z.string(),
  DEV_TO_API_KEY: z.string(),
  GITHUB_TOKEN: z.string(),
  NEXT_PUBLIC_SANITY_DATASET: z.string(),
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string(),
  SANITY_REVALIDATE_SECRET: z.string(),
  RESEND_API_KEY: z.string(),
  RESEND_FROM_EMAIL: z.string(),
  RESEND_TO_EMAIL: z.string(),
  TWITTER_ACCESS_TOKEN: z.string(),
  TWITTER_ACCESS_TOKEN_SECRET: z.string(),
  TWITTER_CONSUMER_KEY: z.string(),
  TWITTER_CONSUMER_SECRET: z.string(),
  SENTRY_AUTH_TOKEN: z.string(),
  APPWRITE_ENDPOINT: z.string(),
  APPWRITE_PROJECT_ID: z.string(),
  APPWRITE_API_KEY: z.string(),
  DEVTO_DOCUMENT_ID: z.string(),
  X_DOCUMENT_ID: z.string(),
  GITHUB_DOCUMENT_ID: z.string(),
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: z.string(),
})

envVariables.parse(process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
