import SectionHeading from '@/components/SectionHeading'
import { getFeaturedProjects } from '@/sanity/sanity-queries'
import ProjectCard from './ProjectCard'

export default async function FeaturedProjects() {
  const projects = await getFeaturedProjects()

  return (
    <section
      id="projects"
      className="flex w-full max-w-3xl scroll-mt-20 flex-col items-center gap-6 md:scroll-mt-8"
    >
      <SectionHeading className="text-3xl md:text-4xl">Projects</SectionHeading>
      <div className="flex flex-wrap justify-center gap-4 md:justify-start">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </section>
  )
}
