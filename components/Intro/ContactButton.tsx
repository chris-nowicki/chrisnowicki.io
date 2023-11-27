import Link from 'next/link'

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
  URL,
}: ContactButtonProps) {
  return (
    <Link
      href={URL}
      className="group text-lg md:text-inherit flex items-center gap-2 rounded-lg border border-borderColor-light bg-gray-300/20 p-4 px-4 py-2 hover:bg-gray-300/40 dark:border-borderColor-dark dark:bg-gray-300/10  dark:hover:bg-gray-300/20"
      prefetch={true}
      target={URL !== '/contact' ? '_blank' : ''}
    >
      {contactInfo.text}
      {contactInfo.icon}
    </Link>
  )
}
