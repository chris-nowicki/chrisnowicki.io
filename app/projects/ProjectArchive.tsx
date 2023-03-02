import Link from 'next/link'

// icons
import { GitBranchOutline, OpenOutline } from 'components/Icons'

export default function ProjectArchive({ projects }) {
    return (
        <>
            <span className="text-center text-xl uppercase text-purple-light dark:text-purple-dark md:text-left md:text-3xl">
                Project Archive
            </span>
            <div className="mt-4 flex w-full flex-col md:mb-0">
                <table className="w-full">
                    <thead className="border-b border-neutral-200 dark:border-foreground/25">
                        <tr className="text-md w-full uppercase text-gray-900 dark:text-foreground">
                            <th className="pr-2 text-left">year</th>
                            <th className="pr-2 text-left">title</th>
                            <th className="hidden text-left md:block">
                                tech stack
                            </th>
                            <th className="pr-2 text-right">links</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project: any) => (
                            <tr
                                key={project.projectName}
                                className="border-b border-neutral-200 align-top text-sm text-gray-900 hover:bg-gray-900/25 dark:border-foreground/25 dark:text-foreground  dark:hover:bg-foreground/25"
                            >
                                <td className="pr-2 pt-2 text-purple-light dark:text-purple-dark">
                                    {new Date(
                                        project.dateCreated
                                    ).getFullYear()}
                                </td>
                                <td className="overflow-hidden pr-2 pt-2">
                                    {project.projectName}
                                </td>
                                <td className="mb-2 hidden flex-wrap gap-1 pt-2 md:flex">
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
                                            className="cursor-pointer hover:text-purple-light dark:text-foreground dark:hover:text-purple-dark"
                                            prefetch={false}
                                        >
                                            <GitBranchOutline size={24} />
                                        </Link>
                                        {project.liveSiteURL && (
                                            <Link
                                                href={project.liveSiteURL}
                                                target="_blank"
                                                className="cursor-pointer hover:text-purple-light dark:text-foreground dark:hover:text-purple-dark"
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
        </>
    )
}
