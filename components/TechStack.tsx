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

const TechStackIcons = [
  { icon: <NEXTJS />, URL: 'https://nextjs.org/' },
  { icon: <TS />, URL: 'https://www.typescriptlang.org/' },
  { icon: <TAILWIND />, URL: 'https://tailwindcss.com/' },
  { icon: <SANITY />, URL: 'https://www.sanity.io/' },
  { icon: <MYSQL />, URL: 'https://www.mysql.com/' },
  { icon: <MDB />, URL: 'https://www.mongodb.com/' },
  { icon: <VERCEL />, URL: 'https://www.vercel.com' },
] as const

export default function TechStack() {
  return (
    <motion.section
      className="mt-8 flex w-full flex-wrap items-center justify-center gap-3 rounded-lg px-0 dark:bg-foreground dark:py-2 md:mt-12 md:justify-between md:gap-0 md:px-12 md:dark:rounded-full "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {TechStackIcons.map((techStack, index) => (
        <a
          key-={index}
          href={techStack.URL}
          className="duration-100 ease-in-out hover:scale-105"
          target="_blank"
        >
          {techStack.icon}
        </a>
      ))}
    </motion.section>
  )
}
