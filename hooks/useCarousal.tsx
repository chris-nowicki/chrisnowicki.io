'use client'
import { useState } from 'react'
import { CHEVRON_LEFT, CHEVRON_RIGHT } from '@/assets/Icons'
import type { ProjectType } from '@/types/types'
import clsx from 'clsx'

export default function useCarousal(contents: ProjectType[]) {
  const [activeIndex, setActiveIndex] = useState(0)

  const desktopButtonStyling =
    'absolute top-[112px] hidden items-center justify-center rounded-full bg-background-light p-1 text-foreground shadow-xl transition-all ease-in-out hover:scale-105 hover:text-purple-dark dark:bg-purple-dark dark:hover:text-black md:flex'
  const mobileButtonStyling =
    'flex w-1/2 justify-center rounded-lg bg-background-dark p-1 hover:text-purple-dark dark:bg-purple-dark'

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

  function LeftButton({ view = 'desktop' }: { view?: string }) {
    return view === 'mobile' ? (
      <button
        className={mobileButtonStyling}
        onClick={() => {
          handlePrevClick(1)
        }}
      >
        <CHEVRON_LEFT size={32} />
      </button>
    ) : (
      <button
        className={clsx('-left-12', desktopButtonStyling)}
        onClick={() => {
          handlePrevClick(1)
        }}
      >
        <CHEVRON_LEFT size={32} />
      </button>
    )
  }

  function RightButton({ view = 'desktop' }: { view?: string }) {
    return view === 'mobile' ? (
      <button
        onClick={() => {
          handleNextClick(1)
        }}
        className={mobileButtonStyling}
      >
        <CHEVRON_RIGHT size={32} />
      </button>
    ) : (
      <button
        className={clsx('-right-12', desktopButtonStyling)}
        onClick={() => {
          handleNextClick(1)
        }}
      >
        <CHEVRON_RIGHT size={32} />
      </button>
    )
  }

  const IndexBubbles = () => (
    <div className="flex w-full justify-center gap-2">
      {contents.map((_, index) => (
        <div
          key={index}
          className={clsx(
            'h-4 w-4 cursor-pointer rounded-full border-2 border-purple-light shadow-md dark:border-purple-dark',
            activeIndex === index
              ? 'bg-purple-light dark:bg-purple-dark'
              : 'hover:scale-105'
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
  )
  return {
    activeIndex,
    LeftButton,
    RightButton,
    IndexBubbles,
  }
}
