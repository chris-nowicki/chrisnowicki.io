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

export type SocialLinksType = {
  linkedin: string
  github: string
  twitter: string
  instagram: string
}

export type HomePageType = {
  profilePicture: string
  content: PortableTextBlock[]
  featuredProjects: ProjectType[]
  resumeURL: string
}

export type ProjectType = {
  projectName: string
  dateCreated: string
  liveSiteURL: string
  gitHubURL: string
  tags: TagType[]
}

type TagType = {
  name: string
}

export type SectionName = (typeof navItems)[number]['name']

export type Article = {
  id: string
  title: string
  url: string
  published_at: string
  page_views_count: number
  reading_time_minutes: number
}

export type OGImageType = {
  url: string
}

export type MetricsType = {
  tweetCount: number
  githubCommits: number
  githubRepos: number
}
