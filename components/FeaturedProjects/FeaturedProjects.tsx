// components
import ContentCarousel from './Carousel/ContentCarousel'

import { ProjectType } from '@/types'

export default function FeaturedProjects({
  projects,
}: {
  projects: ProjectType[]
}) {
  return (
    <section id="projects" className="mx-5 flex scroll-mt-28 flex-col md:mx-0">
      <h1 className="w-full  py-1 text-center text-4xl uppercase dark:text-purple-dark">
        My Projects
      </h1>
      <div className="flex w-full max-w-3xl flex-col items-center lg:items-start">
        <div className="flex w-full flex-col items-center gap-4  md:flex-row md:flex-wrap md:items-start ">
          <ContentCarousel contents={projects} />
        </div>
      </div>
    </section>
  )
}
