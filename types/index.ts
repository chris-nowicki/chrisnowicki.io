import { PortableTextBlock } from 'sanity'

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

export type SocialLinksType = {
  linkedin: string
  github: string
  twitter: string
  instagram: string
}

export type AboutMeType = {
  about: PortableTextBlock[]
  bio: PortableTextBlock[]
  profilePicture: string
}

export type MetricsType = {
  tweetCount: number
  githubCommits: number
  githubRepos: number
}

export type ContactInfoType = {
  name: string
  email: string
  location: string
}

export type TechDataType = {
  name: string
  category: string
  link?: string
  show: boolean
}
