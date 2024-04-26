import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { transformMarkdown } from './markdown-processor'

const markdownDirectory = path.join(process.cwd(), 'content', 'hero')

export const getMarkdownData = async (fileName: string) => {
  const filePath = path.join(markdownDirectory, fileName)

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    // Now you can use `filePath` to access your specific file
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents) as unknown as {
      content: string
      data: {
        image: string
      }
    }

    const markdown = await transformMarkdown(content)

    return { ...data, markdown }
  } else {
    console.log(`File '${fileName}' not found.`)
  }
}
