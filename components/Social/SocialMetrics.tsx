import { socialLinks } from '@/lib/data'
import { cn } from '@/utils/utils'
import Link from 'next/link'
import Icon from '../Icon'
import { buttonVariants } from '../ui/button'
import Metrics from './Metrics'

interface SocialMetricsProps {
  className?: string
  metrics?: boolean
  footer?: boolean
}

export default async function SocialMetrics({
  className,
  metrics = true,
  footer = false,
}: SocialMetricsProps) {
  return (
    <section
      className={cn(
        'flex flex-col gap-2 rounded-lg border p-4 shadow-lg md:flex-row',
        footer ? 'w-full' : 'w-full md:w-3/4',
        className
      )}
    >
      <div
        className={cn(
          'flex flex-col gap-2',
          footer ? 'w-full' : 'w-full md:w-1/2'
        )}
      >
        {/* resume */}
        <Link
          href="/ChrisNowicki_Resume.pdf"
          className={cn(
            buttonVariants({ variant: 'outline' }),
            'group flex items-center justify-center gap-2 rounded-lg py-6 hover:border-primary hover:bg-transparent hover:shadow group-hover:text-primary',
            footer && 'w-full'
          )}
          target="_blank"
        >
          <Icon id="pdf" size={28} />
          Download CV
          <Icon
            id="download"
            size={20}
            className="transition-all group-hover:animate-bounce"
          />
        </Link>

        {/* social media links */}
        <div className="flex items-center gap-2">
          {socialLinks.map((link, index) => (
            <Link
              key={index + link.URL}
              href={link.URL}
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'flex w-full items-center justify-center px-2 py-6 hover:border-primary hover:bg-transparent hover:text-primary md:px-[9px] md:py-5'
              )}
              target="_blank"
              aria-label={link.aria}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>

      {metrics && <Metrics />}
    </section>
  )
}
