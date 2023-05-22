import Image from 'next/image'
import { PortableTextComponents } from '@portabletext/react'

// sanity image builder
import { urlFor } from '@/sanity/sanity-utils'

export const aboutMePortableText: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mt-4 md:mr-4">{children}</p>,
    h1: ({ children }) => (
      <h1 className="text-2xl md:mt-0 md:text-3xl">{children}</h1>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http')
        ? '_blank'
        : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' && 'noindex nofollow'}
          className="text-purple-light dark:text-purple-dark"
        >
          {children}
        </a>
      )
    },
  },
}
