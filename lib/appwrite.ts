import sdk from 'node-appwrite'
import { env } from '../env'

const endPoint = env.APPWRITE_ENDPOINT
const projectId = env.APPWRITE_PROJECT_ID
const apiKey = env.APPWRITE_API_KEY
const devto_DocumentId = env.DEVTO_DOCUMENT_ID
const x_DocumentId = env.X_DOCUMENT_ID
const github_DocumentId = env.GITHUB_DOCUMENT_ID

// initialize the Appwrite Server SDK
export const client = new sdk.Client()
  .setEndpoint(endPoint)
  .setProject(projectId)
  .setKey(apiKey)

const db = new sdk.Databases(client)

// Appwrite DB Queries
// devto post metrics
export const getPostViews = async () => {
  const res = await db.getDocument('metrics', 'devto', devto_DocumentId)
  // @ts-ignore
  return res.postViews
}

export const updatePostViews = async (postViews: number) => {
  await db.updateDocument('metrics', 'devto', devto_DocumentId, {
    postViews: postViews,
  })
}

// twitter metrics
export const getXMetrics = async () => {
  const res = await db.getDocument('metrics', 'x', x_DocumentId)
  // @ts-ignore
  return res.tweetCount
}

export const updateXMetrics = async (tweetCount: number) => {
  await db.updateDocument('metrics', 'x', x_DocumentId, {
    tweetCount: tweetCount,
  })
}

// github metrics
export const getGithubMetrics = async () => {
  const res = await db.getDocument('metrics', 'github', github_DocumentId)
  // @ts-ignore
  return res.commits
}

export const updateGithubMetrics = async (commits: number) => {
  await db.updateDocument('metrics', 'github', github_DocumentId, {
    commits: commits,
  })
}
