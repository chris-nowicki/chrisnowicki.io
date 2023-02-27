import FeaturedProjects from 'components/FeaturedProjects/FeaturedProjects'
import { getFeaturedProjects } from 'lib/sanity'

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Checkout some of my favorite projects that I have worked on',
}

export default async function Projects() {
    const projectData = getFeaturedProjects()

    const [projects] = await Promise.all([projectData])

    return (
        <div className="w-full px-10 md:px-0">
            <div className="flex w-full flex-col items-center">
                <FeaturedProjects projects={projects.projects} />
            </div>
        </div>
    )
}
