import Image from 'next/image'

import Contact from 'components/Contact'

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Resume',
    description: 'Read through my resume if you are interested in hiring me!',
}

// icons
import { Location } from 'components/Icons'

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

            {/* resume and social links */}
            <div className="mb-12 flex w-full flex-col items-center gap-4 md:flex-row">
                <Contact showProjects={true} />
            </div>
            <div className="mb-8 flex w-full flex-col gap-4"></div>
        </div>
    )
}
