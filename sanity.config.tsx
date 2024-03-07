import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { myStructure } from '@/sanity/deskStructure'
import { visionTool } from '@sanity/vision'
import { media } from 'sanity-plugin-media'
import { schemaTypes } from '@/sanity/schemas'

// custom studio theme
import { theme as _theme } from '@/sanity/theme'
const theme = _theme as import('sanity').StudioTheme

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2021-03-25',
  basePath: '/admin',
  theme,
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
