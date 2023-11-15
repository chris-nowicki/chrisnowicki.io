'use client'
import { useState } from 'react'
import { CHEVRON_LEFT, CHEVRON_RIGHT } from '@/assets/Icons'
import clsx from 'clsx'

export default function useCarousalClicks(contents) {
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

  const LeftButton = (view: string) =>
    view === 'mobile' ? (
      <button
        onClick={() => {
          handlePrevClick(1)
        }}
        className="flex w-1/2 justify-center bg-background-dark p-1 hover:text-purple-dark rounded-lg"
      >
        <CHEVRON_LEFT size={32} />
      </button>
    ) : (
      <button
        onClick={() => {
          handlePrevClick(1)
        }}
      >
        <CHEVRON_LEFT size={32} />
      </button>
    )

  const RightButton = (view: string) =>
    view === 'mobile' ? (
      <button
        onClick={() => {
          handleNextClick(1)
        }}
        className="flex w-1/2 justify-center bg-background-dark p-1 hover:text-purple-dark rounded-lg"
      >
        <CHEVRON_RIGHT size={32} />
      </button>
    ) : (
      <button
        onClick={() => {
          handleNextClick(1)
        }}
      >
        <CHEVRON_RIGHT size={32} />
      </button>
    )

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
