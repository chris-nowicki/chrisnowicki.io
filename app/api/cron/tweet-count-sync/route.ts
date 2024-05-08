
import { NextResponse } from 'next/server'
import { getXMetrics, updateXMetrics } from '@/lib/appwrite'
import { getTweetCount } from '@/lib/x'
import { generateTwitterOAuthHeader } from '@/lib/x'

export const dynamic = 'force-dynamic' // Force dynamic (server) route instead of static page

const HTTP_STATUS = {
  RATE_LIMIT_EXCEEDED: 429,
  NO_CHANGE: 208,
  OK: 200,
  BAD_REQUEST: 400,
}

export async function GET() {
  const url = 'https://api.twitter.com/2/users/me?user.fields=public_metrics'
  const headers = await generateTwitterOAuthHeader(url)

  try {
    // fetch tweet count from X API
    const tweetCount = await getTweetCount(url, headers)
    if (tweetCount.status === HTTP_STATUS.RATE_LIMIT_EXCEEDED) {
      console.error('Rate limit exceeded')
      return NextResponse.json(
        { error: 'Rate limit exceeded' },
        { status: HTTP_STATUS.RATE_LIMIT_EXCEEDED }
      )
    }

    // fetch stored tweet count from Appwrite
    const storedTweetCount = await getXMetrics()
    if (tweetCount === storedTweetCount) {
      console.info('No change in tweet count')
      return NextResponse.json(
        `(no change) TweetCount: ${tweetCount} | StoredTweetCount: ${storedTweetCount}`,
        {
          status: HTTP_STATUS.NO_CHANGE,
        }
      )
    }

    // update tweet count in if there is a change
    await updateXMetrics(tweetCount)
    console.info('Tweet count updated')
    return NextResponse.json(`(updated) Tweet count: ${tweetCount}`, {
      status: HTTP_STATUS.OK,
    })
  } catch (error) {
    console.error('An error occurred:', error)
    return NextResponse.json(
      { error: error.message || error },
      { status: HTTP_STATUS.BAD_REQUEST }
    )
  }
}
