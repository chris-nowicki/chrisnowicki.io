import SectionHeading from '@/components/SectionHeading'
import { posts } from '#site/content'
import PostItem from '@/components/Posts/PostItem'
import { sortPosts } from '@/lib/utils'

export default async function Blog() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published))
  const displayPosts = sortedPosts

  return (
    <section className="flex w-full flex-col items-center">
      <SectionHeading className="-mb-6">Blog</SectionHeading>
      <div className="mt-10 w-full">
        {displayPosts?.length > 0 ?
          <ul className="flex flex-col">
            {displayPosts.map((post, index) => (
              <li key={index}>
                <PostItem
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.description}
                  date={post.date}
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
