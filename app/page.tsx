import Image from 'next/image'
import { PortableText, PortableTextComponents } from '@portabletext/react'

// components
import SocialLink from 'components/SocialLink'

// sanity.io client & query
import { getImage, getSocialLinks, getAboutMe } from '../lib/sanityQuery'

export default async function Home() {
    const imageData = getImage()
    const socialLinkData = getSocialLinks()
    const aboutMeData = getAboutMe()

    const [chrisnowicki, socialLink, aboutMe] = await Promise.all([
        imageData,
        socialLinkData,
        aboutMeData,
    ])

    const links = [
        { name: 'Linkedin', url: socialLink.linkedin },
        { name: 'GitHub', url: socialLink.github },
    ]

    const components: PortableTextComponents = {
        block: {
            normal: ({ children }) => (
                <p className="mt-4 md:mr-4">{children}</p>
            ),
            h1: ({ children }) => (
                <h1 className="text-2xl md:mt-0 md:text-3xl">{children}</h1>
            ),
        },
    }

    return (
        <div className="px-5 md:px-0">
            <div className="flex flex-row flex-wrap-reverse rounded border border-borderColor-light p-4 dark:border-borderColor-dark md:flex-nowrap">
                <div className="flex w-full flex-col items-start text-left text-xl md:mr-6">
                    {/* <p className="mb-4 text-2xl md:mt-0 md:text-3xl">
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
                    </p> */}
                    <PortableText
                        value={aboutMe.about}
                        components={components}
                    />
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
