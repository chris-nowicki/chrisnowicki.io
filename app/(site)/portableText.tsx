import { PortableTextComponents } from '@portabletext/react'

export const homePortableText: PortableTextComponents = {
  marks: {
    strong: ({ children }) => (
      <strong className=" text-md font-mono dark:text-purple-dark">
        {children}
      </strong>
    ),
  },
  block: {
    normal: ({ children }) => <p className="mt-4 md:mr-4">{children}</p>,
    h1: ({ children }) => (
      <h1 className="text-2xl text-purple-light dark:text-purple-dark md:mt-0 md:text-3xl">
        {children}
      </h1>
    ),
  },
}
