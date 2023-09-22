import { getLatestPost } from '@/sanity/sanity-queries'
import Post from '@/components/NowPosts/Now'

export default async function Now() {
  const post = await getLatestPost()

  return (
    <>
      <Post post={post} />
    </>
  )
}
