import React from 'react'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  children: React.ReactNode
  className?: string
}

export default function SectionHeading({
  children,
  className,
}: SectionHeadingProps) {
  return (
    <h2
      className={cn('w-full border-b-0 pb-0 text-center uppercase', className)}
    >
      {children}
    </h2>
  )
}
