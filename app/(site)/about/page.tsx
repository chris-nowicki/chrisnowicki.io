import Image from 'next/image'
import SocialLink from 'components/SocialLink'
import ogImageURL from '@/lib/og-image-url'
import { PortableText } from '@portabletext/react'
import { aboutMePortableText } from '@/lib/portable-text'
import { GitHub, Twitter } from 'components/Icons'

// types
import { Metadata } from 'next'
import { OGImageType, MetricsType, AboutPageType, SocialLinksType } from 'types'

// metadata
const title: string = 'About'
const description: string = `Read more about me and my life!`
const ogImage: OGImageType = ogImageURL(description)

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: 'https://chrisnowicki.io/about',
    images: [ogImage],
  },
  twitter: {
    title: title,
    card: 'summary_large_image',
  },
}

// sanity cms queries
import { getSocialLinks, getAboutPage } from '@/sanity/sanity-queries'

// vercel db query
import { getMetrics } from '@/lib/vercel-storage'

export const revalidate = 60 // In seconds

export default async function About() {
  const socialLinkData: Promise<SocialLinksType> = getSocialLinks()
  const aboutPageData: Promise<AboutPageType> = getAboutPage()
  const getMetricsData: Promise<MetricsType> = getMetrics()

  const [socialLink, pageData, metrics] = await Promise.all([
    socialLinkData,
    aboutPageData,
    getMetricsData,
  ])

  const links = [
    { name: 'Linkedin', url: socialLink.linkedin },
    { name: 'GitHub', url: socialLink.github },
    { name: 'twitter', url: socialLink.twitter },
  ]

  return (
    <div className="mb-12 flex flex-col p-4 md:rounded md:border md:border-borderColor-light md:dark:border-borderColor-dark">
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="flex w-full flex-col items-start text-left text-lg md:mr-6">
          <PortableText
            value={pageData.content}
            components={aboutMePortableText}
          />
        </div>
        <div className="flex w-full flex-col sm:mb-4 md:mb-0 md:mt-0 md:w-[400px]">
          <Image
            className="w-full rounded shadow-lg sm:hidden md:block"
            width={400}
            height={400}
            src={pageData.profilePicture}
            alt="chris nowicki"
            priority
          />
          <div className="mt-4 flex w-full flex-col rounded border border-borderColor-light text-base dark:border-borderColor-dark">
            <div className="flex items-center gap-2">
              <div className="flex flex-col justify-center border-r border-borderColor-light bg-borderColor-light/40 px-4 py-2 dark:border-borderColor-dark dark:bg-borderColor-dark/30">
                <Twitter size={24} />
              </div>
              <div>{metrics.tweetCount.toLocaleString()} all-time tweets</div>
            </div>
            <div className="flex w-full items-center gap-2 border-t dark:border-borderColor-dark">
              <div className="flex h-full flex-col justify-center border-r border-borderColor-light bg-borderColor-light/40 px-4 py-2 dark:border-borderColor-dark dark:bg-borderColor-dark/30">
                <GitHub size={24} />
              </div>
              <div className="flex flex-col">
                <p>{metrics.githubCommits.toLocaleString()} all-time commits</p>
                <p className="border-t border-borderColor-light dark:border-borderColor-dark">
                  {metrics.githubRepos.toLocaleString()} repositories
                </p>
              </div>
            </div>
          </div>
          <div className="mt-2 flex w-full flex-col justify-between gap-2 rounded md:mb-0">
            {links.map((link) => (
              <SocialLink
                key={link.name}
                icon={link.name.toLowerCase()}
                content={link.name}
                url={link.url}
                width="w-auto"
                fontSize="md"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
