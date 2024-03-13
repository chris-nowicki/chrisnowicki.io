import { Suspense } from 'react'
import { unstable_cache } from 'next/cache'
import { TweetSkeleton, EmbeddedTweet, TweetNotFound } from 'react-tweet'
import { getTweet as _getTweet } from 'react-tweet/api'
import Image from 'next/image'
import type { TwitterComponents } from 'react-tweet'

const getTweet = unstable_cache(
  async (id: string) => _getTweet(id),
  ['tweet'],
  { revalidate: 3600 * 24 }
)

export const components: TwitterComponents = {
  AvatarImg: (props) => <Image {...props} />,
  MediaImg: (props) => <Image {...props} fill unoptimized />,
}

const TweetPage = async ({ id }: { id: string }) => {
  try {
    const tweet = await getTweet(id)
    return tweet ?
        <EmbeddedTweet tweet={tweet} components={components} />
      : <TweetNotFound />
  } catch (error) {
    console.error(error)
    return <TweetNotFound error={error} />
  }
}

const Tweet = ({ id }: { id: string }) => (
  <Suspense fallback={<TweetSkeleton />}>
    <TweetPage id={id} />
  </Suspense>
)

export default Tweet
