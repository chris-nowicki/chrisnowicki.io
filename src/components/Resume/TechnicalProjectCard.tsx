import { GitBranchOutline, OpenOutline } from '../icons'

export default function TechnicalProjectCard({ project }) {
    return (
        <div className="flex flex-col rounded border border-neutral-200 text-lg">
            <div className="flex justify-between border-b border-neutral-200 p-4">
                <div>
                    <p>
                        <b>{project.projectName}</b> | <em>{project.role}</em>
                    </p>
                </div>
                <div className="text-md flex items-center gap-2">
                    <a href={project.gitHubUrl} target="_blank">
                        <GitBranchOutline size={24} />
                    </a>
                    <a href={project.liveSiteUrl} target="_blank">
                        <OpenOutline size={24} />
                    </a>
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
