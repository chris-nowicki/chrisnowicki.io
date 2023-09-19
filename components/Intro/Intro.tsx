'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { homePortableText } from '@/lib/portable-text'
import { useActiveSection } from '@/context/active-section'
import { useSectionInView } from '@/hooks/useSectionInView'
import { contactInfo } from '@/lib/data'
import ContactButton from './ContactButton'
import type { HomePageType, MetricsType } from '@/types/types'
import { socialLinks } from '@/lib/data'
import { GitHub, Twitter } from '@/assets/Icons'
import { HiTrendingUp } from 'react-icons/hi'

type IntroProps = {
  pageData: HomePageType
  metrics: MetricsType
}

export default function Intro({ pageData, metrics }: IntroProps) {
  const { setActiveSection, setTimeOfLastClick } = useActiveSection()
  const { ref } = useSectionInView('Home')

  const githubLink = socialLinks.filter((link) => link.name === 'GitHub')[0]
  const twitterLink = socialLinks.filter((link) => link.name === 'Twitter')[0]

  return (
    <section
      ref={ref}
      id="home"
      className="mt-20 flex scroll-mt-20 flex-col md:mt-36 md:scroll-mt-36 md:flex-nowrap"
    >
      <div className="flex flex-wrap-reverse justify-center md:flex-nowrap md:justify-start">
        {/* intro text from Sanity CMS */}
        <div className="mr-0 flex w-full flex-col items-center text-left sm:text-xl md:mr-6 md:items-start md:text-xl">
          <PortableText
            value={pageData.content}
            components={homePortableText}
          />

          {/* contact and download buttons */}
          <div className="mt-4 flex items-center gap-2">
            <ContactButton
              URL="/#contact"
              contactInfo={contactInfo.Contact}
              onClickProps={() => {
                setActiveSection('Contact')
                setTimeOfLastClick(Date.now())
              }}
            />
            <ContactButton
              URL={pageData.resumeURL}
              contactInfo={contactInfo.DownloadCV}
            />
          </div>
        </div>

        {/* profile image and social media links */}
        <div className="mb-4 flex w-[200px] flex-col items-center gap-4 md:mb-0 md:mt-0 md:w-[400px] ">
          <Image
            className="rounded-xl bg-white p-2 shadow-lg"
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

          {/* metrics */}
          <div className="hidden mt-2 md:flex md:flex-col items-center justify-center gap-2 rounded-xl border border-borderColor-light p-4  dark:border-gray-300/20">
            <span className="flex items-center gap-2">
              <HiTrendingUp size={20} />
              {metrics.tweetCount.toLocaleString()} posts on{' '}
              <a
                href={twitterLink.URL}
                className=" hover:scale-110 hover:text-purple-light  hover:duration-75 hover:ease-in-out dark:hover:text-purple-dark"
                target="_blank"
              >
                <Twitter size={24} />
              </a>
            </span>
            <span className="flex items-center gap-2">
              <HiTrendingUp size={20} />
              {metrics.githubCommits.toLocaleString()}{' '}
              <a
                href={githubLink.URL}
                className=" hover:scale-110 hover:text-purple-light hover:duration-75 hover:ease-in-out dark:hover:text-purple-dark"
                target="_blank"
              >
                <GitHub size={24} />
              </a>
              commits
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
