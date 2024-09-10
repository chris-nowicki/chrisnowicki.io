import { FC } from 'react'

import { getPosts } from '@/lib/markdown/posts'
import { Metadata } from 'next'
import Link from 'next/link'

import { CldOgImage } from 'next-cloudinary'
import CldImage from '@/components/CldImage'
import Icon from '@/components/Icon'
import SectionHeading from '@/components/SectionHeading'
import type { IPostFrontMatter } from '@/types/types'

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
}

const Blog: FC = async (): Promise<JSX.Element> => {
  const posts: IPostFrontMatter[] = await getPosts()
  const [featuredPost] = posts.filter((post) => post.featured)
  const sortedPosts = posts.filter((post) => post.published && !post.featured)

  return (
    <section className="mx-6 flex flex-col items-start md:mx-0">
      <CldOgImage
        src="/portfolio/vksq41gpozn34ishv1yx"
        width={1200}
        height={630}
        alt={TITLE}
        overlays={[
          {
            position: {
              x: 91,
              y: 80,
              gravity: 'north_west',
            },
            text: {
              color: 'white',
              fontFamily: 'Arial',
              fontSize: 175,
              fontWeight: 'bold',
              text: '/Blog',
            },
          },
          {
            width: 1900,
            crop: 'fit',
            position: {
              x: 91,
              y: 280,
              gravity: 'north_west',
            },
            text: {
              color: 'white',
              fontFamily: 'Arial',
              fontSize: 110,
              letterSpacing: '-0.05em',
              text: `${DESCRIPTION}`,
            },
          },
        ]}
      />

      <SectionHeading className="text-left">Blog</SectionHeading>
      <span className="mb-6 text-muted-foreground">
        My ramblings on the web about all things tech!
      </span>

      {featuredPost && (
        <Link
          href={featuredPost.slug}
          className="relative flex w-full flex-wrap rounded-xl border group-hover:shadow-none md:flex-row"
        >
          <div className="flex w-full md:w-1/2 md:rounded-bl-xl md:rounded-tl-none">
            <CldImage
              src={featuredPost.cover}
              width={383}
              height={272}
              alt={featuredPost.title}
              className="w-full rounded-tl-xl rounded-tr-xl md:rounded-bl-xl md:rounded-tr-none"
            />
          </div>

          <div className="flex w-full flex-col justify-between p-4 md:w-1/2">
            <span className="text-lg font-semibold">{featuredPost.title}</span>
            <span className="text-muted-foreground">
              {featuredPost.description}
            </span>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-primary">
                <Icon id="clock" className="h-4 w-4" />
                {featuredPost.readingTime}
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
      )}

      {/* post archive */}
      <div className="mt-10 w-full">
        <span className="text-2xl font-semibold md:text-3xl">Archive</span>

        {sortedPosts.length > 0 ?
          <ul className="ml-0 flex list-none flex-col gap-1">
            {sortedPosts.map(({ slug, title, readingTime }) => (
              <li key={slug}>
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
              </li>
            ))}
          </ul>
        : <p>Nothing to see here yet</p>}
      </div>
    </section>
  )
}

export default Blog
