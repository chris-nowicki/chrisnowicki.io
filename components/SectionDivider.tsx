'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { PiCaretDoubleDownLight } from 'react-icons/pi'
import { cn } from '@/lib/utils'

type SectionDividerProps = {
  type: 'line' | 'chevron'
  className?: string
}

const animateChevron = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}

export default function SectionDivider({
  type,
  className,
}: SectionDividerProps) {
  if (type === 'line') {
    return (
      <motion.div
        className={cn(
          'my-6 h-12 w-1 rounded-full bg-gray-200 dark:bg-opacity-20 sm:block md:my-16 md:h-16',
          className
        )}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.125 }}
      ></motion.div>
    )
  } else {
    return (
      <motion.div
        variants={animateChevron}
        initial="initial"
        animate="animate"
        whileInView="animate"
      >
        <PiCaretDoubleDownLight
          size={98}
          className={cn('text-gray-200 my-8 md:my-12 dark:text-opacity-20', className)}
        />
      </motion.div>
    )
  }
}
