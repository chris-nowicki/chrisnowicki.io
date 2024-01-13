'use client'
import { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import type { ProjectType } from '@/types/types'
import ProjectCard from './ProjectCard'

export default function ProjectCarousel({
  projects,
}: {
  projects: ProjectType[]
}) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <>
      <Carousel setApi={setApi} className="w-full max-w-3xl">
        <CarouselContent>
          {projects.map((project: ProjectType, index: number) => (
            <CarouselItem key={index}>
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="text-md -mt-2 flex items-center justify-center gap-1 text-muted-foreground dark:text-accent-foreground">
        <span className="font-semibold text-primary">{current}</span> of
        <span className="font-semibold text-primary">{count}</span>
      </div>
    </>
  )
}
