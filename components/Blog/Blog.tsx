import React from 'react'
import { getArticles } from '@/lib/devto-api'
import DevToArticles from './DevToArticles'
import type { Article } from '@/types/types'

export default async function Blog() {
  const articles: Article[] = await getArticles()

  return <DevToArticles articles={articles} />
}
