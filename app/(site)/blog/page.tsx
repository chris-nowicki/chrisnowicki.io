import SectionHeading from '@/components/SectionHeading'
import { posts } from '#site/content'
import PostItem from '@/components/Posts/PostItem'
import { sortPosts } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import Icon from '@/components/Icon'

export default async function Blog() {
  const sortedPosts = sortPosts(
    posts.filter((post) => post.published && !post.featured)
  )
  const featuredPosts = posts.filter((post) => post.featured)[0]
  const displayPosts = sortedPosts

  return (
    <section className="mx-6 flex flex-col items-start md:mx-0">
      <SectionHeading className="-mb-6 text-left">Blog</SectionHeading>
      <p className="mb-6 text-muted-foreground">
        My ramblings on the web about all things tech!
      </p>

      {/* featured post */}
      <div className="relative flex w-full flex-wrap rounded-xl border group-hover:shadow-none md:flex-row">
        <Image
          src={featuredPosts.cover}
          width={300}
          height={100}
          alt={featuredPosts.title}
          className="w-full rounded-tl-xl rounded-tr-xl object-cover md:w-1/2 md:rounded-bl-xl md:rounded-tr-none"
        />
        <div className="flex w-full flex-col p-4 md:w-1/2">
          <span className="text-lg font-semibold">{featuredPosts.title}</span>
          <p className="text-muted-foreground">{featuredPosts.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-primary">
              <Icon id="clock" className="h-4 w-4" />
              {featuredPosts.readingTime}
            </div>
            <Link
              href={featuredPosts.slug}
              prefetch={true}
              className="group flex items-center gap-1 text-primary"
            >
              Read More{' '}
              <Icon
                id="arrow-right"
                className="transition-all ease-in-out group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
        {/* badge */}
        <Icon
          id="featured"
          className="absolute -right-4 -top-2 text-primary md:-right-3 md:-top-2"
          size={48}
        />
      </div>

      {/* non-featured posts */}
      <div className="mt-10 w-full">
        <span className="text-2xl font-semibold md:text-3xl">Archive</span>
        {displayPosts?.length > 0 ?
          <ul className="ml-0 flex list-none flex-col gap-1">
            {displayPosts.map((post, index) => (
              <li key={index}>
                <PostItem
                  slug={post.slug}
                  title={post.title}
                  readingTime={post.readingTime}
                />
              </li>
            ))}
          </ul>
        : <p>Nothing to see here yet</p>}
      </div>
    </section>
  )
}
