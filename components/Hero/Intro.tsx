import Image from 'next/image'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import { getIntro } from '@/sanity/sanity-queries'
import ButtonLink from '../ui/button-link'
import Icon from '../Icon'

const IntroPortableText: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-left text-lg leading-7 md:mr-4 md:text-xl [&:not(:first-child)]:mt-0 [&:not(:first-child)]:pt-0 [&:not(:first-child)]:text-left">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="mb-2 border-b-0 pb-0 text-2xl md:text-3xl">{children}</h2>
    ),
  },
}

export default async function Intro() {
  const intro = await getIntro()

  return (
    <section className="mx-4 flex flex-wrap-reverse justify-center md:mx-0 md:flex-nowrap md:justify-start">
      {/* intro text from Sanity CMS */}
      <div className="mr-0 flex w-full flex-col items-center text-xl md:mr-6 md:items-start">
        <PortableText value={intro.content} components={IntroPortableText} />

        {/* projects and contact buttons */}
        <div className="mt-6 flex items-center gap-2 md:mt-10">
          <ButtonLink
            href="#projects"
            variant="default"
            className="px-8 uppercase"
          >
            Projects
          </ButtonLink>

          <ButtonLink href="/contact" variant="outline" className="uppercase">
            Contact Me
          </ButtonLink>
        </div>
      </div>

      {/* profile image */}
      <div className="mb-10 w-[200px] md:mb-0 md:w-[400px]">
        <Image
          className="rounded-xl bg-accent p-2 shadow-lg "
          width={400}
          height={400}
          src={intro.profilePicture}
          alt="chris nowicki"
          priority
        />
      </div>
    </section>
  )
}
