import Image from 'next/image'
import Link from 'next/link'
import { PortableText, PortableTextComponents } from '@portabletext/react'

// components
import SocialLink from 'components/SocialLink'

// icons
import { GitHub, Twitter } from 'components/Icons'

// sanity cms queries
import { getSocialLinks, getAboutMe } from '../../lib/sanityQueries'
import { getTweetCount, getGithubMetrics } from 'lib/planetscale'

export const revalidate = 60 // In seconds

export default async function Home() {
    const socialLinkData = getSocialLinks()
    const aboutMeData = getAboutMe()
    const tweetCountData = getTweetCount()
    const githubMetricsData = getGithubMetrics()

    const [socialLink, aboutMe, tweetCount, githubMetrics] = await Promise.all([
        socialLinkData,
        aboutMeData,
        tweetCountData,
        githubMetricsData,
    ])

    const links = [
        { name: 'Linkedin', url: socialLink.linkedin },
        { name: 'GitHub', url: socialLink.github },
        { name: 'twitter', url: socialLink.twitter },
        { name: 'instagram', url: socialLink.instagram },
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
                    <div className="flex w-full flex-col items-start text-left text-xl md:mr-1">
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
                            src={aboutMe.profilePicture}
                            alt="chris nowicki"
                            priority
                        />
                        <div className="mt-2 flex w-full justify-center rounded border p-2">
                            <Link href="https://www.buymeacoffee.com/chrisnowicki">
                                <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=chrisnowicki&button_colour=FFDD00&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" />
                            </Link>
                        </div>
                        <div className="mt-2 flex w-full flex-col rounded border border-borderColor-light text-base">
                            <div className="flex items-center gap-2">
                                <div className="flex flex-col justify-center border-r border-borderColor-light p-2">
                                    <Twitter size={20} />
                                </div>
                                <div>
                                    {tweetCount.toLocaleString()} all-time
                                    tweets
                                </div>
                            </div>
                            <div className="flex w-full items-center gap-2 border-t border-borderColor-light">
                                <div className="flex h-full flex-col justify-center border-r border-borderColor-light p-2">
                                    <GitHub size={20} />
                                </div>
                                <div className="flex flex-col">
                                    <p>
                                        {githubMetrics.commits.toLocaleString()}{' '}
                                        all-time commits
                                    </p>
                                    <p>
                                        {githubMetrics.repos.toLocaleString()}{' '}
                                        repositories
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 flex w-full flex-col justify-center gap-2 ">
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
                </div>
            </div>
        </div>
    )
}
