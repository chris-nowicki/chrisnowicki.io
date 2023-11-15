'use client'
import ProjectCard from './ProjectCard'
import useCarousalClicks from '@/hooks/useCarousalClicks'

export default function ContentCarousel({ contents }) {
  const { activeIndex, LeftButton, RightButton, IndexBubbles } =
    useCarousalClicks(contents)

  return (
    <>
      <div className="relative flex w-full flex-col rounded-lg rounded-bl border-b border-l border-r border-borderColor-light shadow-lg dark:border-borderColor-dark dark:bg-gray-300/20">
        <div className="absolute -left-12 top-[112px] hidden items-center justify-center rounded-full bg-background-light p-1 text-foreground shadow-xl transition-all ease-in-out hover:scale-105 hover:text-purple-dark dark:bg-background-dark md:flex">
          {LeftButton('desktop')}
        </div>
        <div className="absolute -right-12 top-[112px] hidden items-center justify-center rounded-full bg-background-light p-1 text-foreground shadow-xl transition-all ease-in-out hover:scale-105 hover:text-purple-dark dark:bg-background-dark md:flex">
          {RightButton('desktop')}
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
        <div className="mt-2 flex items-center justify-evenly gap-2 text-foreground dark:bg-background-dark  md:hidden">
          {LeftButton('mobile')}
          {RightButton('mobile')}
        </div>
      </div>
      <IndexBubbles />
    </>
  )
}
