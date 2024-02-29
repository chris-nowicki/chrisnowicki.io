import { PortableTextBlock } from 'sanity'

export type SeoType = {
  name: string
  siteName: string
  url: string
  description: string
  image: string
}

export type IntroType = {
  profilePicture: string
  content: PortableTextBlock[]
}

export type ProjectType = {
  name: string
  excerpt: string
  liveSiteUrl: string
  gitHubUrl: string
  image: string
  tags: {
    name: string
  }[]
}

export type SkillsType = {
  name: string
  link?: string
}

export type Article = {
  id: string
  title: string
  url: string
  published_at: string
  page_views_count: number
  reading_time_minutes: number
}

export type MetricsType = {
  tweetCount: number
  githubCommits: number
  githubRepos: number
}

export type githubMetricsType = {
  commits: number
  repos: number
}
