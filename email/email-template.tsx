import * as React from 'react'
import {
  Html,
  Head,
  Preview,
  Body,
  Heading,
  Text,
  Container,
} from '@react-email/components'
import { Tailwind } from '@react-email/components'

interface EmailTemplateProps {
  senderEmail: string
  message: string
}

export default function EmailTemplate(props: EmailTemplateProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="text-black">
          <Text>Chris,</Text>
          <Text>
            {props.senderEmail} used the contact form on your portfolio website
            and says:
          </Text>
          <Text className="text-purple-600">{props.message}</Text>
        </Body>
      </Tailwind>
    </Html>
  )
}
