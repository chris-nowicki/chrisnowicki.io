import { useState } from 'react'
import { Card, Flex, TextInput, Stack, Text, Box } from '@sanity/ui'
import { StringFieldProps, set } from 'sanity'
import {
  RiTwitterFill,
  RiLinkedinFill,
  RiInstagramFill,
  RiGithubFill,
} from 'react-icons/ri'

export const SocialLinkInput = (props: StringFieldProps) => {
  const { title, description, inputProps, value } = props
  const [link, setLink] = useState(value ? value.split('/').slice(-1) : '')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value)
    inputProps.onChange(set(description + event.target.value))
  }

  return (
    <>
      <Stack>
        <Box paddingBottom={2}>
          <Text size={1} weight="bold">
            {title}
          </Text>
        </Box>
        <Flex align={'center'}>
          <Card>
            <Flex align={'center'}>
              <Card border={false} sizing={'border'} padding={2} tone="primary">
                <Flex align={'center'} gap={2}>
                  {title === 'Linkedin' ? (
                    <RiLinkedinFill size={18} />
                  ) : title === 'GitHub' ? (
                    <RiGithubFill size={18} />
                  ) : title === 'Twitter' ? (
                    <RiTwitterFill size={18} />
                  ) : (
                    <RiInstagramFill size={18} />
                  )}
                  {description}
                </Flex>
              </Card>
            </Flex>
          </Card>

          <Card
            flex={1}
            border={true}
            padding={2}
            sizing={'border'}
            borderLeft={false}
            radius={1}
          >
            <TextInput
              onChange={handleChange}
              value={link}
              border={false}
              padding={0}
            />
          </Card>
        </Flex>
      </Stack>
    </>
  )
}
