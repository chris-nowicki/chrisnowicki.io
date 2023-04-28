export type Database = {
  tweetCount: TweetCountTable
  githubMetrics: GitHubMetricsTable
}

type TweetCountTable = {
  count: number
  updated_at?: string
}

type GitHubMetricsTable = {
  commits: number
  repos: number
}

export type Metrics = {
  tweetCount: number
  githubCommits: number
  githubRepos: number
}
