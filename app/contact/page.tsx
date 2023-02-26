import Image from 'next/image'
// sanity.io client & query
import { getImage, getContactInfo } from '../../lib/sanity'

import { Location } from 'components/Icons'

export default async function Contact() {
    const imageData = getImage()
    const contactData = getContactInfo()

    const [chrisnowicki, contact] = await Promise.all([imageData, contactData])

    return (
        <>
            {/* name and email */}
            <div className="mb-4 flex gap-4 rounded border border-neutral-200 p-2 text-center dark:border-background-dark md:text-left">
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
            <div
                id="contact"
                className="mb-16 flex w-full flex-col items-center justify-center  rounded bg-background-light py-8 px-8 text-foreground shadow-lg shadow-background-light/50 dark:bg-background-dark dark:shadow-background-dark/50 md:px-16 "
            >
                <div className="flex flex-col items-center">
                    <h1 className="mb-4 text-4xl text-purple-dark">
                        Get In Touch
                    </h1>
                    <p className="text-center text-lg">
                        I am currently looking for new work. Contact me to say
                        hello, talk about an opportunity, or ask me a question!
                        My inbox is always open.
                    </p>
                    <a
                        href="mailto:chris@chrisnowicki.io"
                        className="mt-8 flex flex-col items-center rounded-lg border-2 border-purple-dark px-6 py-2  text-purple-dark hover:bg-purple-dark hover:text-foreground"
                    >
                        Say Hello
                    </a>
                </div>
            </div>
        </>
    )
}
