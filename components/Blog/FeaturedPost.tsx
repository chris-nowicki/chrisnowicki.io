import Image from 'next/image'
import Icon from '../Icon'
import Link from 'next/link'

export default function FeaturedPost({ post }) {
  return (
    <Link
      href={post.slug}
      className="relative flex w-full flex-wrap rounded-xl border group-hover:shadow-none md:flex-row"
    >
      <div className="flex w-full md:w-1/2 md:rounded-bl-xl md:rounded-tl-none">
        <Image
          src={post.cover}
          width={383}
          height={272}
          alt={post.title}
          className="w-full rounded-tl-xl rounded-tr-xl md:rounded-bl-xl md:rounded-tr-none"
          priority
        />
      </div>

      <div className="flex w-full flex-col justify-between p-4 md:w-1/2">
        <span className="text-lg font-semibold">{post.title}</span>
        <span className="text-muted-foreground">{post.description}</span>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-primary">
            <Icon id="clock" className="h-4 w-4" />
            {post.readingTime}
          </div>
          <div className="group flex items-center gap-1 text-primary">
            Read More{' '}
            <Icon
              id="arrow-right"
              className="transition-all ease-in-out group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
      {/* badge */}
      <div className="absolute left-1 top-1 flex items-center gap-2 text-white">
        <Icon id="star" size={26} />
        <span className="text-lg font-semibold">Featured Article</span>
      </div>
    </Link>
  )
}
