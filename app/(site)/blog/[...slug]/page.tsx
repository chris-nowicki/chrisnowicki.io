import { posts } from '#site/content'
import { MDXContent } from '@/mdx-components'
import { Separator } from '@/components/ui/separator'
import { siteConfig } from '@/config/site'
import { format } from 'date-fns'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Icon from '@/components/Icon'

interface PostPageProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostPageProps['params']) {
  const slug = params?.slug?.join('/')
  const post = posts.find((post) => post.slugAsParams === slug)

  return post
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  const ogSearchParams = new URLSearchParams()
  ogSearchParams.set('title', post.title)

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
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
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  }
}

export async function generateStaticParams(): Promise<
  PostPageProps['params'][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split('/') }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)

  if (!post || !post.published) {
    notFound()
  }

  return (
    <article className="flex flex-col px-6 prose-img:mt-6 prose-img:rounded-lg prose-img:border prose-img:shadow-md dark:prose-img:shadow-none md:px-0">
      <h1 className="text-2xl md:text-5xl">{post.title}</h1>
      <div className="text-md mb-4 mt-2 flex items-center gap-2 text-muted-foreground">
        {format(new Date(post.date), 'MMMM dd, yyyy')}
        <Separator orientation="vertical" className="h-4" />
        <span>{post.readingTime}</span>
      </div>
      {post.cover && (
        <>
          <Image
            src={post.cover}
            alt={post.title}
            width={768}
            height={400}
            className="rounded-lg border-none"
          />
        </>
      )}

      <div className="mdx mt-6">
        <MDXContent code={post.body} />
      </div>
      <div className="group mt-12 flex justify-center text-xl text-muted-foreground hover:text-primary">
        <Link
          href="/blog"
          prefetch={true}
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
