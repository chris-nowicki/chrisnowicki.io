import { PortableTextBlock } from 'sanity'
import { navItems } from '@/lib/data'
import { ColumnType } from 'kysely'

export type SeoType = {
  name: string
  siteName: string
  url: string
  description: string
  image: string
}

export type SectionName = (typeof navItems)[number]['name']

export type IntroType = {
  profilePicture: string
  content: PortableTextBlock[]
}

export type ProjectType = {
  projectName: string
  dateCreated: string
  liveSiteURL: string
  gitHubURL: string
  tags: {
    name: string
  }[]
}

export type SkillsType = {
  name: string
  link: string
}

export type Article = {
  id: string
  title: string
  url: string
  published_at: string
  page_views_count: number
  reading_time_minutes: number
}

export type Database = {
  tweetCount: TweetCountTable
  githubMetrics: GitHubMetricsTable
}

type TweetCountTable = {
  count: number
  updated_at?: ColumnType<Date, string | undefined>
  id?: number
}

export type MetricsType = {
  tweetCount: number
  githubCommits: number
  githubRepos: number
}

type GitHubMetricsTable = {
  commits: number
  repos: number
  updated_at?: ColumnType<Date, string | undefined>
  id?: number
}

export type githubMetricsType = {
  commits: number
  repos: number
}
