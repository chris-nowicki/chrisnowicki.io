import ProjectArchive from './ProjectArchive'
import FeaturedProjects from './FeaturedProjects/FeaturedProjects'
import { getProjects } from '../../../sanity/sanity-queries'

// types
import type { Metadata } from 'next'
import { Projects } from '../../../types/projects'

// meta data
export const metadata: Metadata = {
  title: 'Projects',
  description: 'Checkout some of my favorite projects that I have worked on',
}

// revalidate every 60 seconds
export const revalidate = 60

export default async function Projects() {
  const projects: Projects = await getProjects()

  return (
    <div className="mb-16 flex w-full flex-col items-center px-10 md:items-start md:px-0">
      <FeaturedProjects projects={projects.featuredProjects} />
      <ProjectArchive projects={projects.projects} />
    </div>
  )
}
