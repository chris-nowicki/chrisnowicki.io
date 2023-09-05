'use client'
import React from 'react'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { Linkedin, GitHub, Twitter, DEVTO } from '@/assets/Icons'
import { SocialLinksType, HomePageType } from '@/types'
import { homePortableText } from '@/lib/portable-text'
import { BsDownload } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import { HiOutlineMailOpen } from 'react-icons/hi'
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

  const socialLinks = [
    { name: 'LinkedIn', URL: socialLink.linkedin },
    { name: 'GitHub', URL: socialLink.github },
    { name: 'Twitter', URL: socialLink.twitter },
    { name: 'DEVTO', URL: socialLink.devto },
  ]

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
        <div className="mr-0 flex w-full flex-col items-center text-left sm:text-xl md:mr-6 md:items-start md:text-xl">
          <PortableText
            value={pageData.content}
            components={homePortableText}
          />
          <div className="mt-4 flex items-center gap-2">
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full border border-borderColor-light bg-gray-300/20 p-4 px-4 py-2 hover:bg-gray-300/40 dark:border-borderColor-dark dark:bg-gray-300/10  dark:hover:bg-gray-300/20
              "
              onClick={() => {
                setActiveSection('Contact')
                setTimeOfLastClick(Date.now())
              }}
            >
              Contact{' '}
              <HiOutlineMailOpen className="transition group-hover:hidden sm:hidden lg:block" />
              <MdOutlineEmail className="hidden transition group-hover:block " />
            </a>
            <a
              href={pageData.resumeURL}
              className="group flex items-center gap-2 rounded-full border border-borderColor-light bg-gray-300/20 p-4 px-4 py-2 hover:bg-gray-300/40 dark:border-borderColor-dark dark:bg-gray-300/10  dark:hover:bg-gray-300/20 
            "
              target="_blank"
            >
              Download CV{' '}
              <BsDownload className="transition-all group-hover:translate-y-1 sm:hidden md:block" />
            </a>
          </div>
        </div>
        <div className="mb-4 flex w-[200px] flex-col items-center gap-4 md:mb-0 md:mt-0 md:w-[400px] ">
          <Image
            className="rounded-full bg-white p-2 shadow-lg grayscale transition-all duration-150 ease-in-out hover:grayscale-0"
            width={400}
            height={400}
            src={pageData.profilePicture}
            alt="chris nowicki"
            priority
          />

          {/* social media icons */}
          <div className="flex justify-center gap-4">
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
                href={socialLink.devto}
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
