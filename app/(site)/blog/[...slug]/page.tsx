import { posts } from '#site/content'
import { MDXContent } from '@/components/Posts/mdx-components'
import { Separator } from '@/components/ui/separator'
import { siteConfig } from '@/config/site'
import { format } from 'date-fns'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

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
      {post.description ?
        <p className="text-muted-foreground">{post.description}</p>
      : null}
      <div className="mdx">
        <MDXContent code={post.body} />
      </div>
      <div className="group mt-20 flex justify-center text-xl text-muted-foreground hover:text-primary">
        <Link
          href="/blog"
          prefetch={true}
          className="rounded-lg border p-4 group-hover:border-primary"
        >
          ← back to blog posts
        </Link>
      </div>
    </article>
  )
}
