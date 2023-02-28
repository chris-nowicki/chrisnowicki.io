// components
import ProjectCard from './ProjectCard'

export default function FeaturedProjects({ projects }) {
    return (
        <div
            id="projects"
            className="mb-8 flex flex-col items-center lg:items-start w-full max-w-3xl"
        >
            <h1 className="mt-1 text-2xl uppercase text-purple-light dark:text-purple-dark md:text-3xl">
                Featured Projects
            </h1>
            <p className="text-lg text-center md:mt-0 md:px-0">
                Take a look at some of my favorite projects that I've worked on!
            </p>

            <div className="px-10 md:px-0 mt-4 flex flex-col items-center md:items-start md:flex-row md:flex-wrap w-full gap-2">
                {projects.map((project, index: number) => (
                    <ProjectCard
                        key={index}
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
