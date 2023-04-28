import Link from 'next/link'
import format from 'date-fns/format'

// types
import { env } from '../../../types/env'
import { Article } from '../../../types/blog'

// query dev.to for published articles
async function getArticles(): Promise<Article[]> {
  const res = await fetch('https://dev.to/api/articles/me/published', {
    headers: {
      'api-key': env.DEVTO_API_KEY,
    },
  })
  const articles = await res.json()
  return articles
}

// icon
import { DEVTO } from '../../../components/Icons'

export const revalidate = 60 // In seconds

export default async function Blog() {
  const articles: Article[] = await getArticles()

  return (
    <div className="mb-12 px-5 md:px-0">
      <div className="flex flex-col rounded border border-borderColor-light p-4 dark:border-borderColor-dark ">
        <h1 className="flex items-center gap-1 text-2xl md:text-3xl">
          <Link
            href="https://www.dev.to/chrisnowicki/"
            prefetch={false}
            className="text-black hover:text-purple-light dark:text-white dark:hover:text-purple-dark"
          >
            <DEVTO size={32} />
          </Link>
          Blog
        </h1>
        <div className="mt-4 flex flex-col text-sm md:flex-row md:gap-3 md:text-base">
          {articles.map((article) => (
            <>
              <span className="font-bold text-purple-light dark:text-purple-dark">
                {format(new Date(article.published_at), 'MM.dd.yy')}
              </span>
              <Link
                key={article.id}
                href={article.url}
                prefetch={false}
                target="_blank"
                className="flex flex-col"
              >
                <span className="text-sm md:text-base">{article.title}</span>
                <span className="font-mono text-sm -tracking-[.08em] text-borderColor-dark/50 dark:text-white/40 md:text-base">
                  {Number(article.page_views_count).toLocaleString()} views /{' '}
                  {article.reading_time_minutes} min read
                </span>
              </Link>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}
