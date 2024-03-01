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

// resend response types
declare const RESEND_ERROR_CODES_BY_KEY: {
  readonly missing_required_field: 422
  readonly invalid_access: 422
  readonly invalid_parameter: 422
  readonly invalid_region: 422
  readonly rate_limit_exceeded: 429
  readonly missing_api_key: 401
  readonly invalid_api_Key: 403
  readonly invalid_from_address: 403
  readonly validation_error: 403
  readonly not_found: 404
  readonly method_not_allowed: 405
  readonly application_error: 500
  readonly internal_server_error: 500
}

interface CreateEmailResponseSuccess {
  /** The ID of the newly created email. */
  id: string
}

export interface CreateEmailResponse {
  data: CreateEmailResponseSuccess | null
  error: ErrorResponse | null
}

type RESEND_ERROR_CODE_KEY = keyof typeof RESEND_ERROR_CODES_BY_KEY

interface ErrorResponse {
  message: string
  name: RESEND_ERROR_CODE_KEY
}
