import { FC } from 'react'

import SectionHeading from '@/components/SectionHeading'
import { buttonVariants } from '@/components/ui/button'
import { contactPageLinks } from '@/config/links'
import { cn } from '@/utils/utils'
import Link from 'next/link'

const Contact: FC = (): JSX.Element => {
  return (
    <section
      id="contact"
      className="flex w-full flex-col items-center gap-2 rounded-xl border p-4 md:p-8"
    >
      <SectionHeading className="text-3xl md:text-4xl">Contact</SectionHeading>

      {/* contact description */}
      <p className="px-6 md:px-12 md:text-lg">
        Please contact me directly at{' '}
        <a
          className="text-primary hover:underline"
          href="mailto:chris@chrisnowicki.io"
        >
          chris@chrisnowicki.io
        </a>
        .
      </p>

      {/* contact buttons */}
      <div className="flex gap-3">
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

export default Contact
