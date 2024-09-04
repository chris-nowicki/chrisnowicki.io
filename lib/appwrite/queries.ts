import { db } from './config'
import { env } from '@/env'
import { IGithubMetrics, IXMetrics } from '@/types/types'

const x_DocumentId = env.X_DOCUMENT_ID
const github_DocumentId = env.GITHUB_DOCUMENT_ID

const cache: Record<string, any> = {}

async function withRetry<T>(
  operation: () => Promise<T>,
  maxRetries = 3
): Promise<T> {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await operation()
    } catch (error) {
      if (i === maxRetries - 1) throw error
      console.log(`Retry attempt ${i + 1} of ${maxRetries}`)
      await new Promise((resolve) => setTimeout(resolve, 1000 * Math.pow(2, i)))
    }
  }
  throw new Error('Max retries reached')
}

async function handleDocumentOperation<T>(
  operation: 'get' | 'update',
  databaseId: string,
  collectionId: string,
  documentId: string,
  data?: Partial<T>
): Promise<T> {
  return withRetry(async () => {
    try {
      if (operation === 'get') {
        return (await db.getDocument(databaseId, collectionId, documentId)) as T
      } else if (operation === 'update' && data) {
        const result = (await db.updateDocument(
          databaseId,
          collectionId,
          documentId,
          data
        )) as T
        // Invalidate cache after update
        delete cache[`${collectionId}_${documentId}`]
        return result
      }
      throw new Error('Invalid operation')
    } catch (error) {
      console.error(`Error in ${operation} operation:`, error)
      throw error
    }
  })
}

// X metrics
export const getXMetrics = async (): Promise<IXMetrics['tweetCount']> => {
  const cacheKey = `metrics_${x_DocumentId}`
  if (cache[cacheKey]) return cache[cacheKey]

  const result = await handleDocumentOperation<IXMetrics>(
    'get',
    'metrics',
    'x',
    x_DocumentId
  )
  cache[cacheKey] = result.tweetCount
  return result.tweetCount
}

export const updateXMetrics = async (tweetCount: number): Promise<void> => {
  await handleDocumentOperation<IXMetrics>(
    'update',
    'metrics',
    'x',
    x_DocumentId,
    {
      tweetCount,
    }
  )
}

// GitHub metrics
export const getGithubMetrics = async (): Promise<
  IGithubMetrics['commits']
> => {
  const cacheKey = `metrics_${github_DocumentId}`
  if (cache[cacheKey]) return cache[cacheKey]

  const result = await handleDocumentOperation<IGithubMetrics>(
    'get',
    'metrics',
    'github',
    github_DocumentId
  )
  cache[cacheKey] = result.commits
  return result.commits
}

export const updateGithubMetrics = async (commits: number): Promise<void> => {
  await handleDocumentOperation<IGithubMetrics>(
    'update',
    'metrics',
    'github',
    github_DocumentId,
    { commits }
  )
}

// Get all metrics
export const getAllMetrics = async (): Promise<{
  tweetCount: IXMetrics['tweetCount']
  commitCount: IGithubMetrics['commits']
}> => {
  const [xMetrics, githubMetrics] = await Promise.all([
    getXMetrics(),
    getGithubMetrics(),
  ])
  return { tweetCount: xMetrics, commitCount: githubMetrics }
}
