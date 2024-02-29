import OAuth from 'oauth-1.0a'
import crypto from 'node:crypto'
import { NextRequest, NextResponse } from 'next/server'
import { updateTweetCount, getStoredTweetCount } from '@/lib/planetscale'
import { getTweetCount } from '@/lib/x'

// Nextjs route segment config
export const dynamic = 'force-dynamic' // Force dynamic (server) route instead of static page

export async function GET(req: NextRequest) {
  const consumerKey = process.env.TWITTER_CONSUMER_KEY
  const consumerSecret = process.env.TWITTER_CONSUMER_SECRET
  const accessToken = process.env.TWITTER_ACCESS_TOKEN
  const accessTokenSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET
  const url = 'https://api.twitter.com/2/users/me?user.fields=public_metrics'

  // make sure request is coming from vercel
  const authToken = (req.headers.get('authorization') || '')
    .split('Bearer ')
    .at(1)

  if (!authToken || authToken != process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // OAuth 1.0a setup
  const oauth = new OAuth({
    consumer: { key: consumerKey, secret: consumerSecret },
    signature_method: 'HMAC-SHA1',
    hash_function(baseString, key) {
      return crypto.createHmac('sha1', key).update(baseString).digest('base64')
    },
  })

  const requestData: OAuth.RequestOptions = {
    url: url,
    method: 'GET',
  }

  const token = {
    key: accessToken,
    secret: accessTokenSecret,
  }

  const headers = oauth.toHeader(
    oauth.authorize(requestData, token)
  ) as unknown as Headers

  // Twitter API request
  try {
    const tweetCount = await getTweetCount(url, headers)

    // Rate limit exceeded error
    if (tweetCount.status === 429) {
      return NextResponse.json(
        { error: 'Rate limit exceeded' },
        { status: 429 }
      )
    }

    // Fetch the current stored tweet count from PlanetScale storage
    const storedTweetCount = await getStoredTweetCount()

    // If the tweet count hasn't changed, return 208 status code
    if (tweetCount === storedTweetCount) {
      return NextResponse.json(
        `(no change) TweetCount: ${tweetCount} | StoredTweetCount: ${storedTweetCount}`,
        {
          status: 208,
        }
      )
    } else {
      // If the tweet count has changed, update the stored tweet count and return 200 status code
      updateTweetCount(tweetCount)
      return NextResponse.json(`(updated) Tweet count: ${tweetCount}`, {
        status: 200,
      })
    }
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error }, { status: 400 })
  }
}
