import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Link from 'next/link'
import Icon from '@/components/Icon'
import { getPosts } from '@/lib/markdown/posts'

export default async function TechnicalWriting() {
  const posts = await getPosts()

  return (
    <AccordionItem value="Technical Writing">
      <AccordionTrigger className="text-xl font-bold md:text-2xl">
        Technical Writing{' '}
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4">
        <div className="flex w-full flex-col gap-2 md:px-0">
          {posts.map((article, index) => (
            <Link
              key={index + article.title}
              href={article.slug}
              className="text-md group flex items-center justify-between rounded-lg border bg-accent p-4 text-lg hover:bg-muted-foreground/20 dark:hover:bg-accent/75 sm:mx-4 md:mx-0"
              target="_blank"
            >
              <div className="flex flex-col">
                <span className="text-sm md:text-lg">{article.title}</span>
                <span className="font-mono flex items-center gap-2 text-sm -tracking-[.05em] md:text-base">
                  <Icon id="clock" size={16} />
                  {article.readingTime}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}
