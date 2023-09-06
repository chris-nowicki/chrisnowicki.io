import React from 'react'
import { Article } from '@/types'
import { getArticles } from '@/lib/devto-api'
import DevToArticles from './DevToArticles'

export default async function Blog() {
  const articles: Article[] = await getArticles()

  return <DevToArticles articles={articles} />
}