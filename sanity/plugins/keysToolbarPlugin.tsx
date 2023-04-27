// plugins/secrets-toolbar.ts
import { definePlugin } from 'sanity'
import { KeysToolbar } from '../components/Toolbar/Keys/KeysToolbar'

export const keysToolbarPlugin = definePlugin({
  name: 'api-key-toolbar',
  studio: {
    components: {
      toolMenu: KeysToolbar,
    },
  },
})
