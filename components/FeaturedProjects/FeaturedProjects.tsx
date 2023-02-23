// components
import ProjectCard from './ProjectCard'

export default function FeaturedProjects({ projects }) {
    return (
        <div className="mb-16 flex w-full flex-col items-center lg:items-center">
            <h1
                id="projects"
                className="mt-1 text-center text-2xl text-purple-600 dark:text-purpleDark md:text-4xl"
            >
                Featured Projects
            </h1>
            <p className="px-10 text-center text-lg md:mt-0 md:px-0">
                Take a look at some of my favorite projects that I've worked on
                below!
            </p>

            <div className="mt-6 flex w-full flex-col items-center gap-4 md:flex-row lg:items-start">
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
            <span className="mt-8 flex w-1/2 border-b-2 border-purple-600 border-opacity-50 dark:border-purpleDark dark:border-opacity-50"></span>
        </div>
    )
}
