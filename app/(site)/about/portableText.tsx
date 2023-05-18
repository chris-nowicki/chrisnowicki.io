import Image from 'next/image'
import { PortableTextComponents } from '@portabletext/react'

// sanity image builder
import { urlFor } from '@/sanity/sanity-utils'

export const aboutMePortableText: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <>
        <div className="mt-4 flex flex-col rounded-lg border border-borderColor-light px-4 py-4 pb-4 dark:border-borderColor-dark">
          <Image
            src={urlFor(value).url()}
            width={400}
            height={400}
            alt="wedding picture"
            className="rounded-lg sm:w-[250px] md:w-auto"
            priority
          />
          <p className="mt-2 text-center text-sm">
            <b>2/22/22 </b>- Telluride, CO
          </p>
        </div>
      </>
    ),
  },
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
