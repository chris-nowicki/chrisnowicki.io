// src/components/secrets-toolbar.ts
import { SettingsView } from '@sanity/studio-secrets'

export const secretsNamespace = 'secrets'

const pluginConfigKeys = [
  {
    key: 'ZIPCODE_API_KEY',
    title: 'ZipCode API Key',
  },
]

export const KeysInput = ({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) => {
  if (!open) {
    return null
  }

  return (
    <SettingsView
      title={'API KEYS'}
      namespace={secretsNamespace}
      keys={pluginConfigKeys}
      onClose={onClose}
    />
  )
}
