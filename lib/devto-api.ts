import { env } from '@/types/env-private'

type Article = {
  id: string
  title: string
  url: string
  published_at: string
  page_views_count: number
  reading_time_minutes: number
}

export async function getArticles(): Promise<Article[]> {
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
