import FeaturedProjects from 'components/FeaturedProjects/FeaturedProjects'
import { getFeaturedProjects } from 'lib/sanity'

export default async function Projects() {
    const projectData = getFeaturedProjects()

    const [projects] = await Promise.all([projectData])

    return (
        <div className="px-10 md:px-0 w-full">
            <div className="flex w-full flex-col items-center">
                <FeaturedProjects projects={projects.projects} />
            </div>
        </div>
    )
}
