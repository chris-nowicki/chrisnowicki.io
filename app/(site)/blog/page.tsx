import { posts } from '#site/content'
import FeaturedPost from '@/components/Blog/FeaturedPost'
import PostItem from '@/components/Blog/PostItem'
import SectionHeading from '@/components/SectionHeading'
import { sortPosts } from '@/utils/utils'
import { Metadata } from 'next'

// metadata
const title: string = `Chris Nowicki's Blog`
const description: string = `Checkout my latest articles on all things tech and web development!`

const ogSearchParams = new URLSearchParams()
ogSearchParams.set('page', 'BLOG')
ogSearchParams.set('description', description)

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: 'https://chrisnowicki.io/blog',
    images: [
      {
        url: `/api/og?${ogSearchParams.toString()}`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: [`/api/og?${ogSearchParams.toString()}`],
  },
}

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
      <FeaturedPost post={featuredPosts} />

      {/* post archive */}
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
