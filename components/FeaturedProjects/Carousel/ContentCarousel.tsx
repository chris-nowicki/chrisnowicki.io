'use client'
import ProjectCard from './ProjectCard'
import clsx from 'clsx'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { CHEVRON_LEFT, CHEVRON_RIGHT } from '../../../assets/Icons'

export default function ContentCarousel({ contents }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [[page, direction], setPage] = useState([0, 0])

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

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <>
      <div className="relative dark:bg-gray-300/20 flex w-full flex-col rounded-bl rounded-lg border-b border-l border-r border-borderColor-light p-2 shadow-lg dark:border-borderColor-dark md:p-4">
        <div className="absolute -left-8 top-[125px] hidden items-center justify-center bg-background-light p-1 text-foreground shadow-xl hover:text-purple-dark dark:bg-background-dark md:flex">
          <button
            onClick={() => {
              paginate(-1)
              handlePrevClick(1)
            }}
          >
            <CHEVRON_LEFT size={32} />
          </button>
        </div>
        <div className="absolute -right-8 top-[125px] hidden items-center justify-center bg-background-light p-1 text-foreground shadow-xl hover:text-purple-dark dark:bg-background-dark md:flex">
          <button
            onClick={() => {
              paginate(1)
              handleNextClick(1)
            }}
          >
            <CHEVRON_RIGHT size={32} />
          </button>
        </div>

        <div className="flex w-full overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <div key={page}>
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
                  page={page}
                  direction={direction}
                />
              ))}
            </div>
          </AnimatePresence>
        </div>
        <div className="mt-2 flex items-center justify-evenly gap-2 text-foreground dark:bg-background-dark  md:hidden">
          <button
            onClick={() => {
              paginate(-1)
              handlePrevClick(1)
            }}
            className="flex w-1/2 justify-center bg-background-dark p-1 hover:text-purple-dark"
          >
            <CHEVRON_LEFT size={32} />
          </button>
          <button
            onClick={() => {
              paginate(1)
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
                paginate(-1)
                handlePrevClick(activeIndex - index)
              } else {
                paginate(1)
                handleNextClick(index - activeIndex)
              }
            }}
          />
        ))}
      </div>
    </>
  )
}
