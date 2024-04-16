import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { myStructure } from '@/sanity/deskStructure'
import { visionTool } from '@sanity/vision'
import { media } from 'sanity-plugin-media'
import { schemaTypes } from '@/sanity/schemas'
import { env } from '@/env'

const config = defineConfig({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION,
  basePath: '/admin',
  title: 'chrisnowicki.io',

  plugins: [
    structureTool({
      structure: myStructure,
    }),
    visionTool(),
    media(),
  ],

  schema: {
    types: (prev, context) => {
      console.log(context) // logs { projectId, dataset }
      return [...schemaTypes, ...prev]
    },
  },
})

export default config
