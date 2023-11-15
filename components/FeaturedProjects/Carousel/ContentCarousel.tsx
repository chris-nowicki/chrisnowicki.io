'use client'
import { useState } from 'react'
import ProjectCard from './ProjectCard'
import { CHEVRON_LEFT, CHEVRON_RIGHT } from '@/assets/Icons'
import clsx from 'clsx'

export default function ContentCarousel({ contents }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrevClick = (incrementBy: number) => {
    setActiveIndex(
      activeIndex === 0
        ? contents.length - incrementBy
        : activeIndex - incrementBy
    )
  }

  const handleNextClick = (incrementBy: number) => {
    setActiveIndex(
      activeIndex === contents.length - incrementBy
        ? 0
        : activeIndex + incrementBy
    )
  }
  return (
    <>
      <div className="relative flex w-full flex-col rounded-lg rounded-bl border-b border-l border-r border-borderColor-light shadow-lg dark:border-borderColor-dark dark:bg-gray-300/20">
        <div className="absolute -left-12 top-[112px] hidden items-center justify-center rounded-full bg-background-light p-1 text-foreground shadow-xl hover:text-purple-dark dark:bg-background-dark md:flex">
          <button
            onClick={() => {
              handlePrevClick(1)
            }}
          >
            <CHEVRON_LEFT size={32} />
          </button>
        </div>
        <div className="absolute -right-12 top-[112px] hidden items-center justify-center rounded-full bg-background-light p-1 text-foreground shadow-xl hover:text-purple-dark dark:bg-background-dark md:flex">
          <button
            onClick={() => {
              handleNextClick(1)
            }}
          >
            <CHEVRON_RIGHT size={32} />
          </button>
        </div>

        <div className="flex w-full overflow-hidden">
          <div>
            {contents.map((project: any, index: number) => (
              <ProjectCard
                key={index + project.name}
                name={project.name}
                excerpt={project.excerpt}
                image={project.image}
                tags={project.tags}
                gitHubUrl={project.gitHubUrl}
                liveSiteUrl={project.liveSiteUrl}
                isSelected={activeIndex === index}
              />
            ))}
          </div>
        </div>
        <div className="mt-2 flex items-center justify-evenly gap-2 text-foreground dark:bg-background-dark  md:hidden">
          <button
            onClick={() => {
              handlePrevClick(1)
            }}
            className="flex w-1/2 justify-center bg-background-dark p-1 hover:text-purple-dark"
          >
            <CHEVRON_LEFT size={32} />
          </button>
          <button
            onClick={() => {
              handleNextClick(1)
            }}
            className="flex w-1/2 justify-center bg-background-dark p-1 hover:text-purple-dark"
          >
            <CHEVRON_RIGHT size={32} />
          </button>
        </div>
      </div>

      {/* index bubbles */}
      <div className="flex w-full justify-center gap-2">
        {contents.map((_, index) => (
          <div
            key={index}
            className={clsx(
              'h-4 w-4 cursor-pointer rounded-full border-2 border-purple-light shadow-md dark:border-purple-dark',
              activeIndex === index && 'bg-purple-light dark:bg-purple-dark'
            )}
            onClick={() => {
              if (activeIndex === index) {
                setActiveIndex(index)
              } else if (index < activeIndex) {
                handlePrevClick(activeIndex - index)
              } else {
                handleNextClick(index - activeIndex)
              }
            }}
          />
        ))}
      </div>
    </>
  )
}
