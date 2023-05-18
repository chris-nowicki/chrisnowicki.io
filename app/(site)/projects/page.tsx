import ProjectArchive from './ProjectArchive'
import FeaturedProjects from './FeaturedProjects/FeaturedProjects'
import ogImageURL from '../../../lib/og-image-url'
import { getProjects } from '../../../sanity/sanity-queries'

// types
import type { Metadata } from 'next'
import { OGImageType } from '../../../types'
import { ProjectsType } from '../../../types/projects'

// metadata
const title: string = 'Projects'
const description: string = `Checkout some of my favorite projects that I've worked on.`
const ogImage: OGImageType = ogImageURL(description)

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: 'https://chrisnowicki.io/projects',
    images: [ogImage],
  },
  twitter: {
    title: title,
    card: 'summary_large_image',
  },
}

// revalidate every 60 seconds
export const revalidate = 60

export default async function Projects() {
  const projects: ProjectsType = await getProjects()

  return (
    <div className="mb-16 flex w-full flex-col items-center px-10 md:items-start md:px-0">
      <FeaturedProjects projects={projects.featuredProjects} />
      <ProjectArchive projects={projects.projects} />
    </div>
  )
}
