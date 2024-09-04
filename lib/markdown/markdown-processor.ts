import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkUnwrapImages from 'remark-unwrap-images'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkUnwrapImages)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeSlug)
  .use(rehypePrettyCode, { theme: 'dracula' })
  .use(rehypeExternalLinks, {
    target: '_blank',
    rel: ['noopener', 'noreferrer'],
  })
  .use(rehypeAutolinkHeadings, {
    behavior: 'wrap',
    properties: {
      className: ['subheading-anchor'],
      ariaLabel: 'Link to section',
    },
  })
  .use(rehypeRaw)
  .use(rehypeStringify)

const cache = new Map<string, string>()

export const transformMarkdown = async (markdown: string) => {
  if (cache.has(markdown)) {
    return cache.get(markdown)
  }

  try {
    const file = await processor.process(markdown)
    const html = file.toString()

    cache.set(markdown, html)

    return html
  } catch (error) {
    console.error('Error processing markdown:', error)
    throw error
  }
}
