import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { FrontMatter, Markdown } from '@/types/types'
import readingTime from 'reading-time'
import { transformMarkdown } from './markdown-processor'

const postsDirectory = path.join(process.cwd(), 'content', 'blog')

const getPostData = async (): Promise<Markdown[]> => {
  // Read all markdown file names in the posts directory
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get slug
    const slugAsParams = fileName.replace(/\.mdx$/, '')
    const slug = 'blog/' + slugAsParams

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents) as unknown as {
      content: string
      data: FrontMatter
    }

    return {
      frontMatter: {
        slug,
        slugAsParams,
        readingTime: readingTime(content, { wordsPerMinute: 265 }).text, // 265 is the average reading speed
        ...data,
      },
      markdown: content,
    }
  })

  return allPostsData
}

export async function getPosts(count?: number): Promise<FrontMatter[]> {
  const allPostData = await getPostData()
  const posts = Object.values(allPostData).map((post) => post.frontMatter)

  // Sort posts by date
  const sortedPosts = posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })

  // Return limited number of posts if count is defined
  return count ? sortedPosts.slice(0, count) : sortedPosts
}

export const getPostBySlug = async (slug: FrontMatter['slug']) => {
  const posts = await getPostData()
  const file = posts.find((post) => post.frontMatter.slugAsParams === slug)
  const html = await transformMarkdown(file.markdown)

  const post = {
    html,
    frontmatter: file.frontMatter,
  }

  return post
}
