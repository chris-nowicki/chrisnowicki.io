import Image from 'next/image'
import Link from 'next/link'
import { PortableText, PortableTextComponents } from '@portabletext/react'

// components
import SocialLink from '../../components/SocialLink'

// sanity cms queries
import { getSocialLinks, getAboutMe } from '../../sanity/sanity-queries'

export default async function Home() {
  const socialLinkData = getSocialLinks()
  const aboutMeData = getAboutMe()

  const [socialLink, aboutMe] = await Promise.all([socialLinkData, aboutMeData])

  const links = [
    { name: 'Linkedin', url: socialLink.linkedin },
    { name: 'GitHub', url: socialLink.github },
  ]

  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => <p className="mt-4 md:mr-4">{children}</p>,
      h1: ({ children }) => (
        <h1 className="text-2xl md:mt-0 md:text-3xl">{children}</h1>
      ),
    },
  }

  return (
    <div className="mx-5 flex flex-wrap-reverse rounded border border-borderColor-light p-4 dark:border-borderColor-dark md:mx-0 md:flex-nowrap">
      <div className="flex w-full flex-col items-start text-left text-xl md:mr-6">
        <PortableText value={aboutMe.about} components={components} />
        <div className="mt-4 flex w-full flex-col justify-center gap-2 md:flex-row md:justify-start">
          {links.map((link) => (
            <SocialLink
              key={link.name}
              icon={link.name.toLowerCase()}
              content={link.name}
              url={link.url}
              width="w-auto"
              fontSize="lg"
            />
          ))}
        </div>
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
  )
}
