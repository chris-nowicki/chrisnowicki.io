import Link from 'next/link'
import Image from 'next/image'

// sanity.io client & query
import { getImage, getSocialLinks } from '../lib/sanity'

// icons
import { GitHub, Linkedin, ArrowIcon } from 'components/Icons'

export default async function Home() {
    const imageData = getImage()
    const socialLinkData = getSocialLinks()

    const [chrisnowicki, socialLink] = await Promise.all([imageData, socialLinkData])

    return (
        <div className="px-10 md:px-0">
            <div className="mt-0 flex flex-row flex-wrap-reverse md:mt-6 md:flex-nowrap">
                <div className="flex w-full flex-col items-start text-left text-xl md:mr-6">
                    <p className="mb-4 text-2xl md:mt-0 md:text-3xl">
                        Hello, I'm{' '}
                        <span className="text-purple-light dark:text-purple-dark">
                            Chris Nowicki
                        </span>
                        .
                    </p>
                    <p>
                        I'm a technology nerd who lives on coffee ☕️, is
                        obsessed with cheeseburgers 🍔, and tinkers with new
                        tech on a daily basis.
                    </p>
                    <p className="mt-4 md:mr-4">
                        I excel at bringing web designs to life and am
                        passionate about backend development.
                    </p>
                    <p className="mt-4 font-mono text-lg text-purple-light dark:text-purple-dark md:mr-4">
                        I'm currently looking for a new role as a full-stack
                        engineer.
                    </p>
                    <div className="mt-4 flex w-full flex-row justify-center gap-2 md:justify-start">
                        <Link
                            href={socialLink.linkedin}
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
                            href={socialLink.github}
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
