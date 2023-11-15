'use client'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { homePortableText } from '@/lib/portable-text'
import { useActiveSection } from '@/context/active-section'
import { useSectionInView } from '@/hooks/useSectionInView'
import { contactInfo } from '@/lib/data'
import ContactButton from './ContactButton'
import type { IntroType } from '@/types/types'
import { socialLinks } from '@/lib/data'
import { useEffect } from 'react'

type IntroProps = {
  data: IntroType
  resumeURL: string
}

export default function Intro({ data, resumeURL }: IntroProps) {
  const { setActiveSection, setTimeOfLastClick } = useActiveSection()
  const { ref } = useSectionInView('Home')

  return (
    <section
      ref={ref}
      id="home"
      className="mt-20 flex scroll-mt-20 flex-col md:mt-36 md:scroll-mt-36 md:flex-nowrap"
    >
      <div className="flex flex-wrap-reverse justify-center md:flex-nowrap md:justify-start">
        {/* intro text from Sanity CMS */}
        <div className="mr-0 flex w-full flex-col items-center text-left text-xl md:mr-6 md:items-start">
          <PortableText
            value={data.content}
            components={homePortableText}
          />

          {/* contact and download buttons */}
          <div className="mt-6 flex items-center gap-2">
            <ContactButton
              URL="/#contact"
              contactInfo={contactInfo.Contact}
              onClickProps={() => {
                setActiveSection('Contact')
                setTimeOfLastClick(Date.now())
              }}
            />
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
              src={data.profilePicture}
              alt="chris nowicki"
              priority
            />
          </div>

          {/* social media links */}
          <div className="flex items-center gap-2">
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
