import { PortableTextComponents } from '@portabletext/react'

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
      <h1 className="text-2xl text-purple-light dark:text-foreground md:mt-0 md:text-4xl">
        {children}
      </h1>
    ),
  },
}
