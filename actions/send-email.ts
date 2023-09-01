'use server'

import React from 'react'
import { Resend } from 'resend'
import { validateString, getErrorMessage } from '@/lib/utils'
import EmailTemplate from '@/email/email-template'
import { env } from '@/types/env-private'

const resend = new Resend(env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('email')
  const message = formData.get('message')

  // server-side form validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid sender email',
    }
  }
  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    }
  }

  let data
  try {
    data = await resend.emails.send({
      from: 'Portfolio Website <portfolio@chrisnowicki.io>',
      to: ['chris@chrisnowicki.io'],
      subject: 'Someone is trying to contact you!',
      react: React.createElement(EmailTemplate, {
        message: message,
        senderEmail: senderEmail,
      }),
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    }
  }

  return {
    data,
  }
}
