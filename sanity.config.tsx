import { defineConfig, definePlugin } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'
import { myStructure } from './sanity/deskStructure'

// env variables
import { env } from './types/env'

// plugins
import { keysToolbarPlugin } from './sanity/plugins/keysToolbarPlugin'

// custom studio theme
import { theme as _theme } from './sanity/theme'
const theme = _theme as import('sanity').StudioTheme

// custom logo component
function MyCustomLogo(props: any) {
  return (
    <div style={{ border: '2px solid white', padding: 4, borderRadius: 5 }}>
      {props.renderDefault({
        ...props,
        title: props.title.toUpperCase(),
      })}
    </div>
  )
}

// create the plugin for the custom logo component
const myLogoPlugin = definePlugin({
  name: 'my-logo-plugin',
  studio: {
    components: {
      logo: (props) => (
        <div>
          {props.renderDefault({
            ...props,
            title: 'chrisnowicki.io',
          })}
        </div>
      ),
    },
  },
})

const config = defineConfig({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2021-03-25',
  basePath: '/admin',
  theme,
  title: 'cdn-portfolio',

  studio: {
    components: {
      logo: MyCustomLogo,
    },
  },

  plugins: [
    deskTool({
      structure: myStructure,
    }),
    visionTool(),
    myLogoPlugin(),
    keysToolbarPlugin(),
  ],

  schema: {
    types: schemaTypes,
  },
})

export default config
