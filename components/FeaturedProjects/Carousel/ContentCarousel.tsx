'use client'
import ProjectCard from './ProjectCard'
import useCarousalClicks from '@/hooks/useCarousalClicks'

export default function ContentCarousel({ contents }) {
  const { activeIndex, LeftButton, RightButton, IndexBubbles } =
    useCarousalClicks(contents)

  return (
    <>
      <div className="relative flex w-full flex-col shadow-xl">
        <div className="absolute -left-12 top-[112px] hidden items-center justify-center rounded-full bg-background-light p-1 text-foreground shadow-xl transition-all ease-in-out hover:scale-105 hover:text-purple-dark dark:bg-purple-dark dark:hover:text-black md:flex">
          <LeftButton />
        </div>
        <div className="absolute -right-12 top-[112px] hidden items-center justify-center rounded-full bg-background-light p-1 text-foreground shadow-xl transition-all ease-in-out hover:scale-105 hover:text-purple-dark  dark:bg-purple-dark dark:hover:text-black md:flex">
          <RightButton />
        </div>

        <div className="flex w-full overflow-hidden">
          <div>
            {contents.map((project: any, index: number) => (
              <ProjectCard
                key={index + project.name}
                project={project}
                isSelected={activeIndex === index}
              />
            ))}
          </div>
        </div>
        <div className="mt-2 flex items-center justify-evenly gap-2 text-foreground dark:bg-background-dark md:hidden">
          <LeftButton view="mobile" />
          <RightButton view="mobile" />
        </div>
      </div>
      <IndexBubbles />
    </>
  )
}
