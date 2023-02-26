import FeaturedProjects from 'components/FeaturedProjects/FeaturedProjects'
import { getFeaturedProjects } from 'lib/sanity'

export default async function Projects() {
    const projectData = getFeaturedProjects()

    const [projects] = await Promise.all([projectData])

    return (
        <div className='px-2'>
            <FeaturedProjects projects={projects.projects} />
        </div>
    )
}
