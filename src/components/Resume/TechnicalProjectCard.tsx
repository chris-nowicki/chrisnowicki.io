import { GitBranchOutline, OpenOutline } from '../icons'

export default function TechnicalProjectCard({ project }) {
    return (
        <div className="text-md flex flex-col rounded border border-neutral-200 md:text-lg">
            <div className="flex flex-col items-center justify-center border-b border-neutral-200 p-4 md:flex-row md:justify-between">
                <div className="flex justify-center md:justify-start">
                    <p className="mb-2 flex gap-1 text-center md:mb-0 md:text-left">
                        <b>{project.projectName}</b> <span> | </span>{' '}
                        <em>{project.role}</em>
                    </p>
                </div>
                <div className="text-md flex  items-center gap-2">
                    <a
                        href={project.gitHubUrl}
                        target="_blank"
                        className="hover:text-purple-600 dark:hover:text-purpleDark"
                    >
                        <GitBranchOutline size={24} />
                    </a>
                    {project.liveSiteUrl && (
                        <a
                            href={project.liveSiteUrl}
                            target="_blank"
                            className="hover:text-purple-600 dark:hover:text-purpleDark"
                        >
                            <OpenOutline size={24} />
                        </a>
                    )}
                </div>
            </div>
            <div className="p-4">
                {project.projectDetails.map(
                    (project, index) =>
                        index == 0 && (
                            <p key={index} className="italic">
                                {project.text}
                            </p>
                        )
                )}
                <ul className="text-md ml-6 list-outside list-disc marker:text-purple-600 dark:marker:text-purpleDark md:text-lg">
                    {project.projectDetails.map(
                        (project, index) =>
                            index !== 0 && <li key={index}>{project.text}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}
