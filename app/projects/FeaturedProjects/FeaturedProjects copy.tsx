// components
import ProjectCard from './ProjectCard'

export default function FeaturedProjects({ projects }) {
    return (
        <div
            id="projects"
            className="mb-8 flex w-full max-w-3xl flex-col items-center lg:items-start"
        >
            <h1 className="mt-1 text-2xl uppercase text-purple-light dark:text-purple-dark md:text-3xl">
                Featured Projects
            </h1>
            <p className="text-center text-lg md:mt-0 md:px-0">
                Take a look at some of my favorite projects that I've worked on!
            </p>

            <div className="mt-4 flex w-full flex-col items-center gap-4 px-10 md:flex-row md:flex-wrap md:items-start md:px-0">
                {projects.map((project: any) => (
                    <ProjectCard
                        key={project.name}
                        name={project.name}
                        excerpt={project.excerpt}
                        image={project.image}
                        tags={project.tags}
                        gitHubUrl={project.gitHubUrl}
                        liveSiteUrl={project.liveSiteUrl}
                    />
                ))}
            </div>
        </div>
    )
}
