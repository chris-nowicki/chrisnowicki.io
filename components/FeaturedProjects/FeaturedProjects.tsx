'use client'
import { useSectionInView } from '@/hooks/useSectionInView'
import ContentCarousel from './Carousel/ContentCarousel'
import SectionHeading from '@/components/SectionHeading'
import type { ProjectType } from '@/types/types'

export default function FeaturedProjects({
  projects,
}: {
  projects: ProjectType[]
}) {
  const { ref } = useSectionInView('Projects', 0.2)
  return (
    <section
      ref={ref}
      id="projects"
      className="flex scroll-mt-20 flex-col md:scroll-mt-28"
    >
      <SectionHeading>Projects</SectionHeading>
      <div className="flex w-full max-w-3xl flex-col items-center lg:items-start">
        <div className="flex w-full flex-col items-center gap-4  md:flex-row md:flex-wrap md:items-start ">
          <ContentCarousel contents={projects} />
        </div>
      </div>
    </section>
  )
}
