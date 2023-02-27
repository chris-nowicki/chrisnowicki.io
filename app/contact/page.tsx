import Image from 'next/image'

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

// icons
import { Location } from 'components/Icons'

// sanity.io query
import { getImage, getContactInfo } from '../../lib/sanity'

export default async function Resume() {
    const pictureData = getImage()
    const contactData = getContactInfo()

    const [chrisnowicki, contact] = await Promise.all([
        pictureData,
        contactData,
    ])

    const links = [
        { name: 'linkedin', href: contact.linkedin },
        { name: 'github', href: contact.github },
        { name: 'twitter', href: 'http://twitter.com/iamwix' },
        { name: 'instagram', href: 'http://www.instagram.com/iamwix' },
    ]

    return (
        <div className="flex w-full flex-col px-5 lg:px-0">
            {/* name and email */}
            <div className="mb-4 flex w-full gap-4 rounded border border-neutral-200 p-2 text-center dark:border-background-dark md:text-left">
                <div className="flex w-1/4">
                    <Image
                        src={chrisnowicki}
                        width={200}
                        height={200}
                        className="rounded"
                        priority
                        alt="chris nowicki"
                    />
                </div>
                <div className="flex w-3/4 flex-col items-center justify-center">
                    <h1 className="text-2xl md:text-5xl">{contact.name}</h1>
                    <a
                        href="mailto:chris@chrisnowicki.io"
                        className="ml-1 text-lg text-purple-light hover:underline dark:text-purple-dark md:text-2xl"
                    >
                        {contact.email}
                    </a>
                    <p className="text-md mt-1 flex items-center md:text-xl">
                        <Location size={24} />
                        {contact.location}
                    </p>
                </div>
            </div>

            <div className="flex w-full flex-col-reverse md:flex-row md:gap-4">
                {/* resume and social links */}
                <div className="flex w-full flex-col  items-center gap-4 md:w-1/2 md:flex-row">
                    <Contact />
                </div>
                <div className="mb-4 flex w-full flex-col justify-between gap-2 rounded border border-neutral-200 p-4 dark:border-neutral-900/20 md:mb-0 md:w-1/2 md:gap-4">
                    {links.map((link) => (
                        <SocialLink name={link.name} href={link.href} />
                    ))}
                </div>
            </div>
        </div>
    )
}
