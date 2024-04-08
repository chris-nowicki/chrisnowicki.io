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

export type MetricsType = {
  tweetCount: number
  githubCommits: number
  githubRepos: number
}

export type githubMetricsType = {
  commits: number
  repos: number
}

export type OGImageType = {
  url: string
}
