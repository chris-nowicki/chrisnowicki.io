// components
import Header from '../resume/Header'

// components
import Contact from './Contact'
import SocialLink from './SocialLink'

// meta data
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact',
    description:
        'Contact me via email or through one of my social media channels!',
}

// sanity.io query
import { getImage, getContactInfo, getSocialLinks } from '../../lib/sanity'

export default async function Resume() {
    const pictureData = getImage()
    const contactData = getContactInfo()
    const socialLinkData = getSocialLinks()

    const [chrisnowicki, contact, socialLink] = await Promise.all([
        pictureData,
        contactData,
        socialLinkData
    ])

    const links = [
        { name: 'linkedin', href: socialLink.linkedin },
        { name: 'github', href: socialLink.github },
        { name: 'twitter', href: socialLink.twitter },
        { name: 'instagram', href: socialLink.instagram },
    ]

    return (
        <div className="flex w-full flex-col px-5 lg:px-0">
            <Header image={chrisnowicki} data={contact} />
            <div className="flex w-full flex-col-reverse md:flex-row md:gap-4">
                {/* resume and social links */}
                <div className="flex w-full flex-col  items-center gap-4 md:w-1/2 md:flex-row">
                    <Contact />
                </div>
                <div className="mb-4 flex w-full flex-col justify-between gap-2 rounded border border-neutral-200 p-4 dark:border-neutral-900/20 md:mb-0 md:w-1/2 md:gap-4">
                    {links.map((link) => (
                        <SocialLink key={link.name} name={link.name} href={link.href} />
                    ))}
                </div>
            </div>
        </div>
    )
}
