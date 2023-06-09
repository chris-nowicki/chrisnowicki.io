import Image from 'next/image'
import Link from 'next/link'
import SocialLink from '@/components/SocialLink'
import { PortableText } from '@portabletext/react'
import { homePortableText } from './portableText'
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects'
import {
  Linkedin,
  GitHub,
  Twitter,
  Instagram,
  NEXTJS,
  TS,
  TAILWIND,
  SANITY,
  MYSQL,
  MDB,
  VERCEL,
} from '@/components/Icons'

// types
import { SocialLinksType, HomePageType } from 'types'

// sanity cms queries
import { getSocialLinks, getHomePage } from '@/sanity/sanity-queries'

export default async function Home() {
  const socialLinkData: Promise<SocialLinksType> = getSocialLinks()
  const homePageData: Promise<HomePageType> = getHomePage()

  const [socialLink, pageData] = await Promise.all([
    socialLinkData,
    homePageData,
  ])

  const footerLinks = [
    { name: 'pdf', url: pageData.resumeURL },
    { name: 'Linkedin', url: socialLink.linkedin },
    { name: 'GitHub', url: socialLink.github },
    { name: 'Twitter', url: socialLink.twitter },
  ]

  return (
    <div className="flex flex-col">
      <div className="mx-5  flex flex-col rounded border border-borderColor-light p-4 dark:border-borderColor-dark md:mx-0 md:flex-nowrap">
        <div className="flex">
          <div className="flex w-full flex-col items-start text-left text-lg md:mr-6">
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
            <div className="flex justify-center gap-4">
              <div className="flex items-center gap-2">
                <Linkedin size={28} />
                <GitHub size={28} />
                <Twitter size={28} />
                <Instagram size={28} />
              </div>
            </div>
          </div>
        </div>

        {/* favorite tech stack */}
        <div className="flex flex-wrap items-center justify-between p-4 shadow-md border-t border-borderColor-light">
          <NEXTJS />
          <TS />
          <TAILWIND />
          <SANITY />
          <MYSQL />
          <MDB />
          <VERCEL />
        </div>
      </div>

      {/* featured projects */}
      <div className="mt-4 flex flex-col">
        <h1 className="w-full rounded-tl rounded-tr bg-background-light py-1 text-center text-3xl uppercase text-purple-dark">
          Projects
        </h1>
        <FeaturedProjects projects={pageData.featuredProjects} />
      </div>

      {/* footer */}
      <div className="mb-12 flex w-full flex-col md:flex-row md:gap-4">
        {/* hire me! */}
        <div className="flex w-1/2 flex-col items-center gap-2 rounded bg-background-light px-8 py-8  text-foreground shadow-lg dark:bg-background-dark md:px-16">
          <h1 className="mb-4 text-4xl text-purple-dark">Hire Me!</h1>
          <p className="break-words text-center text-xl">
            I am currently open for new work opportunities. Say Hello to hire
            your next Full-Stack Software Engineer!
          </p>
          <a
            href="mailto:chris@chrisnowicki.io"
            className="mt-8 flex flex-col items-center rounded-lg border-2 border-purple-dark px-6 py-2  text-purple-dark hover:bg-purple-dark hover:text-foreground"
          >
            Say Hello
          </a>
        </div>

        {/* links */}
        <div className="flex w-1/2 flex-col gap-4 rounded border border-borderColor-light p-8">
          {footerLinks.map((link, index) => (
            <SocialLink
              key={index + link.name}
              content={link.name}
              icon={link.name.toLowerCase()}
              url={link.url}
              padding={4}
              fontSize={'md'}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
