'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { Linkedin, GitHub, Twitter, DEVTO } from '@/assets/Icons'
import { SocialLinksType, HomePageType } from '@/types'
import { homePortableText } from '@/lib/portable-text'
import { BsArrowRight, BsDownload } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { useActiveSection } from '@/context/active-section'
import { useSectionInView } from '@/hooks/useSectionInView'

type IntroProps = {
  pageData: HomePageType
  socialLink: SocialLinksType
}

export default function Intro({ pageData, socialLink }: IntroProps) {
  const { setActiveSection, setTimeOfLastClick } = useActiveSection()
  const { ref } = useSectionInView('Home')

  return (
    <section
      ref={ref}
      id="home"
      className="mt-32 flex scroll-mt-32 flex-col md:mx-0 md:flex-nowrap"
    >
      <motion.div
        className="flex flex-wrap-reverse md:flex-nowrap"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex w-full flex-col items-start text-left text-2xl md:mr-6">
          <PortableText
            value={pageData.content}
            components={homePortableText}
          />
          <div className="mt-4 flex items-center gap-2">
            <a
              href="#contact"
              className="group flex items-center gap-3 rounded-full border border-borderColor-light bg-gray-300/20 p-4 px-4 py-2 hover:bg-gray-300/40  dark:border-borderColor-dark
              "
              onClick={() => {
                setActiveSection('Contact')
                setTimeOfLastClick(Date.now())
              }}
            >
              Contact{' '}
              <BsArrowRight className="transition group-hover:translate-x-1" />
            </a>
            <a
              href={pageData.resumeURL}
              className="group flex items-center gap-2 rounded-full border border-borderColor-light bg-gray-300/20 p-4 px-4 py-2 hover:bg-gray-300/40  dark:border-borderColor-dark 
            "
              target="_blank"
            >
              Download CV{' '}
              <BsDownload className="transition-all group-hover:translate-y-1" />
            </a>
          </div>
        </div>
        <div className="flex w-[200px] flex-col gap-4 sm:mb-4 md:mb-0 md:mt-0 md:w-[400px]">
          <Image
            className="rounded-full bg-white p-2 shadow-lg grayscale transition-all duration-150 ease-in-out hover:grayscale-0"
            width={400}
            height={400}
            src={pageData.profilePicture}
            alt="chris nowicki"
            priority
          />

          {/* social media icons */}
          <div className="flex gap-4 md:justify-center">
            <div className="flex items-center gap-2">
              <a
                href={socialLink.linkedin}
                className="hover:scale-110 hover:text-purple-light hover:duration-75 hover:ease-in-out dark:hover:text-purple-dark"
                target="_blank"
              >
                <Linkedin size={28} />
              </a>
              <a
                href={socialLink.github}
                className="hover:scale-110 hover:text-purple-light hover:duration-75 hover:ease-in-out dark:hover:text-purple-dark"
                target="_blank"
              >
                <GitHub size={28} />
              </a>
              <a
                href={socialLink.twitter}
                className="hover:scale-110 hover:text-purple-light hover:duration-75 hover:ease-in-out dark:hover:text-purple-dark"
                target="_blank"
              >
                <Twitter size={28} />
              </a>
              <a
                href="https://dev.to/chrisnowicki/"
                className="hover:scale-110 hover:text-purple-light hover:duration-75 hover:ease-in-out dark:hover:text-purple-dark"
                target="_blank"
              >
                <DEVTO size={28} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
