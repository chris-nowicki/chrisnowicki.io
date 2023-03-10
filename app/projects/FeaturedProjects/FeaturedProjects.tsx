// components
import ContentCarousel from 'app/projects/FeaturedProjects/ContentCarousel'

export default function FeaturedProjects({ projects }) {
    return (
        <div
            id="projects"
            className="mb-8 flex md:w-full w-[340px] max-w-3xl flex-col items-center lg:items-start"
        >
            <h1 className="mt-1 text-xl uppercase text-purple-light dark:text-purple-dark md:text-3xl">
                Featured Projects
            </h1>
            <p className="text-center text-lg md:mt-0 md:px-0">
                Take a look at some of my favorite projects that I've worked on!
            </p>

            <div className="mt-4 w-full flex flex-col items-center gap-4  md:flex-row md:flex-wrap md:items-start ">
                <ContentCarousel contents={projects} />
            </div>
        </div>
    )
}
