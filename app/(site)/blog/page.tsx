import Icon from '@/components/Icon'
import SectionHeading from '@/components/SectionHeading'
import { getArticles } from '@/lib/devto'
import type { Article } from '@/types/types'
import { format } from 'date-fns/format'
import { getPostViews } from '@/lib/appwrite'

export const revalidate = 60

export default async function Blog() {
  const articleData: Promise<Article[]> = getArticles()
  const postViewData = getPostViews()

  const [articles, totalPostViews] = await Promise.all([
    articleData,
    postViewData,
  ])

  return (
    <section className="flex w-full flex-col items-center">
      <SectionHeading className="-mb-6">Blog</SectionHeading>

      <p className="flex items-center gap-2 text-lg">
        I frequently write articles here
        <Icon
          id="arrow-right"
          size={24}
          className="animate-pulse text-primary"
        />
        <a
          href="https://www.dev.to/chrisnowicki/"
          className="hover:text-primary"
          target="_blank"
          aria-label="Link to my dev.to profile. Click to open in a new tab."
        >
          <Icon id="devto" size={32} />
        </a>
      </p>
      <span className="font-mono mt-6 flex items-center gap-1 text-sm">
        Total Post Views:
        <span className="font-semibold text-primary">
          {totalPostViews.toLocaleString()}
        </span>
      </span>

      {/* list of articles from dev.to */}
      <div className="mt-4 flex w-full flex-col gap-2 px-4 md:px-0">
        {articles.map((article: Article, index) => (
          <a
            key={article.id}
            href={article.url}
            className="text-md group flex items-center justify-between rounded-lg border bg-accent p-4 text-lg hover:bg-muted-foreground/20 dark:hover:bg-accent/75 sm:mx-4 md:mx-0"
            target="_blank"
          >
            <div className="flex flex-col">
              <span className="md:text-md text-sm font-bold text-primary">
                {format(new Date(article.published_at), 'MM.dd.yy')}
              </span>
              <span className="text-sm md:text-lg">{article.title}</span>
              <span className="font-mono text-sm -tracking-[.05em] md:text-base">
                {Number(article.page_views_count).toLocaleString()} views /{' '}
                {article.reading_time_minutes} min read
              </span>
            </div>
            <Icon
              id="arrow-topRight"
              size={24}
              className="mr-4 hidden transition-all ease-in-out group-hover:scale-125 group-hover:animate-pulse sm:hidden md:block"
            />
          </a>
        ))}
      </div>
    </section>
  )
}
