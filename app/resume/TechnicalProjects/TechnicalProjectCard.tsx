import clsx from 'clsx'

// icons
import { GitBranchOutline, OpenOutline } from 'components/Icons'

export default function TechnicalProjectCard({ project }) {
    return (
        <div className="text-md flex flex-col rounded border border-neutral-200 dark:border-background-dark md:text-lg">
            <div className="flex flex-wrap border-b border-neutral-200 bg-neutral-100 p-4 dark:border-background-dark dark:bg-background-dark/25 md:flex-nowrap">
                <div className="flex w-full flex-col items-center md:items-start">
                    <div className="flex flex-col">
                        <p className="mb-1 flex gap-1 text-center md:text-left">
                            <b>{project.projectName}</b>
                            <span> |</span> <em>{project.role}</em>
                        </p>
                    </div>
                    <div className="flex gap-1 md:mt-1">
                        {project.tags.map((tag: string, index: number) => (
                            <span
                                key={index}
                                className={clsx(
                                    'inline-flex items-center rounded px-2.5 py-0.5 text-xs',

                                    index == 0
                                        ? 'bg-purple-100  text-purple-800'
                                        : index == 1
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-blue-100 text-blue-800'
                                )}
                            >
                                {tag['name']}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="text-md mt-2 flex w-full items-center justify-center gap-2 md:mt-0 md:justify-end">
                    <a
                        href={project.gitHubURL}
                        target="_blank"
                        className="text-md flex items-center gap-1 rounded border p-2 hover:text-purple-light dark:border-background-dark dark:hover:text-purple-dark md:border-0 md:p-0"
                    >
                        <GitBranchOutline size={24} />
                        <span className="block md:hidden">Code</span>
                    </a>
                    {project.liveSiteURL && (
                        <a
                            href={project.liveSiteURL}
                            target="_blank"
                            className="text-md flex items-center gap-1 rounded border p-2 hover:text-purple-light dark:border-background-dark dark:hover:text-purple-dark md:border-0 md:p-0"
                        >
                            <>
                                <OpenOutline size={24} />
                                <span className="block md:hidden">
                                    Live Site
                                </span>
                            </>
                        </a>
                    )}
                </div>
            </div>
            <div className="p-4">
                {project.projectDetails.map(
                    (project: any, index: number) =>
                        index == 0 && (
                            <p key={index} className="italic">
                                {project}
                            </p>
                        )
                )}
                <ul className="text-md ml-6 list-outside list-disc marker:text-purple-light dark:marker:text-purple-dark md:text-lg">
                    {project.projectDetails.map(
                        (project: any, index: number) =>
                            index !== 0 && <li key={index}>{project}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}
