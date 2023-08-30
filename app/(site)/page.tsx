import SocialLink from '@/components/SocialLink'
import Intro from '@/components/Intro'
import TechStack from '@/components/TechStack'
import FeaturedProjects from '@/components/FeaturedProjects/FeaturedProjects'

// types
import { SocialLinksType, HomePageType } from '@/types'

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
      <Intro />

      {/* featured projects */}
      <div className="mx-5 mt-8 flex flex-col md:mx-0">
        <h1 className="w-full rounded-tl rounded-tr bg-background-light py-1 text-center text-2xl uppercase text-purple-dark dark:bg-background-dark ">
          My Projects
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
