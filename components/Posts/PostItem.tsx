import Link from 'next/link'
import Icon from '../Icon'

interface PostItemProps {
  slug: string
  title: string
  readingTime: string
}

export default function PostItem({ slug, title, readingTime }: PostItemProps) {
  return (
    <article className="flex w-full flex-col border-l-2 pl-4 hover:border-primary">
      <Link
        href={slug}
        prefetch={true}
        className="text-xl font-semibold hover:text-primary"
      >
        {title}
      </Link>
      <div className="text-md flex items-center gap-2 text-muted-foreground">
        <Icon id="clock" size={16} />
        {readingTime}
      </div>
    </article>
  )
}
