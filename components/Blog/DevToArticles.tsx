'use client'
import React from 'react'
import format from 'date-fns/format'
import { BsArrowRight, BsArrowUpRight } from 'react-icons/bs'
import { useSectionInView } from '@/hooks/useSectionInView'
import { motion } from 'framer-motion'
import { DEVTO } from '@/assets/Icons'
import SectionHeading from '../SectionHeading'
import type { Article } from '@/types'

type DevToArticlesProps = {
  articles: Article[]
}

const fadeInAnimate = {
  initial: {
    opacity: 0,
  },
  animate: (index: number) => ({
    opacity: 1,
    transition: {
      delay: 0.1 * index,
    },
  }),
}

export default function DevToArticles({articles}: DevToArticlesProps) {
  const { ref } = useSectionInView('Blog', 0.5)
  return (
    <section
      ref={ref}
      id="blog"
      className="flex w-full scroll-mt-28 flex-col items-center"
    >
      <SectionHeading>Blog</SectionHeading>
      <p className="flex items-center gap-2 text-lg">
        I frequently write articles here{' '}
        <BsArrowRight className="animate-pulse" />
        <a
          href="https://www.dev.to/chrisnowicki/"
          className="text-black hover:text-purple-light dark:text-white dark:hover:text-purple-dark"
          target="_blank"
        >
          <DEVTO size={32} />
        </a>
      </p>

      {/* list of articles from dev.to */}
      <div className="mt-4 flex w-full flex-col gap-2">
        {articles.map((article: Article, index) => (
          <motion.a
            key={article.id}
            href={article.url}
            className="text-md group flex items-center justify-between rounded-lg border border-borderColor-light bg-gray-300/20 p-4 text-lg hover:bg-gray-300/40 dark:border-borderColor-dark dark:bg-gray-300/10 dark:hover:bg-gray-300/20 sm:mx-4 md:mx-0"
            target="_blank"
            custom={index}
            variants={fadeInAnimate}
            initial="initial"
            whileInView="animate"
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
            <BsArrowUpRight className="mr-4 transition-all ease-in-out group-hover:scale-125 group-hover:animate-pulse sm:hidden md:block" />
          </motion.a>
        ))}
      </div>
    </section>
  )
}
