import Image from 'next/image'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import { contactInfo, socialLinks } from '@/lib/data'
import { getIntro, getResume } from '@/sanity/sanity-queries'
import type { IntroType } from '@/types/types'
import ContactButton from './ContactButton'

const IntroPortableText: PortableTextComponents = {
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

export default async function Intro() {
  const introData: Promise<IntroType> = getIntro()
  const resumeData: Promise<string> = getResume()

  const [intro, resumeURL] = await Promise.all([introData, resumeData])

  return (
    <section className="flex flex-col md:flex-nowrap">
      <div className="flex flex-wrap-reverse justify-center md:flex-nowrap md:justify-start">
        {/* intro text from Sanity CMS */}
        <div className="mr-0 flex w-full flex-col items-center text-left text-xl md:mr-6 md:items-start">
          <PortableText value={intro.content} components={IntroPortableText} />

          {/* contact and download buttons */}
          <div className="mt-6 flex items-center gap-2">
            <ContactButton URL="/contact" contactInfo={contactInfo.Contact} />
            <ContactButton
              URL={resumeURL}
              contactInfo={contactInfo.DownloadCV}
            />
          </div>
        </div>

        {/* profile image and social media links */}
        <div className="mb-4 flex w-[200px] flex-col items-center gap-4 md:mb-0 md:mt-0 md:w-[400px] ">
          <div className="rounded-xl bg-white p-2 shadow-lg ">
            <Image
              className="rounded-xl"
              width={400}
              height={400}
              src={intro.profilePicture}
              alt="chris nowicki"
              priority
            />
          </div>

          {/* social media links */}
          <div className="flex items-center gap-2.5">
            {socialLinks.map((link) => (
              <a
                key={link.URL}
                href={link.URL}
                className="hover:scale-110 hover:text-purple-light hover:duration-75 hover:ease-in-out dark:hover:text-purple-dark"
                target="_blank"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
