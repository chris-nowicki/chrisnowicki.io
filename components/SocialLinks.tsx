import { FC, JSX } from 'react'

import { socialLinks } from '@/config/links'
import { cn } from '@/utils/utils'
import Link from 'next/link'
import Icon from './Icon'
import { buttonVariants } from './ui/button'

interface SocialProps {
  className?: string
  isFooter?: boolean
}

const SocialLinks: FC<SocialProps> = ({
  className,
  isFooter = false,
}): JSX.Element => {
  return (
    <section
      className={cn(
        'flex flex-col gap-2 rounded-lg border p-4 shadow-lg md:flex-row',
        isFooter ? 'w-full' : 'w-full md:w-1/2',
        className
      )}
    >
      <div className={cn('flex w-full flex-col gap-2')}>
        <a
          href="/files/ChrisNowicki_Resume.pdf"
          className={cn(
            buttonVariants({ variant: 'outline' }),
            'group flex items-center justify-center gap-2 rounded-lg py-6 hover:border-primary hover:bg-transparent hover:shadow group-hover:text-primary',
            isFooter && 'w-full'
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon id="pdf" size={28} />
          Download CV
          <Icon
            id="download"
            size={20}
            className="transition-all group-hover:animate-bounce"
          />
        </a>

        <div className="flex items-center gap-2">
          {socialLinks.map(({ URL, icon, aria }, index) => (
            <Link
              key={`${URL}-${index}`}
              href={URL}
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'flex w-full items-center justify-center px-2 py-6 hover:border-primary hover:bg-transparent hover:text-primary md:px-[9px] md:py-5'
              )}
              target="_blank"
              aria-label={aria}
              rel="noopener noreferrer"
            >
              <Icon id={icon} size={28} focusable={false} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialLinks
