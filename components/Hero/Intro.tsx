import Image from 'next/image'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import { getIntro } from '@/sanity/sanity-queries'
import ButtonLink from '../ui/button-link'

const IntroPortableText: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-center text-lg leading-7 md:mr-4 md:text-left md:text-xl [&:not(:first-child)]:mt-4">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="border-b-0 pb-0 text-2xl md:text-3xl">{children}</h2>
    ),
  },
}

export default async function Intro() {
  const intro = await getIntro()

  return (
    <section className="flex flex-wrap-reverse justify-center md:flex-nowrap md:justify-start">
      {/* intro text from Sanity CMS */}
      <div className="mr-0 flex w-full flex-col items-center text-left text-xl md:mr-6 md:items-start">
        <PortableText value={intro.content} components={IntroPortableText} />

        {/* projects and contact buttons */}
        <div className="mt-10 flex items-center gap-2">
          <ButtonLink href="#projects" variant="default">
            Projects
          </ButtonLink>

          <ButtonLink
            href="/contact"
            variant="outline"
            iconId="envelope"
            iconSize={20}
          >
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
