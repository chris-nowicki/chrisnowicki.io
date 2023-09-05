import React from 'react'

type SectionHeadingProps = {
  children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h1 className="w-full text-center text-4xl uppercase dark:text-purple-dark mb-2">
      {children}
    </h1>
  )
}
