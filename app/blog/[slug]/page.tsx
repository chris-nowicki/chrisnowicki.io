import { Separator } from '@/components/ui/separator'
import { format } from 'date-fns'
import { Metadata } from 'next'
import PostCover from '@/components/Blog/PostCover'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Icon from '@/components/Icon'
import { getPosts, getPostBySlug } from '@/utils/posts'
import '@/styles/markdown.css'

export const generateStaticParams = async () => {
  const posts = await getPosts()

  return posts
    .filter((post) => post.published)
    .map((post) => ({
      slug: post.slugAsParams,
    }))
}

interface PostPageProps {
  params: {
    slug: string
  }
}

async function getPostFromParams(params: PostPageProps['params']) {
  const posts = await getPosts()
  const slug = params?.slug
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
  ogSearchParams.set('page', 'BLOG')
  ogSearchParams.set('description', post.title)

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

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post || !post.frontmatter.published) {
    notFound()
  }

  return (
    <article className="flex flex-col px-6  md:px-0">
      <h1 className="text-2xl md:text-5xl">{post.frontmatter.title}</h1>
      <div className="text-md mb-4 mt-2 flex items-center gap-2 text-muted-foreground">
        {format(new Date(post.frontmatter.date), 'MMMM dd, yyyy')}
        <Separator orientation="vertical" className="h-4" />
        <span>{post.frontmatter.readingTime}</span>
      </div>
      {post.frontmatter.cover && (
        <PostCover
          cover={post.frontmatter.cover}
          alt={post.frontmatter.title}
        />
      )}
      <div className="mdx mt-6 prose-p:text-base prose-a:text-primary prose-img:my-6 prose-img:rounded-lg prose-img:border prose-img:shadow-md dark:prose-img:shadow-none">
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
