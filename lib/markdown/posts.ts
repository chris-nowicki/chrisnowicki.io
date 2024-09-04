import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { FrontMatter, Markdown } from '@/types/types'
import readingTime from 'reading-time'
import { transformMarkdown } from './markdown-processor'
import { notFound } from 'next/navigation'

const postsDirectory = path.join(process.cwd(), 'content', 'blog')

let cachedPostData: Markdown[] | null = null

const getPostData = async (): Promise<Markdown[]> => {
  if (cachedPostData) return cachedPostData

  try {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map((fileName) => {
      const slugAsParams = fileName.replace(/\.mdx$/, '')
      const slug = 'blog/' + slugAsParams
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

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

    cachedPostData = allPostsData
    return allPostsData
  } catch (error) {
    console.error('Error reading post data:', error)
    throw error
  }
}

export async function getPosts(count?: number): Promise<FrontMatter[]> {
  const allPostData = await getPostData()
  const posts = allPostData.map((post) => post.frontMatter)

  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  // Return limited number of posts if count is defined
  return count ? sortedPosts.slice(0, count) : sortedPosts
}

export const getPostBySlug = async (slug: FrontMatter['slug']) => {
  try {
    const posts = await getPostData()
    const file = posts.find((post) => post.frontMatter.slugAsParams === slug)

    if (!file) {
      notFound()
    }

    const html = await transformMarkdown(file.markdown)

    return {
      html,
      frontmatter: file.frontMatter,
    }
  } catch (error) {
    console.error(`Error getting post by slug ${slug}:`, error)
    throw error
  }
}
