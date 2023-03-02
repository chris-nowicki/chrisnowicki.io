import Image from 'next/image'
import Link from './Link'
import { urlFor } from 'lib/sanityClient'
import { motion } from 'framer-motion'

export interface Props {
    name: string
    excerpt: string
    image: string
    tags: string[]
    gitHubUrl: string
    liveSiteUrl: string
    isSelected: boolean
}

export default function ProjectCard({
    name,
    excerpt,
    image,
    tags,
    gitHubUrl,
    liveSiteUrl,
    isSelected,
}: Props) {
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
