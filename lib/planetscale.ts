import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'
import type { githubMetricsType } from '@/types/types'

const prisma = new PrismaClient().$extends(withAccelerate())

// get stored tweet count
export async function getStoredTweetCount(): Promise<number> {
  const res = await prisma.tweetCount.findFirst({
    select: {
      count: true,
    },
    cacheStrategy: { ttl: 60 },
  })
  return res.count
}

// tweet count
export const updateTweetCount = async (tweetCount: number) => {
  const res = await prisma.tweetCount.update({
    where: { id: 1 },
    data: { count: tweetCount, updated_at: new Date() },
  })

  return res
}

// github metrics
export const getStoredGithubMetrics = async (): Promise<githubMetricsType> => {
  const res = await prisma.githubMetrics.findFirst({
    select: {
      commits: true,
      repos: true,
    },
    cacheStrategy: { ttl: 60 },
  })

  return res
}

export const updateGithubMetrics = async (commits: number, repos: number) => {
  const res = await prisma.githubMetrics.update({
    where: { id: 1 },
    data: { commits, repos, updated_at: new Date() },
  })

  return res
}

// dev.to total post views
export const getStoredPostViews = async (): Promise<number> => {
  const res = await prisma.postViews.findFirst({
    select: {
      count: true,
    },
    cacheStrategy: { ttl: 60 },
  })

  return res.count
}

export const updatePostViews = (viewCount: number) => {
  prisma.postViews.update({
    where: { id: 1 },
    data: { count: viewCount, updated_at: new Date() },
  })
}
