import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { Linkedin, GitHub, Twitter } from '@/components/Icons'
import { SocialLinksType, HomePageType } from '@/types'
import { homePortableText } from '@/lib/portable-text'

// sanity cms queries
import { getSocialLinks, getHomePage } from '@/sanity/sanity-queries'

export default async function Intro() {
  const socialLinkData: Promise<SocialLinksType> = getSocialLinks()
  const homePageData: Promise<HomePageType> = getHomePage()

  const [socialLink, pageData] = await Promise.all([
    socialLinkData,
    homePageData,
  ])

  return (
    <section id="home" className="flex flex-col md:mx-0 md:flex-nowrap">
      <div className="flex flex-wrap-reverse md:flex-nowrap">
        <div className="flex w-full flex-col items-start text-left text-xl md:mr-6">
          <PortableText
            value={pageData.content}
            components={homePortableText}
          />
        </div>
        <div className="flex w-[200px] flex-col gap-4 sm:mb-4 md:mb-0 md:mt-0 md:w-[400px]">
          <Link href={'/about'} className="flex w-full">
            <Image
              className="rounded shadow-lg grayscale transition-all duration-150 ease-in-out hover:grayscale-0"
              width={400}
              height={400}
              src={pageData.profilePicture}
              alt="chris nowicki"
              priority
            />
          </Link>

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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
