import { PortableTextBlock } from 'sanity'

export type SeoType = {
  name: string
  siteName: string
  url: string
  description: string
  type: string
  image: string
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

export type TagType = {
  name: string
}

export type AboutPageType = {
  profilePicture: string
  content: PortableTextBlock[]
}

export type OGImageType = {
  url: string
}

export type SocialLinksType = {
  linkedin: string
  github: string
  twitter: string
  instagram: string
}

export type MetricsType = {
  tweetCount: number
  githubCommits: number
  githubRepos: number
}

export type TechDataType = {
  name: string
  category: string
  link?: string
}
