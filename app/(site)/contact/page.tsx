import Header from '../resume/Header'
import SocialLink from '../../components/SocialLink'
import ogImageURL from '../../../lib/og-image-url'

// types
import type { Metadata } from 'next'
import { SocialLinksType, OGImageType, ContactInfoType } from '../../../types'

// metadata
const title: string = 'Contact'
const description: string =
  'Contact me via email or through one of my social media channels.'
const ogImage: OGImageType = ogImageURL(description)

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: 'https://chrisnowicki.io/contact',
    images: [ogImage],
  },
  twitter: {
    title: title,
    card: 'summary_large_image',
  },
}

// sanity cms query
import {
  getImage,
  getContactInfo,
  getSocialLinks,
} from '../../../sanity/sanity-queries'

export default async function Resume() {
  const pictureData: Promise<string> = getImage()
  const contactData: Promise<ContactInfoType> = getContactInfo()
  const socialLinkData: Promise<SocialLinksType> = getSocialLinks()

  const [chrisnowicki, contactInfo, socialLink] = await Promise.all([
    pictureData,
    contactData,
    socialLinkData,
  ])

  const links = [
    { name: 'linkedin', href: socialLink.linkedin, arrow: 'before' },
    { name: 'github', href: socialLink.github, arrow: 'before' },
    { name: 'twitter', href: socialLink.twitter, arrow: 'before' },
    { name: 'instagram', href: socialLink.instagram, arrow: 'before' },
  ]

  return (
    <div className="flex w-full flex-col px-5 lg:px-0">
      <Header image={chrisnowicki} data={contactInfo} />
      <div className="flex w-full flex-col-reverse md:flex-row md:gap-4">
        {/* get in touch */}
        <div className="flex w-full flex-col  items-center gap-4 md:w-1/2 md:flex-row">
          <div className="flex w-full flex-col items-center justify-center rounded bg-background-light px-8 py-8 text-foreground shadow-lg shadow-background-light/50 dark:bg-background-dark dark:shadow-background-dark/50 md:px-16">
            <h1 className="mb-4 text-4xl text-purple-dark">Get In Touch</h1>
            <p className="text-center text-lg">
              I am currently looking for new work. Contact me to say hello, talk
              about an opportunity, or ask me a question! My inbox is always
              open.
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
        <div className="mb-4 flex w-full flex-col justify-between gap-2 rounded border border-neutral-200 p-4 dark:border-background-dark md:mb-0 md:w-1/2 md:gap-4">
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
  )
}
