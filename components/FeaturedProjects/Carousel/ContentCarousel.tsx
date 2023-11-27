'use client'
import ProjectCard from './ProjectCard'
import useCarousalClicks from '@/hooks/useCarousalClicks'
import type { ProjectType } from '@/types/types'

export default function ContentCarousel({
  projects,
}: {
  projects: ProjectType[]
}) {
  const { activeIndex, LeftButton, RightButton, IndexBubbles } =
    useCarousalClicks(projects)

  return (
    <div className="flex w-full flex-col items-center gap-4 md:flex-row md:flex-wrap md:items-start ">
      <div className="relative shadow-xl">
        {/* desktop buttons */}
        <LeftButton />
        <RightButton />

        {/* project */}
        {projects.map((project: ProjectType, index: number) => (
          <ProjectCard
            key={index + project.name}
            project={project}
            isSelected={activeIndex === index}
          />
        ))}

        {/* mobile buttons */}
        <div className="mt-2 flex items-center justify-evenly gap-2 text-foreground dark:bg-background-dark md:hidden">
          <LeftButton view="mobile" />
          <RightButton view="mobile" />
        </div>
      </div>
      <IndexBubbles />
    </div>
  )
}
