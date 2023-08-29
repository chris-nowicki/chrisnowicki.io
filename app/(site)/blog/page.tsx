import format from 'date-fns/format'
import ogImageURL from '@/lib/og-image-url'
import { DEVTO } from '@/components/Icons'

// types
import { Metadata } from 'next'
import { env } from '@/types/env-private'
import { OGImageType } from 'types'

type Article = {
  id: string
  title: string
  url: string
  published_at: string
  page_views_count: number
  reading_time_minutes: number
}

// metadata
const title: string = 'Blog'
const description: string = `Checkout my latest articles that I've published on dev.to!`
const ogImage: OGImageType = ogImageURL(description)

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: 'https://chrisnowicki.io/blog',
    images: [ogImage],
  },
  twitter: {
    title: title,
    card: 'summary_large_image',
  },
}

// query dev.to for published articles
async function getArticles(): Promise<Article[]> {
  const res = await fetch('https://dev.to/api/articles/me/published', {
    headers: {
      'api-key': env.DEVTO_API_KEY,
      useCDN: 'false',
    },
    next: {
      revalidate: 60,
    },
  })
  const articles = await res.json()
  return articles
}

export default async function Blog() {
  const articles: Article[] = await getArticles()

  return (
    <div className="flex flex-col p-4 md:rounded  md:border md:border-borderColor-light md:dark:border-borderColor-dark ">
      <h1 className="flex items-center gap-1 text-2xl md:text-3xl">
        <a
          href="https://www.dev.to/chrisnowicki/"
          className="text-black hover:text-purple-light dark:text-white dark:hover:text-purple-dark"
          target="_blank"
        >
          <DEVTO size={32} />
        </a>
        Blog
      </h1>
      <div className="mt-4">
        {articles.map((article: Article) => (
          <div
            key={article.id}
            className="mt-2 flex flex-col text-sm md:flex-row md:gap-3 md:text-base"
          >
            <span className="font-bold text-purple-light dark:text-purple-dark">
              {format(new Date(article.published_at), 'MM.dd.yy')}
            </span>
            <a href={article.url} target="_blank" className="flex flex-col">
              <span className="text-sm md:text-base">{article.title}</span>
              <span className="font-mono text-sm -tracking-[.08em] text-borderColor-dark/50 dark:text-white/40 md:text-base">
                {Number(article.page_views_count).toLocaleString()} views /{' '}
                {article.reading_time_minutes} min read
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
