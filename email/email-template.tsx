import * as React from 'react'
import {
  Html,
  Head,
  Preview,
  Body,
  Heading,
  Text,
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
          <Heading>Message from {props.senderEmail}</Heading>
          <Text>{props.message}</Text>
        </Body>
      </Tailwind>
    </Html>
  )
}
