import Image from 'next/image'
import Link from 'next/link'
import SocialLink from 'components/SocialLink'
import { PortableText } from '@portabletext/react'
import { homePortableText } from './portableText'
import FeaturedProjects from '../../components/FeaturedProjects/FeaturedProjects'
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
} from 'components/Icons'

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
      <div className="flex flex-col rounded border-borderColor-light p-4 dark:border-borderColor-dark md:mx-0 md:flex-nowrap md:border">
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
                  href="https://www.linkedin.com/in/chris-nowicki
"
                  className="hover:scale-110 hover:text-purple-light hover:duration-75 hover:ease-in-out dark:hover:text-purple-dark"
                  target="_blank"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href="https://github.com/chris-nowicki"
                  className="hover:scale-110 hover:text-purple-light hover:duration-75 hover:ease-in-out dark:hover:text-purple-dark"
                  target="_blank"
                >
                  <GitHub size={28} />
                </a>
                <a
                  href="https://twitter.com/iamwix"
                  className="hover:scale-110 hover:text-purple-light hover:duration-75 hover:ease-in-out dark:hover:text-purple-dark"
                  target="_blank"
                >
                  <Twitter size={28} />
                </a>
                <a
                  href="https://instagram.com/iamwix"
                  className="hover:scale-110 hover:text-purple-light hover:duration-75 hover:ease-in-out dark:hover:text-purple-dark"
                  target="_blank"
                >
                  <Instagram size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* favorite tech stack */}
        <div className="mt-4 flex flex-wrap items-center gap-2 rounded border-t-4 border-background-light p-4 shadow-md dark:border-purple-dark dark:bg-foreground md:justify-between md:gap-0 ">
          <a
            href="https://nextjs.org/"
            className="duration-100 ease-in-out hover:scale-110"
            target="_blank"
          >
            <NEXTJS />
          </a>
          <a
            href="https://www.typescriptlang.org/"
            className="duration-100 ease-in-out hover:scale-125"
            target="_blank"
          >
            <TS />
          </a>
          <a
            href="https://tailwindcss.com/"
            className="duration-100 ease-in-out hover:scale-125"
            target="_blank"
          >
            <TAILWIND />
          </a>
          <a
            href="https://www.sanity.io/"
            className="duration-100 ease-in-out hover:scale-125"
            target="_blank"
          >
            <SANITY />
          </a>
          <a
            href="https://www.mysql.com/"
            className="duration-100 ease-in-out hover:scale-125"
            target="_blank"
          >
            <MYSQL />
          </a>

          <a
            href="https://www.mongodb.com/"
            className="duration-100 ease-in-out hover:scale-125"
            target="_blank"
          >
            <MDB />
          </a>
          <a
            href="https://www.vercel.com"
            className="duration-100 ease-in-out hover:scale-125"
            target="_blank"
          >
            <VERCEL />
          </a>
        </div>
      </div>

      {/* featured projects */}
      <div className="mx-5 mt-4 flex flex-col md:mx-0">
        <h1 className="w-full rounded-tl rounded-tr bg-background-light py-1 text-center text-2xl uppercase text-purple-dark dark:bg-background-dark ">
          Projects
        </h1>
        <FeaturedProjects projects={pageData.featuredProjects} />
      </div>

      {/* footer */}
      <div className="mx-5 mb-2 flex flex-col gap-2 md:mb-12 md:flex-row md:gap-4">
        {/* hire me! */}
        <div className="flex w-full flex-col items-center justify-center rounded bg-background-light px-8 py-8 text-foreground  shadow-lg dark:bg-background-dark md:w-1/2 md:px-16">
          <div className="flex flex-col items-center">
            <h1 className="mb-4 text-4xl text-purple-dark">Hire Me!</h1>
            <p className="break-words text-center text-xl">
              I am currently open for new work opportunities.
            </p>
            <a
              href="mailto:chris@chrisnowicki.io"
              className="mt-8 flex flex-col items-center rounded-lg border-2 border-purple-dark px-6 py-2  text-purple-dark hover:bg-purple-dark hover:text-foreground"
            >
              Say Hello
            </a>
          </div>
        </div>

        {/* footer links */}
        <div className="flex w-full flex-col gap-4 rounded border border-borderColor-light p-8 dark:border-borderColor-dark md:w-1/2">
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
