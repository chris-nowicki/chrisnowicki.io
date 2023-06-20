import { NextResponse } from 'next/server'
import { updateTweetCount, getStoredTweetCount } from '@/lib/vercel-storage'

export async function GET() {
  const res = await fetch(
    'https://twitter.com/i/api/graphql/qRednkZG-rn1P6b48NINmQ/UserByScreenName?variables=%7B%22screen_name%22%3A%22iamwix%22%2C%22withSafetyModeUserFields%22%3Atrue%7D&features=%7B%22hidden_profile_likes_enabled%22%3Afalse%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22subscriptions_verification_info_verified_since_enabled%22%3Atrue%2C%22highlights_tweets_tab_ui_enabled%22%3Atrue%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%7D',
    {
      headers: {
        accept: '*/*',
        'accept-language': 'en-US,en;q=0.9',
        authorization:
          'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
        'content-type': 'application/json',
        'sec-ch-ua':
          '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        'sec-ch-ua-mobile': '?1',
        'sec-ch-ua-platform': '"Android"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'x-csrf-token':
          '6fd8f497d94a438c4a12e2a7fb2dab826dc0fac53d94925ce35888c340859f8b615b7a907808b19ee3e90ebc35d07643568ef7b5a9cf5242df7a78dd492e14e7e9acce692b30f437c02c06ecdb1248f2',
        'x-twitter-active-user': 'yes',
        'x-twitter-auth-type': 'OAuth2Session',
        'x-twitter-client-language': 'en',
        cookie:
          '_ga=GA1.2.1753137566.1686525778; guest_id=v1%3A168678585386128105; guest_id_marketing=v1%3A168678585386128105; guest_id_ads=v1%3A168678585386128105; _twitter_sess=BAh7CSIKZmxhc2hJQzonQWN0aW9uQ29udHJvbGxlcjo6Rmxhc2g6OkZsYXNo%250ASGFzaHsABjoKQHVzZWR7ADoPY3JlYXRlZF9hdGwrCLVHR7yIAToMY3NyZl9p%250AZCIlMTExODhmZjQwMGY0Y2Q3M2U2MTVlYjE2NGNiNmE2OWQ6B2lkIiVlZmNk%250AY2M2NTAyM2RkN2FiODhhYjY4MmIyN2Q1MWI4MQ%253D%253D--0718fd791ec44cc8563540a60f77988b00bd58a8; kdt=O7HIUdHgIP0jimZ9udAsk31pc5qXeT7PWGXhLgfH; auth_token=cd7fc808f6cb75b69fc7e2c7b451abbc25efce87; ct0=6fd8f497d94a438c4a12e2a7fb2dab826dc0fac53d94925ce35888c340859f8b615b7a907808b19ee3e90ebc35d07643568ef7b5a9cf5242df7a78dd492e14e7e9acce692b30f437c02c06ecdb1248f2; lang=en; twid=u%3D14218820; external_referer=padhuUp37zjgzgv1mFWxJ12Ozwit7owX|0|8e8t2xd8A2w%3D; _gid=GA1.2.555113198.1687284762; personalization_id="v1_IwTvkOIsrY+dhTHAuuWVsA=="',
        Referer: 'https://twitter.com/iamwix',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
      body: null,
      method: 'GET',
      next: {
        revalidate: 60,
      }
    }
  )

  const data = await res.json()
  const tweetCount = Number(data.data.user.result.legacy.statuses_count)

  const storedTweetCount = await getStoredTweetCount()

  if (storedTweetCount === tweetCount) {
    return NextResponse.json(`tweetCount: ${tweetCount} - (no change)`)
  } else if (tweetCount === null || tweetCount === 0) {
    return NextResponse.json({ error: 'No tweets found' }, { status: 404 })
  } else {
    updateTweetCount(tweetCount)
    return NextResponse.json(`tweetCount: ${tweetCount}`)
  }
}
