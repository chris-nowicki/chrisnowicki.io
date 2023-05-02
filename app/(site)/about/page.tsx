import Image from 'next/image'
import { PortableText, PortableTextComponents } from '@portabletext/react'

// components
import SocialLink from '../../../components/SocialLink'

// icons
import { GitHub, Twitter } from '../../../components/Icons'

// sanity cms queries
import { urlFor } from '../../../sanity/sanity-utils'
import { getSocialLinks, getAboutMe } from '../../../sanity/sanity-queries'

// planetscale query
import { getMetrics } from '../../../lib/vercel'

export const revalidate = 60 // In seconds

export default async function Home() {
  const socialLinkData = getSocialLinks()
  const aboutMeData = getAboutMe()
  const getMetricsData = getMetrics()

  const [socialLink, aboutMe, metrics] = await Promise.all([
    socialLinkData,
    aboutMeData,
    getMetricsData,
  ])

  const links = [
    { name: 'Linkedin', url: socialLink.linkedin },
    { name: 'GitHub', url: socialLink.github },
    { name: 'twitter', url: socialLink.twitter },
  ]

  const components: PortableTextComponents = {
    types: {
      image: ({ value }) => (
        <>
          <div className="mt-4 flex flex-col rounded-lg border border-borderColor-light px-4 py-4 pb-4 dark:border-borderColor-dark">
            <Image
              src={urlFor(value).url()}
              width={400}
              height={400}
              alt="wedding picture"
              className="sm:w-[250px] rounded-lg md:w-auto"
              priority
            />
            <p className="mt-2 text-center text-sm">
              <b>2/22/22 </b>- Telluride, CO
            </p>
          </div>
        </>
      ),
    },
    block: {
      normal: ({ children }) => <p className="mt-4 md:mr-4">{children}</p>,
      h1: ({ children }) => (
        <h1 className="text-2xl md:mt-0 md:text-3xl">{children}</h1>
      ),
    },
  }

  return (
    <div className="mb-12 px-5 md:px-0">
      <div className="flex flex-col rounded border border-borderColor-light p-4 dark:border-borderColor-dark ">
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="flex w-full flex-col items-start text-left text-lg md:mr-6">
            <PortableText value={aboutMe.bio} components={components} />
          </div>
          <div className="md:w-[400px] flex w-full flex-col sm:mb-4 md:mb-0 md:mt-0">
            <Image
              className="w-full rounded shadow-lg sm:hidden md:block"
              width={400}
              height={400}
              src={aboutMe.profilePicture}
              alt="chris nowicki"
              priority
            />
            <div className="mt-4 flex w-full flex-col rounded border border-borderColor-light text-base dark:border-borderColor-dark">
              <div className="flex items-center gap-2">
                <div className="dark:bg-borderColor-dark/30 flex flex-col justify-center border-r border-borderColor-light bg-borderColor-light/40 px-4 py-2 dark:border-borderColor-dark">
                  <Twitter size={24} />
                </div>
                <div>{metrics.tweetCount.toLocaleString()} all-time tweets</div>
              </div>
              <div className="flex w-full items-center gap-2 border-t dark:border-borderColor-dark">
                <div className="dark:bg-borderColor-dark/30 flex h-full flex-col justify-center border-r border-borderColor-light bg-borderColor-light/40 px-4 py-2 dark:border-borderColor-dark">
                  <GitHub size={24} />
                </div>
                <div className="flex flex-col">
                  <p>
                    {metrics.githubCommits.toLocaleString()} all-time commits
                  </p>
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
    </div>
  )
}
