'use client'
import React from 'react'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { SocialLinksType, HomePageType } from '@/types'
import { homePortableText } from '@/lib/portable-text'
import { motion } from 'framer-motion'
import { useActiveSection } from '@/context/active-section'
import { useSectionInView } from '@/hooks/useSectionInView'
import ContactButton from './ContactButton'
import { contactInfo } from '@/lib/data'

type IntroProps = {
  pageData: HomePageType
  socialLinks: SocialLinksType[]
}

export default function Intro({ pageData, socialLinks }: IntroProps) {
  const { setActiveSection, setTimeOfLastClick } = useActiveSection()
  const { ref } = useSectionInView('Home')

  return (
    <section
      ref={ref}
      id="home"
      className="mt-20 flex scroll-mt-20 flex-col md:mt-32 md:scroll-mt-32 md:flex-nowrap"
    >
      <motion.div
        className="flex flex-wrap-reverse justify-center md:flex-nowrap md:justify-start"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* intro text from Sanity CMS */}
        <div className="mr-0 flex w-full flex-col items-center text-left sm:text-xl md:mr-6 md:items-start md:text-xl">
          <PortableText
            value={pageData.content}
            components={homePortableText}
          />

          {/* contact and download buttons */}
          <div className="mt-4 flex items-center gap-2">
            <ContactButton
              URL='/#contact'
              contactInfo={contactInfo.Contact}
              onClickProps={() => {
                setActiveSection('Contact')
                setTimeOfLastClick(Date.now())
              }}
            />
            <ContactButton URL={pageData.resumeURL} contactInfo={contactInfo.DownloadCV} />
          </div>
        </div>

        {/* profile image and social media links */}
        <div className="mb-4 flex w-[200px] flex-col items-center gap-4 md:mb-0 md:mt-0 md:w-[400px] ">
          <Image
            className="rounded-full bg-white p-2 shadow-lg grayscale transition-all duration-150 ease-in-out hover:grayscale-0"
            width={400}
            height={400}
            src={pageData.profilePicture}
            alt="chris nowicki"
            priority
          />

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
      </motion.div>
    </section>
  )
}
