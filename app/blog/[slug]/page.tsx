import Icon from '@/components/Icon'
import { Separator } from '@/components/ui/separator'
import generateOgImageUrl from '@/utils/generateOgImage'
import { getPostBySlug, getPosts } from '@/lib/markdown/posts'
import '@/styles/markdown.css'
import { format } from 'date-fns'
import { Metadata } from 'next'
import CldImage from '@/components/CldImage'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export const generateStaticParams = async () => {
  const posts = await getPosts()

  return posts
    .filter((post) => post.published)
    .map((post) => ({
      slug: post.slugAsParams,
    }))
}

async function getPostFromParams(resolvedParams: { slug: string }) {
  const posts = await getPosts()
  return posts.find((post) => post.slugAsParams === resolvedParams.slug)
}

export async function generateMetadata(
  props: PostPageProps
): Promise<Metadata> {
  const params = await props.params
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  const ogImageUrl = generateOgImageUrl({
    header: '/BLOG',
    description: post.title,
  })

  return {
    title: post.title,
    description: post.description,
    authors: { name: 'Chris Nowicki' },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: post.slug,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogImageUrl],
    },
  }
}

export default async function PostPage(props: PostPageProps) {
  const params = await props.params
  const post = await getPostBySlug(params.slug)

  if (!post?.frontmatter.published) {
    notFound()
  }

  const { title, date, readingTime, cover } = post.frontmatter

  return (
    <article className="flex flex-col px-6 md:px-0">
      <h1 className="text-2xl md:text-5xl">{title}</h1>
      <div className="text-md mb-4 mt-2 flex items-center gap-2 text-muted-foreground">
        {format(new Date(date), 'MMMM dd, yyyy')}
        <Separator orientation="vertical" className="h-4" />
        <span>{readingTime}</span>
      </div>
      {cover && (
        <CldImage
          src={cover}
          alt={`${title} cover image`}
          width={768}
          height={438}
          loading="eager"
          className="rounded-lg border-none"
        />
      )}
      <div
        className="mdx mt-6 prose-p:text-base prose-a:text-primary prose-img:my-6 prose-img:rounded-lg prose-img:border prose-img:shadow-md dark:prose-img:shadow-none"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <div className="mt-12 flex justify-center">
        <Link
          href="/blog"
          className="group flex items-center gap-2 rounded-lg border border-primary p-4 text-primary transition-colors ease-in-out hover:bg-primary hover:text-white"
        >
          <Icon
            id="arrow-right"
            className="rotate-180 transition-all ease-out group-hover:-translate-x-1"
          />
          back to blog posts
        </Link>
      </div>
    </article>
  )
}
