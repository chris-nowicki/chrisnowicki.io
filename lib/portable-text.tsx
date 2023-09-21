import { PortableTextComponents } from '@portabletext/react'
import { urlFor } from '@/sanity/sanity-utils'

export const homePortableText: PortableTextComponents = {
  marks: {
    strong: ({ children }) => (
      <strong className="dark:text-purple-dark">{children}</strong>
    ),
  },
  block: {
    normal: ({ children }) => (
      <p className="mt-4 text-center md:mr-4 md:text-left">{children}</p>
    ),
    h1: ({ children }) => (
      <h1 className="text-2xl text-purple-light dark:text-purple-dark md:mt-0 md:text-4xl">
        {children}
      </h1>
    ),
  },
}

export const nowPortableText: PortableTextComponents = {
  marks: {
    strong: ({ children }) => (
      <strong className="dark:text-purple-dark">{children}</strong>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http')
        ? '_blank'
        : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' && 'noindex nofollow'}
          className="underline decoration-purple-light underline-offset-4 hover:text-purple-light"
        >
          {children}
        </a>
      )
    },
  },
  block: {
    normal: ({ children }) => (
      <p className="mt-4 text-left">{children}</p>
    ),
    blockquote: ({ children }) => (
      <div className="flex w-full justify-center">
        <blockquote className="mt-2 rounded-lg border-b border-l-4 border-r border-t dark:border-l-purple-dark dark:border-borderColor-dark border-borderColor-dark/20 border-l-purple-light p-4 pl-4 shadow-md">
          "{children}"
        </blockquote>
      </div>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-inside list-disc marker:text-purple-light dark:marker:text-purple-dark">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-inside list-decimal marker:text-purple-light dark:marker:text-purple-dark">
        {children}
      </ol>
    ),
  },
  types: {
    image: ({ value }) => (
      <div className="flex w-full justify-center">
        <img src={urlFor(value.asset).url()} alt="now image" />
      </div>
    ),
  },
}
