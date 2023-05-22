import Image from 'next/image'
import Link from 'next/link'
import SocialLink from '@/components/SocialLink'
import { PortableText } from '@portabletext/react'
import { homePortableText } from './portableText'

// types
import { SocialLinksType, AboutMeType } from 'types'

// sanity cms queries
import { getSocialLinks, getAboutMe } from '@/sanity/sanity-queries'

export default async function Home() {
  const socialLinkData: Promise<SocialLinksType> = getSocialLinks()
  const aboutMeData: Promise<AboutMeType> = getAboutMe()

  const [socialLink, aboutMe] = await Promise.all([socialLinkData, aboutMeData])

  const links = [
    { name: 'linkedin', href: socialLink.linkedin, arrow: 'before' },
    { name: 'github', href: socialLink.github, arrow: 'before' },
    { name: 'twitter', href: socialLink.twitter, arrow: 'before' },
    { name: 'instagram', href: socialLink.instagram, arrow: 'before' },
  ]

  return (
    <div className="flex flex-col">
      <div className="mx-5 flex flex-wrap-reverse rounded border border-borderColor-light p-4 dark:border-borderColor-dark md:mx-0 md:flex-nowrap">
        <div className="flex w-full flex-col items-start text-left text-xl md:mr-6">
          <PortableText value={aboutMe.about} components={homePortableText} />
        </div>

        <div className="flex w-[200px] flex-col sm:mb-4 md:mb-0 md:mt-0 md:w-[400px]">
          <Link href={'/about'} className="flex w-full">
            <Image
              className="rounded shadow-lg grayscale transition-all duration-150 ease-in-out hover:grayscale-0"
              width={400}
              height={400}
              src={aboutMe.profilePicture}
              alt="chris nowicki"
              priority
            />
          </Link>
        </div>
      </div>
      {/* contact info */}
      <div className="mt-4 flex w-full flex-col px-5 lg:px-0">
        <div className="flex w-full flex-col md:flex-row md:gap-4">
          {/* get in touch */}
          <div className="flex w-full flex-col  items-center gap-4 md:w-1/2 md:flex-row">
            <div className="flex w-full flex-col items-center justify-center rounded bg-background-light px-8 py-8 text-foreground shadow-lg dark:bg-background-dark md:px-16 md:shadow-background-light/50 md:dark:shadow-background-dark/50">
              <h1 className="mb-4 text-4xl text-purple-dark">Get In Touch</h1>
              <p className="text-center text-lg">
                I am currently looking for new work. Contact me to say hello,
                talk about an opportunity, or ask me a question! My inbox is
                always open.
              </p>
              <a
                href="mailto:chris@chrisnowicki.io"
                className="mt-8 flex flex-col items-center rounded-lg border-2 border-purple-dark px-6 py-2  text-purple-dark hover:bg-purple-dark hover:text-foreground"
              >
                Say Hello
              </a>
            </div>
          </div>

          {/* social links */}
          <div className="mb-4 mt-4 flex w-full flex-col justify-between gap-2 rounded border border-neutral-200 p-4 dark:border-background-dark md:mb-0 md:mt-0 md:w-1/2 md:gap-4">
            {links.map((link) => (
              <SocialLink
                key={link.name}
                arrowPlacement={link.arrow}
                content={`follow me on ${link.name}`}
                icon={link.name}
                padding={4}
                url={link.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
