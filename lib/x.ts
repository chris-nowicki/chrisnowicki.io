import { NextResponse } from 'next/server'
import OAuth from 'oauth-1.0a'
import crypto from 'node:crypto'
import { env } from '../env'

// X OAUTH GENERATION FUNCTION
export async function generateTwitterOAuthHeader(
  url: string
): Promise<Headers> {
  const consumerKey = env.TWITTER_CONSUMER_KEY
  const consumerSecret = env.TWITTER_CONSUMER_SECRET
  const accessToken = env.TWITTER_ACCESS_TOKEN
  const accessTokenSecret = env.TWITTER_ACCESS_TOKEN_SECRET

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

  const authHeader = oauth.toHeader(oauth.authorize(requestData, token))
  return new Headers(authHeader as unknown as Record<string, string>)
}

// X FETCH FUNCTION
export const getTweetCount = async (
  url: string,
  headers: Headers
): Promise<number | NextResponse> => {
  try {
    const response = await fetch(url, { headers })

    if (!response.ok) {
      if (response.status === 429) {
        return NextResponse.json(
          { error: 'Rate limit exceeded' },
          { status: 429 }
        )
      }
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data.data.public_metrics.tweet_count
  } catch (error) {
    console.error('Error fetching tweet count:', error)
    throw error
  }
}
