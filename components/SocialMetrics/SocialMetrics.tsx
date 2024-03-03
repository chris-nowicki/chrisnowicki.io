import { socialLinks } from '@/lib/data'
import { cn } from '@/lib/utils'
import { getResume } from '@/sanity/sanity-queries'
import Link from 'next/link'
import Icon from '../Icon'
import { buttonVariants } from '../ui/button'
import Metrics from './Metrics'

interface SocialMetricsProps {
  className?: string
}

export default async function SocialMetrics({ className }: SocialMetricsProps) {
  const resumeURL = await getResume()

  return (
    <section
      className={cn(
        'flex w-full flex-col gap-2 rounded-lg border p-4 shadow-lg md:w-3/4 md:flex-row', className
      )}
    >
      <div className="flex w-full flex-col gap-2 md:w-1/2">
        {/* resume */}
        <Link
          href={resumeURL}
          className={cn(
            buttonVariants({ variant: 'outline' }),
            'group flex items-center justify-center gap-2 rounded-lg py-6 hover:border-primary hover:bg-transparent hover:shadow group-hover:text-primary'
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
                'w-full px-3.5 py-6 hover:border-primary hover:bg-transparent hover:text-primary md:px-[9px] md:py-5'
              )}
              target="_blank"
              aria-label={link.aria}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>

      {/* metrics */}
      <Metrics />
    </section>
  )
}
