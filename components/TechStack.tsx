'use client'
import React from 'react'
import { TechStackIcons } from '@/lib/data'
import { motion } from 'framer-motion'

export default function TechStack() {
  return (
    <motion.section
      className="mt-8 flex w-full flex-wrap items-center justify-center gap-3 rounded-lg px-0 dark:bg-foreground dark:py-2 md:mt-12 md:justify-between md:gap-0 md:px-12 md:dark:rounded-full "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {TechStackIcons.map((techStack, index) => (
        <a
          key={index}
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
