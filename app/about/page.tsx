'server-only'
import Image from 'next/image'
import { PortableText, PortableTextComponents } from '@portabletext/react'

// components
import SocialLink from 'components/SocialLink'

// icons
import { GitHub, Twitter } from 'components/Icons'

// sanity cms queries
import { getImage, getSocialLinks, getAboutMe } from '../../lib/sanityQuery'

import { getTweetCount } from 'lib/twitter'
import { getCommits } from 'lib/github'

export default async function Home() {
    const imageData = getImage()
    const socialLinkData = getSocialLinks()
    const aboutMeData = getAboutMe()
    const gitHubUserData = getCommits()
    // const tweetCountData = getTweetCount()

    const [chrisnowicki, socialLink, aboutMe, gitHubUser] = await Promise.all([
        imageData,
        socialLinkData,
        aboutMeData,
        gitHubUserData,
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
            <div className="flex flex-col rounded border border-borderColor-light p-4 dark:border-borderColor-dark ">
                <div className="flex flex-wrap-reverse md:flex-nowrap">
                    <div className="flex w-full flex-col items-start text-left text-xl md:mr-6">
                        <PortableText
                            value={aboutMe.bio}
                            components={components}
                        />
                    </div>

                    <div className="flex w-[200px] flex-col sm:mb-4 md:mb-0 md:mt-0 md:w-[400px]">
                        <Image
                            className="w-full rounded shadow-lg transition-all duration-150 ease-in-out hover:grayscale-0 md:w-auto"
                            width={400}
                            height={400}
                            src={chrisnowicki}
                            alt="chris nowicki"
                            priority
                        />
                        <div className="mt-2 flex w-full justify-center">
                            <a href="https://www.buymeacoffee.com/chrisnowicki">
                                <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=chrisnowicki&button_colour=FFDD00&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex w-full flex-col gap-2 rounded border border-borderColor-light p-2 text-base">
                    <div className="flex items-center gap-2 opacity-50">
                        <Twitter size={20} /> 2,996 all-time tweets
                    </div>
                    <div className="flex items-center gap-2 opacity-50">
                        <GitHub size={20} />{' '}
                        {gitHubUser.totalCommits.toLocaleString()} all-time
                        commits / {gitHubUser.totalRepos} repositories
                    </div>
                </div>
            </div>
        </div>
    )
}
