import React from 'react'
import { DEVTO } from '@/assets/Icons'
import { env } from '@/types/env-private'
import format from 'date-fns/format'
import { BsArrowRight, BsArrowUpRight } from 'react-icons/bs'

type Article = {
  id: string
  title: string
  url: string
  published_at: string
  page_views_count: number
  reading_time_minutes: number
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
    <section
      id="blog"
      className="flex w-full scroll-mt-28 flex-col items-center"
    >
      <h1 className="flex items-center gap-2 text-4xl uppercase">blog</h1>
      <p className="flex items-center gap-2 text-lg">
        I frequently write articles here{' '}
        <BsArrowRight className="animate-pulse" />
        <a
          href="https://www.dev.to/chrisnowicki/"
          className="text-black hover:text-purple-light dark:text-white dark:hover:text-purple-dark"
          target="_blank"
        >
          <DEVTO size={32} />
        </a>
      </p>
      <div className="mt-4 flex w-full flex-col gap-2">
        {articles.map((article: Article) => (
          <a
            key={article.id}
            href={article.url}
            className="text-md group flex items-center justify-between rounded-lg border bg-gray-300/20 p-4 text-lg hover:bg-gray-300/40"
            target="_blank"
          >
            <div className="flex flex-col">
              <span className="font-bold text-purple-light dark:text-purple-dark">
                {format(new Date(article.published_at), 'MM.dd.yy')}
              </span>

              <span className="md:text-lg">{article.title}</span>
              <span className="font-mono text-sm -tracking-[.08em] text-borderColor-dark/50 dark:text-white/40 md:text-base">
                {Number(article.page_views_count).toLocaleString()} views /{' '}
                {article.reading_time_minutes} min read
              </span>
            </div>
            <BsArrowUpRight className="mr-4 transition-all ease-in-out group-hover:scale-125 group-hover:animate-pulse" />
          </a>
        ))}
      </div>
    </section>
  )
}
