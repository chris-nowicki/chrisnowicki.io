import { useCallback } from 'react'
import { Stack, Text, TextInput, Card } from '@sanity/ui'
import { set, unset } from 'sanity'

export const CloudinaryImage = (props) => {
  const { elementProps, onChange, value = '' } = props

  const handleChange = useCallback(
    (event) => {
      const nextValue = event.currentTarget.value
      onChange(nextValue ? set(nextValue) : unset())
    },
    [onChange]
  )

  return (
    <Stack space={4}>
      <TextInput {...elementProps} onChange={handleChange} value={value} />
      {value !== '' && (
        <Stack space={2}>
          <Text size={1}>Preview</Text>

          <img src={value} style={{ maxWidth: '100%', borderRadius: '5px' }} />
        </Stack>
      )}
    </Stack>
  )
}
