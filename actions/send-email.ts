'use server'
import EmailTemplate from '@/email/email-template'
import { getErrorMessage, validateString } from '@/utils/utils'
import type { CreateEmailResponse } from '@/types/types'
import * as React from 'react'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const from = process.env.RESEND_FROM_EMAIL
const to = process.env.RESEND_TO_EMAIL

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('email')
  const message = formData.get('message')

  // server-side form validation
  if (!validateString(senderEmail, 500)) {
    console.log('Invalid sender email')
    return {
      error: 'Invalid sender email',
    }
  }
  if (!validateString(message, 5000)) {
    console.log('Invalid message')
    return {
      error: 'Invalid message',
    }
  }

  // send email
  let data: CreateEmailResponse

  try {
    data = await resend.emails.send({
      from,
      to,
      reply_to: senderEmail,
      subject: 'Someone is trying to contact you!',
      react: React.createElement(EmailTemplate, {
        message: message,
        senderEmail: senderEmail,
      }),
    })
  } catch (error: unknown) {
    console.log('Error sending email:', error)
    return {
      error: getErrorMessage(error),
    }
  }

  console.log('Email sent:', data)
  return {
    data,
  }
}
