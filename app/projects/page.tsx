import ProjectArchive from './ProjectArchive'
import FeaturedProjects from 'app/projects/FeaturedProjects/FeaturedProjects'
import { getProjects } from 'lib/sanityQuery'

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Checkout some of my favorite projects that I have worked on',
}

export const revalidate = 60

export default async function Projects() {
    const projectData = getProjects()

    const [projects] = await Promise.all([projectData])

    return (
        <div className="mb-16 flex w-full flex-col items-center px-10 md:items-start md:px-0">
            <FeaturedProjects projects={projects.featuredProjects} />
            <ProjectArchive projects={projects.projects} />
        </div>
    )
}
