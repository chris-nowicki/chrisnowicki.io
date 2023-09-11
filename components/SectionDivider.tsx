'use client'
import React from 'react'
import { PiCaretDoubleDownLight } from 'react-icons/pi'
import { cn } from '@/lib/utils'

type SectionDividerProps = {
  type: 'line' | 'chevron'
  className?: string
}

export default function SectionDivider({
  type,
  className,
}: SectionDividerProps) {
  if (type === 'line') {
    return (
      <div
        className={cn(
          'my-6 h-12 w-1 rounded-full bg-gray-200 dark:bg-opacity-20 sm:block md:my-16 md:h-16',
          className
        )}
      />
    )
  } else {
    return (
        <PiCaretDoubleDownLight
          size={98}
          className={cn('text-gray-200 my-8 md:my-12 dark:text-opacity-20', className)}
        />
      
    )
  }
}
