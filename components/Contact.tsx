import SectionHeading from '@/components/SectionHeading'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/utils/utils'
import Link from 'next/link'
import { contactPageLinks } from '@/lib/data'

export default async function Contact() {
  return (
    <section
      id="contact"
      className="flex w-full flex-col items-center gap-2 rounded-xl border px-4 md:px-8 md:py-8"
    >
      <SectionHeading className="text-3xl md:text-4xl">Contact</SectionHeading>

      {/* contact description */}
      <p className="px-12 md:text-lg">
        Please contact me directly at{' '}
        <a
          className="text-primary hover:underline"
          href="mailto:chris@chrisnowicki.io"
        >
          chris@chrisnowicki.io,
        </a>{' '}
        or{' '}
        <a
          className="text-primary hover:underline"
          href="https://cal.com/chriswix"
          target="_blank"
        >
          schedule a chat
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
    </section>
  )
}
