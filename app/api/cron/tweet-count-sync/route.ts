import { NextResponse } from 'next/server'
import { getXMetrics, updateXMetrics } from '@/lib/appwrite'
import { getTweetCount, generateTwitterOAuthHeader } from '@/lib/x'

export const dynamic = 'force-dynamic' // Force dynamic (server) route instead of static page

const HTTP_STATUS = {
  RATE_LIMIT_EXCEEDED: 429,
  NO_CHANGE: 208,
  OK: 200,
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500,
}

const TWITTER_API_URL =
  'https://api.twitter.com/2/users/me?user.fields=public_metrics'

export async function GET() {
  try {
    const headers = await generateTwitterOAuthHeader(TWITTER_API_URL)
    const tweetCountResponse = await getTweetCount(TWITTER_API_URL, headers)

    if (tweetCountResponse instanceof NextResponse) {
      // This means we got a rate limit exceeded response
      console.error('Rate limit exceeded')
      return tweetCountResponse
    }

    const tweetCount = tweetCountResponse
    const storedTweetCount = await getXMetrics()

    if (tweetCount === storedTweetCount) {
      console.info('No change in tweet count')
      return NextResponse.json(
        { message: 'No change in tweet count', tweetCount, storedTweetCount },
        { status: HTTP_STATUS.NO_CHANGE }
      )
    }

    await updateXMetrics(tweetCount)
    console.info('Tweet count updated')
    return NextResponse.json(
      { message: 'Tweet count updated', newTweetCount: tweetCount },
      { status: HTTP_STATUS.OK }
    )
  } catch (error) {
    console.error('An error occurred:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: HTTP_STATUS.INTERNAL_SERVER_ERROR }
    )
  }
}
