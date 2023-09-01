'use client'

import React from 'react'
import { DEVTO } from '@/assets/Icons'
import format from 'date-fns/format'
import { BsArrowRight, BsArrowUpRight } from 'react-icons/bs'
import { Article } from '@/types'
import { useSectionInView } from '@/hooks/useSectionInView'
import {motion} from 'framer-motion'

type BlogProps = {
  articles: Article[]
}

const fadeInAnimate = {
  initial: {
    opacity: 0,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 * index,
    },
  }),
}

export default function Blog({ articles }: BlogProps) {
  const { ref } = useSectionInView('Blog', .5)
  return (
    <motion.section
      ref={ref}
      id="blog"
      className="flex w-full scroll-mt-28 flex-col items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="flex items-center gap-2 text-4xl uppercase">blog</h1>
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
      <div className="mt-4 flex w-full flex-col gap-2">
        {articles.map((article: Article, index) => (
          <motion.a
            key={article.id}
            href={article.url}
            className="text-md group flex items-center justify-between rounded-lg border bg-gray-300/20 p-4 text-lg hover:bg-gray-300/40"
            target="_blank"
            custom={index}
            variants={fadeInAnimate}
            initial="initial"
            whileInView="animate"
          >
            <div className="flex flex-col">
              <span className="font-bold text-purple-light dark:text-purple-dark">
                {format(new Date(article.published_at), 'MM.dd.yy')}
              </span>

              <span className="md:text-lg">{article.title}</span>
              <span className="font-mono text-sm -tracking-[.08em] text-borderColor-dark/50 dark:text-white/40 md:text-base">
                {Number(article.page_views_count).toLocaleString()} views /{' '}
                {article.reading_time_minutes} min read
              </span>
            </div>
            <BsArrowUpRight className="mr-4 transition-all ease-in-out group-hover:scale-125 group-hover:animate-pulse" />
          </motion.a>
        ))}
      </div>
    </motion.section>
  )
}
