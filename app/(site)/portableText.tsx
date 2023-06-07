import { PortableTextComponents } from '@portabletext/react'

export const homePortableText: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mt-4 md:mr-4">{children}</p>,
    h1: ({ children }) => (
      <h1 className="text-2xl md:mt-0 md:text-3xl">{children}</h1>
    ),
  },
}
