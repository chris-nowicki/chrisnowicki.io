import Image from 'next/image'
import { motion } from 'framer-motion'

// components
import Link from '../Link'

// sanity cms function to create URL for image
import { urlFor } from 'lib/sanityClient'

// types
import { ProjectCardProps } from 'ts/types'

export default function ProjectCard({
    name,
    excerpt,
    image,
    tags,
    gitHubUrl,
    liveSiteUrl,
    isSelected,
}: ProjectCardProps) {
    let projectImage: string
    image && (projectImage = urlFor(image).url())

    return (
        <>
            {isSelected && (
                <motion.div
                    initial={{ x: 1000, opacity: 1 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -1000, opacity: 0 }}
                    transition={{
                        x: {
                            type: 'spring',
                            stiffness: 300,
                            damping: 30,
                            duration: 2,
                        },
                    }}
                >
                    <div className="relative flex h-[290px] max-h-[290px] w-full flex-col gap-2 md:h-[271px] md:max-h-[271px] md:flex-row">
                        {/* featured project info */}
                        <div className="flex h-full w-full cursor-default flex-col justify-between rounded bg-background-light p-2  dark:bg-background-dark md:w-1/2 md:justify-start">
                            <div className="mb-3 flex flex-col items-center">
                                <span className="text-lg text-purple-dark">
                                    {name}
                                </span>
                                <div className="mt-2 mb-2 flex flex-wrap justify-center gap-1">
                                    <div className="flex flex-row gap-1">
                                        {tags.map((tag, index) => (
                                            <span
                                                key={tag['name']}
                                                className={`inline-flex items-center rounded px-1.5 py-0.5 text-xs
                                    ${
                                        index == 0
                                            ? 'bg-green-100  text-green-800'
                                            : index == 1
                                            ? 'bg-purple-100 text-purple-800'
                                            : 'bg-blue-100 text-blue-800'
                                    }
                                `}
                                            >
                                                {tag['name']}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-md mt-2 px-2 text-foreground md:text-lg">
                                    {excerpt}
                                </p>
                            </div>

                            {/* show github/livesite links in info card for mobile view only */}
                            <div className="flex w-full gap-1 md:hidden">
                                <Link
                                    url={gitHubUrl}
                                    icon="github"
                                    name="code"
                                    liveSiteUrl={liveSiteUrl ? true : false}
                                />
                                {liveSiteUrl && (
                                    <Link
                                        url={liveSiteUrl}
                                        icon="open-outline"
                                        name="live site"
                                        liveSiteUrl={liveSiteUrl ? true : false}
                                    />
                                )}
                            </div>
                        </div>

                        {/* featured project image, and github/livesite links to display in desktop/tablet mode only */}
                        <div className="hidden flex-col gap-2 md:flex">
                            {image && (
                                <Image
                                    className="border border-borderColor-dark object-contain shadow-md"
                                    width={367}
                                    height={227}
                                    src={projectImage}
                                    alt="featured projects"
                                    priority
                                />
                            )}
                            <div className="flex h-full w-full gap-1">
                                <Link
                                    url={gitHubUrl}
                                    icon="github"
                                    name="code"
                                    liveSiteUrl={liveSiteUrl ? true : false}
                                />
                                {liveSiteUrl && (
                                    <Link
                                        url={liveSiteUrl}
                                        icon="open-outline"
                                        name="live site"
                                        liveSiteUrl={liveSiteUrl ? true : false}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    )
}
