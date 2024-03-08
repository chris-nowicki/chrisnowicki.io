import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { getArticles } from '@/lib/devto'
import { getPostViews } from '@/lib/appwrite'
import type { Article } from '@/types/types'

export default async function TechnicalWriting() {
  const articleData: Promise<Article[]> = getArticles()
  const postViewData = getPostViews()

  const [articles, totalPostViews] = await Promise.all([
    articleData,
    postViewData,
  ])

  return (
    <AccordionItem value="Technical Writing">
      <AccordionTrigger className="text-xl font-bold md:text-2xl">
        Technical Writing{' '}
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4">
        <span className="text-sm">
          Article Views:{' '}
          <span className="text-primary">
            {totalPostViews.toLocaleString()}
          </span>
        </span>
        <div className="flex w-full flex-col gap-2 md:px-0">
          {articles
            .sort(
              (a: Article, b: Article) =>
                b.page_views_count - a.page_views_count
            )
            .map((article: Article, index) => (
              <a
                key={article.id}
                href={article.url}
                className="text-md group flex items-center justify-between rounded-lg border bg-accent p-4 text-lg hover:bg-muted-foreground/20 dark:hover:bg-accent/75 sm:mx-4 md:mx-0"
                target="_blank"
              >
                <div className="flex flex-col">
                  <span className="text-sm md:text-lg">{article.title}</span>
                  <span className="font-mono text-sm -tracking-[.05em] md:text-base">
                    {Number(article.page_views_count).toLocaleString()} views /{' '}
                    {article.reading_time_minutes} min read
                  </span>
                </div>
              </a>
            ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}
