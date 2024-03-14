import SectionHeading from '@/components/SectionHeading'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/utils/utils'
import Link from 'next/link'
import EmailForm from '../../../components/Contact/EmailForm'
import { contactPageLinks } from '@/lib/data'
import { Metadata } from 'next'

// metadata
const title: string = `Contact Chris Nowicki`
const description: string = `Schedule a video call or send a message`

const ogSearchParams = new URLSearchParams()
ogSearchParams.set('page', 'CONTACT')
ogSearchParams.set('description', description)

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: 'https://chrisnowicki.io/contact',
    images: [
      {
        url: `/api/og?${ogSearchParams.toString()}`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: [`/api/og?${ogSearchParams.toString()}`],
  },
}

export default async function Contact() {
  return (
    <section className="flex w-full flex-col items-center gap-2 px-4 md:items-start md:px-0">
      <SectionHeading className="-mb-6 text-left">Contact</SectionHeading>

      {/* contact description */}
      <p className="-mt-2 text-left md:text-lg">
        Please contact me directly at{' '}
        <a
          className="text-primary hover:underline"
          href="mailto:chris@chrisnowicki.io"
        >
          chris@chrisnowicki.io,
        </a>{' '}
        through the form below, or{' '}
        <a
          className="text-primary hover:underline"
          href="https://cal.com/chriswix"
          target="_blank"
        >
          schedule a call
        </a>{' '}
        with me via Cal.
      </p>

      {/* contact buttons */}
      <div className="mb-4 flex gap-3">
        {contactPageLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={cn(
              buttonVariants({ variant: link.variant, size: 'lg' }),
              'rounded-lg py-7 md:text-lg'
            )}
            target="_blank"
            aria-label={link.aria}
          >
            {link.name.toUpperCase()}
          </Link>
        ))}
      </div>

      {/* email form */}
      <EmailForm />
    </section>
  )
}
