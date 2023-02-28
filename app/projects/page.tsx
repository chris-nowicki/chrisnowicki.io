import FeaturedProjects from 'components/FeaturedProjects/FeaturedProjects'
import { getProjects } from 'lib/sanity'

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
        <div>
            <div className="w-full px-10 md:px-0">
                <div className="flex w-full flex-col items-center">
                    <FeaturedProjects projects={projects.featuredProjects} />
                </div>
            </div>
            <div className="flex flex-col">
                <table className="w-full">
                    <thead className="dark:border-textDark/25 border-b border-gray-900/25">
                        <tr className="text-md dark:text-textDark w-full uppercase text-gray-900">
                            <th className="px-2 text-left">year</th>
                            <th className="px-2 text-left">title</th>
                            <th className="text-left">tech stack</th>
                            <th className="px-2 sm:text-center md:text-right">
                                links
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.projects.map((project: any) => (
                            <tr className="dark:border-textDark/25 dark:text-textDark dark:hover:bg-textDark/25 border-b border-gray-900/25 align-top text-sm text-gray-900 hover:bg-purple-400 hover:bg-gray-900/25">
                                <td className="dark:text-purpleDark px-2 pt-2 text-purple-600">
                                    {new Date(
                                        project.dateCreated
                                    ).getFullYear()}
                                </td>
                                <td className="overflow-hidden px-2 pt-2">
                                    {project.projectName}
                                </td>
                                <td className="mb-2 flex flex-wrap gap-1 pt-2">
                                    {project.tags.map((tag, index) => (
                                        <span
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
                                </td>
                                <td className="px-2 pt-2">
                                    <div className="flex w-full items-center justify-end">
                                        <a
                                            href={project.gitHubUrl}
                                            target="_blank"
                                            className="dark:hover:text-purpleDark hover:text-purple-600"
                                        >
                                            <GitBranchOutline size={24} />
                                        </a>
                                        {project.liveSiteUrl && (
                                            <a
                                                href={project.liveSiteUrl}
                                                target="_blank"
                                                className="dark:hover:text-purpleDark hover:text-purple-600"
                                            >
                                                <OpenOutline size={24} />
                                            </a>
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
