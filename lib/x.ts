import { NextResponse } from 'next/server'

// TWITTER FETCH FUNCTION
export const getTweetCount = async (url: string, headers: HeadersInit) => {
  const response = await fetch(url, {
    headers,
  }).then((res) => res.json())

  if (response.status === 429) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })
  }

  return response.data.public_metrics.tweet_count
}
