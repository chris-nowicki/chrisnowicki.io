import React from 'react'
import { cn } from '@/utils/utils'

type SectionHeadingProps = {
  children: React.ReactNode
  className?: string
}

export default function SectionHeading({
  children,
  className,
}: SectionHeadingProps) {
  return (
    <span
      className={cn(
        'w-full border-b-0 pb-0 text-center text-2xl font-semibold uppercase md:text-5xl',
        className
      )}
    >
      {children}
    </span>
  )
}
