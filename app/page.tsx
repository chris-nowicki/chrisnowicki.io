import Link from 'next/link'
import Image from 'next/image'

import { about } from 'lib/info'

// sanity.io client & query
import { getImage } from '../lib/sanity'

// icons
import { GitHub, Linkedin, ArrowIcon } from 'components/Icons'

export default async function Home() {
    const imageData = getImage()

    const [chrisnowicki] = await Promise.all([imageData])

    return (
        <div className="px-10 md:px-0">
            <div className="mt-0 flex flex-row flex-wrap-reverse justify-center md:mt-6 md:flex-nowrap">
                <div className="flex w-full flex-col items-start text-left md:mr-6 text-xl">
                
                    {about()}
                    <div className="mt-4 flex w-full flex-row justify-center gap-2 md:justify-start">
                        <Link
                            href="http://www.linkedin.com/in/chris-nowicki"
                            className="flex w-full items-center justify-between gap-2 rounded border border-neutral-200 py-3 px-4 text-lg hover:bg-neutral-100 dark:border-background-dark dark:hover:bg-background-dark/25 md:w-auto"
                            target="_blank"
                            prefetch={false}
                        >
                            <div className="flex items-center gap-2">
                                <Linkedin size={24} />
                                Linkedin
                            </div>
                            <ArrowIcon size={12} />
                        </Link>

                        <Link
                            href="https://github.com/chris-nowicki"
                            className="flex w-full items-center justify-between gap-2 rounded border border-neutral-200 px-4 py-3 text-lg hover:bg-neutral-100 dark:border-background-dark dark:hover:bg-background-dark/25 md:w-auto"
                            target="_blank"
                            prefetch={false}
                        >
                            <div className="flex items-center gap-2">
                                <GitHub size={24} />
                                GitHub
                            </div>
                            <ArrowIcon size={12} />
                        </Link>
                    </div>
                </div>

                <div className="flex w-[200px] flex-col sm:mb-4 md:mb-0 md:mt-0 md:w-[400px]">
                    <Image
                        className="w-full rounded shadow-lg grayscale transition-all duration-150 ease-in-out hover:grayscale-0 md:w-auto"
                        width={400}
                        height={400}
                        src={chrisnowicki}
                        alt="chris nowicki"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}
