import FeaturedProjects from 'app/projects/FeaturedProjects/FeaturedProjects'
import { getProjects } from 'lib/sanity'
import Link from 'next/link'

import { GitBranchOutline, OpenOutline } from 'components/Icons'

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Checkout some of my favorite projects that I have worked on',
}

export default async function Projects() {
    const projectData = getProjects()

    const [projects] = await Promise.all([projectData])

    return (
        <div className="flex w-full flex-col items-center px-10 md:items-start md:px-0">
            <div>
                <div className="flex w-full flex-col items-center">
                    <FeaturedProjects projects={projects.featuredProjects} />
                </div>
            </div>
            <span className="text-center text-2xl uppercase text-purple-light dark:text-purple-dark md:text-left md:text-3xl">
                Project Archive
            </span>
            <div className="mt-4 mb-8 flex w-full flex-col md:mb-0">
                <table className="w-full">
                    <thead className="dark:border-foreground/25 border-b border-neutral-200">
                        <tr className="text-md dark:text-foreground w-full uppercase text-gray-900">
                            <th className="pr-2 text-left">year</th>
                            <th className="pr-2 text-left">title</th>
                            <th className="text-left">tech stack</th>
                            <th className="pr-2 sm:text-center md:text-right">
                                links
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.projects.map((project: any) => (
                            <tr
                                key={project.projectName}
                                className="dark:border-foreground/25 dark:text-foreground dark:hover:bg-foreground/25 border-b border-neutral-200 align-top text-sm text-gray-900  hover:bg-gray-900/25"
                            >
                                <td className="dark:text-purple-dark pr-2 pt-2 text-purple-light">
                                    {new Date(
                                        project.dateCreated
                                    ).getFullYear()}
                                </td>
                                <td className="overflow-hidden pr-2 pt-2">
                                    {project.projectName}
                                </td>
                                <td className="mb-2 flex flex-wrap gap-1 pt-2">
                                    {project.tags.map(
                                        (tag: any, index: number) => (
                                            <span
                                                key={tag.name}
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
                                        )
                                    )}
                                </td>
                                <td className="pr-2 pt-2">
                                    <div className="flex w-full items-center justify-end">
                                        <Link
                                            href={project.gitHubURL}
                                            target="_blank"
                                            className="dark:hover:text-purple-dark cursor-pointer hover:text-purple-light dark:text-foreground"
                                            prefetch={true}
                                        >
                                            <GitBranchOutline size={24} />
                                        </Link>
                                        {project.liveSiteURL && (
                                            <Link
                                                href={project.liveSiteURL}
                                                target="_blank"
                                                className="dark:hover:text-purple-dark cursor-pointer hover:text-purple-light dark:text-foreground" 
                                                prefetch={false}
                                            >
                                                <OpenOutline size={24} />
                                            </Link>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
