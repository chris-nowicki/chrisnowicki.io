import FeaturedPost from '@/components/Blog/FeaturedPost'
import PostItem from '@/components/Blog/PostItem'
import SectionHeading from '@/components/SectionHeading'
import { Metadata } from 'next'
import { getPosts } from '@/utils/posts'
import type { FrontMatter } from '@/types/types'

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
  const posts: FrontMatter[] = await getPosts()
  const featuredPosts = posts.filter((post) => post.featured)[0]
  const sortedPosts = posts.filter((post) => post.published && !post.featured)

  return (
    <section className="mx-6 flex flex-col items-start md:mx-0">
      <SectionHeading className="text-left">Blog</SectionHeading>
      <span className="mb-6 text-muted-foreground">
        My ramblings on the web about all things tech!
      </span>

      {/* featured post */}
      <FeaturedPost post={featuredPosts} />

      {/* post archive */}
      <div className="mt-10 w-full">
        <span className="text-2xl font-semibold md:text-3xl">Archive</span>

        {sortedPosts?.length > 0 ?
          <ul className="ml-0 flex list-none flex-col gap-1">
            {sortedPosts.map((post, index) => (
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
