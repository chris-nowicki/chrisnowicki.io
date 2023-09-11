'use client'
import ContentCarousel from './Carousel/ContentCarousel'
import { ProjectType } from '@/types'
import { useSectionInView } from '@/hooks/useSectionInView'
import SectionHeading from '@/components/SectionHeading'

export default function FeaturedProjects({
  projects,
}: {
  projects: ProjectType[]
}) {
  const { ref } = useSectionInView('Projects')
  return (
    <section
      ref={ref}
      id="projects"
      className="flex scroll-mt-20 md:scroll-mt-28 flex-col"
    >
      <SectionHeading >Projects</SectionHeading>
      <div className="flex w-full max-w-3xl flex-col items-center lg:items-start">
        <div className="flex w-full flex-col items-center gap-4  md:flex-row md:flex-wrap md:items-start ">
          <ContentCarousel contents={projects} />
        </div>
      </div>
    </section>
  )
}
