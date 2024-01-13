import Link from 'next/link'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

type ContactButtonProps = {
  URL: string
  contactInfo: {
    text: string
    icon: JSX.Element
  }
}

export default function ContactButton({
  contactInfo,
  URL,
}: ContactButtonProps) {
  return (
    <Button variant="outline" className="rounded-lg py-6">
      <Link
        href={URL}
        className="group flex items-center gap-2 text-lg"
        prefetch={true}
        target={URL !== '/contact' ? '_blank' : ''}
      >
        {contactInfo.text}
        <span
          className={cn(
            'transition-all ',
            URL !== '/contact' && 'group-hover:translate-y-1'
          )}
        >
          {contactInfo.icon}
        </span>
      </Link>
    </Button>
  )
}
