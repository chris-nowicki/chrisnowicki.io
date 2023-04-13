import Image from 'next/image'
import { motion } from 'framer-motion'
import clsx from 'clsx'

// components
import Link from '../../Link'

// sanity cms function to create URL for image
import { urlFor } from 'lib/sanityClient'

// types
type ProjectCardProps = {
    name: string
    excerpt: string
    image: string
    tags: string[]
    gitHubUrl: string
    liveSiteUrl: string
    isSelected: boolean
    direction: any
    page: any
}

export default function ProjectCard({
    name,
    excerpt,
    image,
    tags,
    gitHubUrl,
    liveSiteUrl,
    isSelected,
    direction,
    page,
}: ProjectCardProps) {
    let projectImage: string
    image && (projectImage = urlFor(image).url())

    const variants = {
        enter: (direction: number) => {
            return {
                x: direction > 0 ? 600 : -600,
                opacity: 1,
            }
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 800 : -800,
                opacity: 1,
            }
        },
    }

    return (
        <>
            {isSelected && (
                <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: {
                            type: 'spring',
                            duration: 0.3,
                        },
                    }}
                >
                    <div className="flex h-[290px] max-h-[290px] w-full flex-col gap-2 md:h-[271px] md:max-h-[271px] md:flex-row">
                        {/* featured project info */}
                        <div className="flex h-full w-full cursor-default flex-col justify-between rounded bg-background-light p-2  dark:bg-background-dark md:w-1/2 md:justify-start">
                            <div className="mb-3 flex flex-col items-center">
                                <span className="text-lg text-purple-dark">
                                    {name}
                                </span>
                                <div className="mb-2 mt-2 flex flex-wrap justify-center gap-1">
                                    <div className="flex flex-row gap-1">
                                        {tags.map((tag, index) => (
                                            <span
                                                key={tag['name']}
                                                className={clsx(
                                                    'inline-flex items-center rounded px-1.5 py-0.5 text-xs',
                                                    index == 0
                                                        ? 'bg-green-100  text-green-800'
                                                        : index == 1
                                                        ? 'bg-purple-100 text-purple-800'
                                                        : 'bg-blue-100 text-blue-800'
                                                )}
                                            >
                                                {tag['name']}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-md mt-2 flex-wrap px-2 text-foreground md:text-lg">
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
                                    className="border border-borderColor-dark shadow-md"
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
