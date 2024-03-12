import Link from 'next/link'
import { format } from 'date-fns'
import { CalendarIcon } from '@radix-ui/react-icons'
import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'

interface PostItemProps {
  slug: string
  title: string
  excerpt?: string
  date: string
  readingTime?: string
}

export default function PostItem({
  slug,
  title,
  excerpt,
  date,
  readingTime,
}: PostItemProps) {
  return (
    <article className="flex w-full flex-col gap-2 border-b border-border py-3">
      <div>
        <h2 className="border-none text-2xl font-bold">
          <Link href={slug}>{title}</Link>
        </h2>
        <div className="text- max-w-none text-muted-foreground">{excerpt}</div>
      </div>
      <div className="flex items-center justify-between">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="flex items-center gap-1 text-sm font-medium sm:text-base">
            <CalendarIcon className="h-4 w-4" />
            <time dateTime={date}>
              {format(new Date(date), 'MMMM dd, yyyy')}
            </time>
          </dd>
        </dl>
        {readingTime && <p>{readingTime}</p>}
        <Link
          href={slug}
          className={cn(buttonVariants({ variant: 'link' }), 'py-0')}
        >
          Read More →
        </Link>
      </div>
    </article>
  )
}
