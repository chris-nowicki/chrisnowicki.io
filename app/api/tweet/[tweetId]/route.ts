import { NextResponse } from 'next/server'
import { getTweet } from 'react-tweet/api'

interface Params {
  params: {
    tweetId: string
  }
}

export async function GET({ params }: Params) {
  const tweetId = params.tweetId

  if (!tweetId || typeof tweetId !== 'string') {
    return NextResponse.json({ error: 'Bad Request' }, { status: 400 })
  }

  try {
    const tweet = await getTweet(tweetId)
    NextResponse.json({ data: tweet ?? null }, { status: tweet ? 200 : 404 })
  } catch (error) {
    console.error(error)
    NextResponse.json(
      { error: error.message ?? 'Bad request.' },
      { status: 400 }
    )
  }
}
