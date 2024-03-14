import { NextResponse } from 'next/server'
import OAuth from 'oauth-1.0a'
import crypto from 'node:crypto'

// X OAUTH GENERATION FUNCTION
export async function generateTwitterOAuthHeader(url) {
  const consumerKey = process.env.TWITTER_CONSUMER_KEY
  const consumerSecret = process.env.TWITTER_CONSUMER_SECRET
  const accessToken = process.env.TWITTER_ACCESS_TOKEN
  const accessTokenSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET

  if (!consumerKey || !consumerSecret || !accessToken || !accessTokenSecret) {
    console.error('Missing required environment variables')
    throw new Error('Missing required environment variables')
  }

  const oauth = new OAuth({
    consumer: { key: consumerKey, secret: consumerSecret },
    signature_method: 'HMAC-SHA1',
    hash_function(baseString, key) {
      return crypto.createHmac('sha1', key).update(baseString).digest('base64')
    },
  })

  const requestData = {
    url: url,
    method: 'GET',
  }

  const token = {
    key: accessToken,
    secret: accessTokenSecret,
  }

  return oauth.toHeader(
    oauth.authorize(requestData, token)
  ) as unknown as Headers
}

// X FETCH FUNCTION
export const getTweetCount = async (url: string, headers: HeadersInit) => {
  const response = await fetch(url, {
    headers,
  }).then((res) => res.json())

  if (response.status === 429) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })
  }

  return response.data.public_metrics.tweet_count
}
