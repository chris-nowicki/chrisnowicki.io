export type ProjectType = {
  name: string
  description: string
  liveSiteUrl: string
  gitHubUrl: string
  image: string
  tags: string[]
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

export type FrontMatter = {
  title: string
  description?: string
  date: Date
  published: boolean
  featured: boolean
  cover?: string
  slug: string
  slugAsParams: string
  readingTime?: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Markdown<T = Record<string, any>> = {
  markdown: string
  frontMatter: FrontMatter & T
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TransformedMarkdown<T = Record<string, any>> = {
  html: string
  frontmatter: T
}

export enum Tags {
  auth0 = 'auth0',
  Clerk = 'Clerk',
  CSS = 'CSS',
  HTML = 'HTML',
  JavaScript = 'JavaScript',
  MongoDB = 'MongoDB',
  MySQL = 'MySQL',
  NextJS = 'Next.js',
  NodeJS = 'Node.js',
  PostgreSQL = 'PostgreSQL',
  React = 'React',
  Sass = 'Sass',
  Sentry = 'Sentry',
  TailwindCSS = 'TailwindCSS',
  TypeScript = 'TypeScript',
  Vite = 'Vite',
  Xata = 'Xata',
}

export interface IGithubMetrics {
  commits: number
}
export interface IXMetrics {
  tweetCount: number
}
