import OAuth from 'oauth-1.0a'
import crypto from 'node:crypto'
import { NextResponse } from 'next/server'
import { updateTweetCount, getStoredTweetCount } from '@/lib/vercel-storage'

export const runtime = 'edge' 

import { env } from '@/types/env-private'

const getTweetCount = async (url: string, headers: HeadersInit) => {
  const response = await fetch(url, {
    headers,
    next: { revalidate: false },
  }).then((res) => res.json())

  if (response.status === 429) {
    return response
  }

  return response.data.public_metrics.tweet_count
}

export async function GET() {
  const consumerKey = env.TWITTER_CONSUMER_KEY
  const consumerSecret = env.TWITTER_CONSUMER_SECRET
  const accessToken = env.TWITTER_ACCESS_TOKEN
  const accessTokenSecret = env.TWITTER_ACCESS_TOKEN_SECRET
  const url = 'https://api.twitter.com/2/users/me?user.fields=public_metrics'

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

  try {
    const tweetCount = await getTweetCount(url, headers)

    if (tweetCount.status === 429) {
      return NextResponse.json(
        { error: 'Rate limit exceeded' },
        { status: 429 }
      )
    }

    const storedTweetCount = await getStoredTweetCount()

    if (tweetCount === storedTweetCount) {
      return NextResponse.json(`Tweet count: ${tweetCount} - (no change)`, {
        status: 208,
      })
    } else {
      updateTweetCount(tweetCount)
      return NextResponse.json(`Tweet count: ${tweetCount} - (updated)`, {
        status: 200,
      })
    }
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error }, { status: 400 })
  }
}
