export type Database = {
  tweetcount: TweetCountTable
  githubmetrics: GitHubMetricsTable
}

type TweetCountTable = {
  id: number
  count: number
  updated_at?: string
}

type GitHubMetricsTable = {
  id: number
  commits: number
  repos: number
}

export type Metrics = {
  tweetCount: number
  githubCommits: number
  githubRepos: number
}
