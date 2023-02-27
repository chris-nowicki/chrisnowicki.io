import Image from 'next/image'

import Contact from 'components/Contact'

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Resume',
    description: 'Read through my resume if you are interested in hiring me!',
}

// icons
import { Location, GitHub, Linkedin, ArrowIcon, Twitter, Instagram } from 'components/Icons'

// sanity.io client & query
import { getImage, getContactInfo } from '../../lib/sanity'

export default async function Resume() {
    const pictureData = getImage()
    const contactData = getContactInfo()

    const [chrisnowicki, contact] = await Promise.all([
        pictureData,
        contactData,
    ])

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

            <div className="flex w-full gap-4">
                {/* resume and social links */}
                <div className="mb-12 flex w-1/2 flex-col items-center gap-4 md:flex-row">
                    <Contact showProjects={true} />
                </div>
                <div className="flex w-1/2 flex-col gap-4">
                    {/* linkedin link */}
                    <a
                        href={contact.linkedin}
                        className="flex w-full items-center justify-between rounded-md border border-neutral-200 p-4 hover:bg-neutral-100 dark:border-background-dark hover:dark:bg-background-dark/25"
                        target="_blank"
                    >
                        <div className="flex items-center gap-2">
                            <Linkedin size={24} />
                            Linkedin
                        </div>
                        <ArrowIcon size={12} />
                    </a>

                    {/* github Link */}
                    <a
                        href={contact.github}
                        className="flex w-full items-center justify-between rounded-md border border-neutral-200 p-4 hover:bg-neutral-100 dark:border-background-dark hover:dark:bg-background-dark/20"
                        target="_blank"
                    >
                        <div className="flex items-center gap-2">
                            <GitHub size={24} />
                            GitHub
                        </div>
                        <ArrowIcon size={12} />
                    </a>
                    <a
                        href='http://twitter.com/iamwix'
                        className="flex w-full items-center justify-between rounded-md border border-neutral-200 p-4 hover:bg-neutral-100 dark:border-background-dark hover:dark:bg-background-dark/20"
                        target="_blank"
                    >
                        <div className="flex items-center gap-2">
                            <Twitter size={24} />
                            Twitter
                        </div>
                        <ArrowIcon size={12} />
                    </a>
                    <a
                        href='http://www.instagram.com/iamwix'
                        className="flex w-full items-center justify-between rounded-md border border-neutral-200 p-4 hover:bg-neutral-100 dark:border-background-dark hover:dark:bg-background-dark/20"
                        target="_blank"
                    >
                        <div className="flex items-center gap-2">
                            <Instagram size={24} />
                            Instagram
                        </div>
                        <ArrowIcon size={12} />
                    </a>
                </div>
            </div>
        </div>
    )
}
