import React from 'react'

type SectionHeadingProps = {
  children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return <h2 className="w-full text-center uppercase pb-0 border-b-0">{children}</h2>
}
