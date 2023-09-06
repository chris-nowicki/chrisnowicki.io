import React from 'react'

type ContactButtonProps = {
  contactInfo: {
    text: string
    icon: JSX.Element
  }
  onClickProps?: () => void
  URL: string
}

export default function ContactButton({
  contactInfo,
  onClickProps,
  URL,
}: ContactButtonProps) {
  return (
    <a
      href={URL}
      className="group flex items-center gap-2 rounded-full border border-borderColor-light bg-gray-300/20 p-4 px-4 py-2 hover:bg-gray-300/40 dark:border-borderColor-dark dark:bg-gray-300/10  dark:hover:bg-gray-300/20"
      onClick={onClickProps}
    >
      {contactInfo.text}
      {contactInfo.icon}
    </a>
  )
}
