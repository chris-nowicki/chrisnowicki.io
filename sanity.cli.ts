import { defineCliConfig } from 'sanity/cli'
import { env } from './env'

export default defineCliConfig({
  api: {
    projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  },
})
