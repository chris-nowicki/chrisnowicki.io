import type { Article } from '@/types/types'

export async function getArticles(): Promise<Article[]> {
  const res = await fetch('https://dev.to/api/articles/me/published', {
    headers: {
      'api-key': process.env.DEVTO_API_KEY,
      useCDN: 'false',
    },
    next: {
      revalidate: 60,
    },
  })
  const articles = await res.json()
  return articles
}
