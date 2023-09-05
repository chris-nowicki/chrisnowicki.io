'use client'
import React from 'react'
import {
  NEXTJS,
  TS,
  TAILWIND,
  SANITY,
  MYSQL,
  MDB,
  VERCEL,
} from '../assets/Icons'
import { motion } from 'framer-motion'

export default function TechStack() {
  return (
    <motion.section
      className="mt-8 flex w-full flex-wrap items-center justify-center gap-3 rounded-lg px-0 dark:bg-foreground dark:py-2 md:mt-12 md:justify-between md:gap-0 md:px-12 md:dark:rounded-full "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <a
        href="https://nextjs.org/"
        className="duration-100 ease-in-out hover:scale-105"
        target="_blank"
      >
        <NEXTJS />
      </a>
      <a
        href="https://www.typescriptlang.org/"
        className="duration-100 ease-in-out hover:scale-105"
        target="_blank"
      >
        <TS />
      </a>
      <a
        href="https://tailwindcss.com/"
        className="duration-100 ease-in-out hover:scale-105"
        target="_blank"
      >
        <TAILWIND />
      </a>
      <a
        href="https://www.sanity.io/"
        className="duration-100 ease-in-out hover:scale-105"
        target="_blank"
      >
        <SANITY />
      </a>
      <a
        href="https://www.mysql.com/"
        className="duration-100 ease-in-out hover:scale-105"
        target="_blank"
      >
        <MYSQL />
      </a>

      <a
        href="https://www.mongodb.com/"
        className="duration-100 ease-in-out hover:scale-105"
        target="_blank"
      >
        <MDB />
      </a>
      <a
        href="https://www.vercel.com"
        className="duration-100 ease-in-out hover:scale-105"
        target="_blank"
      >
        <VERCEL />
      </a>
    </motion.section>
  )
}
