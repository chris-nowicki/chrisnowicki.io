import SectionHeading from '@/components/SectionHeading'
import { posts } from '#site/content'
import PostItem from '@/components/Posts/PostItem'
import { sortPosts } from '@/lib/utils'

export default async function Blog() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published))
  const displayPosts = sortedPosts

  return (
    <section className="flex flex-col items-center">
      <SectionHeading className="-mb-6">Blog</SectionHeading>
      <div className="mt-10 w-full">
        {displayPosts?.length > 0 ?
          <ul className="ml-0 flex list-none flex-col gap-1">
            {displayPosts.map((post, index) => (
              <li key={index}>
                <PostItem
                  slug={post.slug}
                  title={post.title}
                  readingTime={post.readingTime}
                />
              </li>
            ))}
          </ul>
        : <p>Nothing to see here yet</p>}
      </div>
    </section>
  )
}
