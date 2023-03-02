import Link from './Link'
import { urlFor } from 'lib/sanityClient'

export interface Props {
    name: string
    excerpt: string
    image: string
    tags: string[]
    gitHubUrl: string
    liveSiteUrl: string
}

export default function ProjectCard({
    name,
    excerpt,
    image,
    tags,
    gitHubUrl,
    liveSiteUrl,
}: Props) {
    let projectImage
    image ? (projectImage = urlFor(image).url()) : null
    return (
        <div className="flex h-[276px] w-[375px] rounded border border-neutral-200 p-2 shadow-md shadow-black/25 dark:border-background-dark dark:shadow-background-dark/25">
            <div className="flex w-full gap-2">
                <div className="flex cursor-default flex-col rounded  bg-background-light p-2 dark:bg-background-dark">
                    <div className="mb-3 flex flex-col items-center">
                        <span className="text-lg text-purple-dark">{name}</span>
                        <p className="mt-2 px-4 text-lg text-foreground">
                            {excerpt}
                        </p>
                    </div>
                    <div className="mb-4 flex flex-wrap justify-center gap-1">
                        <div className="flex w-full justify-center gap-2 px-0 pb-2 md:px-12">
                            <Link url={gitHubUrl} icon="github" name="code" />
                            {liveSiteUrl && (
                                <Link
                                    url={liveSiteUrl}
                                    icon="open-outline"
                                    name="live site"
                                />
                            )}
                        </div>
                        <div className="flex flex-row gap-1">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
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
                </div>
            </div>
        </div>
    )
}
