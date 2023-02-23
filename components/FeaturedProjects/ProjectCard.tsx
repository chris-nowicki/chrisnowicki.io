import Link from './Link'
import { urlFor } from 'lib/sanity'

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
    const projectImage = urlFor(image).url()

    return (
        <div className="flip-card h-[400px] w-[400px] md:h-[235px] md:w-[375px]">
            <div className="flip-card-inner">
                <div className="flip-card-front rounded shadow-lg shadow-black/25">
                    <img
                        src={projectImage}
                        width={375}
                        height={235}
                        alt="Avatar"
                        loading={'lazy'}
                        className="w-[400px] md:w-[375px]"
                    />
                </div>
                <div className="flip-card-back flex cursor-default flex-col justify-start bg-bgDark shadow-md shadow-black/25 dark:bg-gray-900">
                    <div className="mt-4">
                        <span className="text-lg text-purpleDark">{name}</span>
                        <p className="mt-2 px-4 text-lg text-textDark">
                            {excerpt}
                        </p>
                    </div>
                    <div className="mb-4 flex flex-wrap justify-center gap-1">
                        <div className="flex w-full justify-center gap-2 px-12 pb-2">
                            <Link url={gitHubUrl} icon="github" name="code" />
                            <Link
                                url={liveSiteUrl}
                                icon="open-outline"
                                name="live site"
                            />
                        </div>
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className={`inline-flex items-center rounded px-2.5 py-0.5 text-xs
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
    )
}

;<style></style>
