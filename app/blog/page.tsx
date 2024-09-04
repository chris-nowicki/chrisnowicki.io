import FeaturedPost from '@/components/Blog/FeaturedPost'
import PostItem from '@/components/Blog/PostItem'
import SectionHeading from '@/components/SectionHeading'
import { Metadata } from 'next'
import { getPosts } from '@/lib/markdown/posts'
import type { FrontMatter } from '@/types/types'

// metadata
const TITLE: string = `Chris Nowicki's Blog`
const DESCRIPTION: string = `Checkout my latest articles on all things tech and web development!`

const ogSearchParams = new URLSearchParams({
  page: 'BLOG',
  description: DESCRIPTION,
})

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://chrisnowicki.io/blog',
    images: [
      {
        url: `/api/og?${ogSearchParams.toString()}`,
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`/api/og?${ogSearchParams.toString()}`],
  },
}

export default async function Blog() {
  const posts: FrontMatter[] = await getPosts()
  const [featuredPost] = posts.filter((post) => post.featured)
  const sortedPosts = posts.filter((post) => post.published && !post.featured)

  return (
    <section className="mx-6 flex flex-col items-start md:mx-0">
      <SectionHeading className="text-left">Blog</SectionHeading>
      <span className="mb-6 text-muted-foreground">
        My ramblings on the web about all things tech!
      </span>

      {featuredPost && <FeaturedPost post={featuredPost} />}

      {/* post archive */}
      <div className="mt-10 w-full">
        <span className="text-2xl font-semibold md:text-3xl">Archive</span>

        {sortedPosts.length > 0 ?
          <ul className="ml-0 flex list-none flex-col gap-1">
            {sortedPosts.map(({ slug, title, readingTime }) => (
              <li key={slug}>
                <PostItem slug={slug} title={title} readingTime={readingTime} />
              </li>
            ))}
          </ul>
        : <p>Nothing to see here yet</p>}
      </div>
    </section>
  )
}
