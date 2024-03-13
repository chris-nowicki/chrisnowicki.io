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
        className="text-md font-semibold hover:text-primary md:text-xl"
      >
        {title}
      </Link>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Icon id="clock" size={16} />
        {readingTime}
      </div>
    </article>
  )
}
