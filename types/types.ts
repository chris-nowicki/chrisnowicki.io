import { PortableTextBlock } from 'sanity'
import { navItems } from '@/lib/data'

export type SeoType = {
  name: string
  siteName: string
  url: string
  description: string
  type: string
  image: string
}

export type OGImageType = {
  url: string
}

export type SectionName = (typeof navItems)[number]['name']

export type HomePageType = {
  profilePicture: string
  content: PortableTextBlock[]
  featuredProjects: ProjectType[]
  resumeURL: string
  skills: {
    name: string
    link: string
  }[]
}

export type MetricsType = {
  tweetCount: number
  githubCommits: number
  githubRepos: number
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

export type Article = {
  id: string
  title: string
  url: string
  published_at: string
  page_views_count: number
  reading_time_minutes: number
}
