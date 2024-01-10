import { getArticles } from '@/lib/devto'
import { getStoredPostViews } from '@/lib/metrics'
import format from 'date-fns/format'
import { ArrowIcon, ArrowRightIcon } from '@/assets/Icons'
import { DEVTO } from '@/assets/Icons'
import type { Article } from '@/types/types'
import SectionHeading from '@/components/SectionHeading'

export default async function Blog() {
  const articles: Article[] = await getArticles()
  const totalPostViews = await getStoredPostViews()

  return (
    <section className="flex w-full flex-col items-center">
      <SectionHeading>Blog</SectionHeading>
      <p className="-mt-3 flex items-center gap-2 text-lg">
        I frequently write articles here
        <ArrowRightIcon classProps="animate-pulse" />
        <a
          href="https://www.dev.to/chrisnowicki/"
          className="text-black hover:text-purple-light dark:text-white dark:hover:text-purple-dark"
          target="_blank"
        >
          <DEVTO size={32} />
        </a>
      </p>
      <span className="mt-6 font-mono text-xs">
        Total Post Views: <span className='text-purple-light dark:text-purple-dark'>{totalPostViews.toLocaleString()}</span>
      </span>

      {/* list of articles from dev.to */}
      <div className="mt-4 flex w-full flex-col gap-2 px-4 md:px-0">
        {articles.map((article: Article, index) => (
          <a
            key={article.id}
            href={article.url}
            className="text-md group flex items-center justify-between rounded-lg border border-borderColor-light bg-gray-300/20 p-4 text-lg hover:bg-gray-300/40 dark:border-borderColor-dark dark:bg-gray-300/10 dark:hover:bg-gray-300/20 sm:mx-4 md:mx-0"
            target="_blank"
          >
            <div className="flex flex-col">
              <span className="md:text-md text-sm font-bold text-purple-light dark:text-purple-dark">
                {format(new Date(article.published_at), 'MM.dd.yy')}
              </span>
              <span className="text-sm md:text-lg">{article.title}</span>
              <span className="font-mono text-sm -tracking-[.08em] text-borderColor-dark/50 dark:text-white/50 md:text-base">
                {Number(article.page_views_count).toLocaleString()} views /{' '}
                {article.reading_time_minutes} min read
              </span>
            </div>
            <ArrowIcon classProps="hidden md:block mr-4 transition-all ease-in-out group-hover:scale-125 group-hover:animate-pulse sm:hidden md:block" />
          </a>
        ))}
      </div>
    </section>
  )
}
