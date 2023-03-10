'use client'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

// components
import ProjectCard from 'app/projects/FeaturedProjects/ProjectCard'

// icons
import { CHEVRON_LEFT, CHEVRON_RIGHT } from '../../../components/Icons'

function ContentCarousel({ contents }) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [[page, direction], setPage] = useState([0, 0])

    const handlePrevClick = () => {
        setActiveIndex(
            activeIndex === 0 ? contents.length - 1 : activeIndex - 1
        )
    }

    const handleNextClick = () => {
        setActiveIndex(
            activeIndex === contents.length - 1 ? 0 : activeIndex + 1
        )
    }

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection])
    }

    return (
        <div className="relative rounded border border-borderColor-light p-4 shadow-lg dark:border-borderColor-dark">
            <div className="absolute top-[125px] -left-8 hidden items-center justify-center bg-background-light p-1 text-foreground shadow-xl hover:text-purple-dark dark:bg-background-dark md:flex">
                <button
                    onClick={() => {
                        paginate(-1)
                        handlePrevClick()
                    }}
                >
                    <CHEVRON_LEFT size={32} />
                </button>
            </div>
            <div className="absolute top-[125px] -right-8 hidden items-center justify-center bg-background-light p-1 text-foreground shadow-xl hover:text-purple-dark dark:bg-background-dark md:flex">
                <button
                    onClick={() => {
                        paginate(1)
                        handleNextClick()
                    }}
                >
                    <CHEVRON_RIGHT size={32} />
                </button>
            </div>

            <div className="flex overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <div key={page}>
                        {contents.map((project: any, index: number) => (
                            <ProjectCard
                                key={page}
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
                        handlePrevClick()
                    }}
                    className="flex w-1/2 justify-center bg-background-dark p-1 hover:text-purple-dark"
                >
                    <CHEVRON_LEFT size={32} />
                </button>
                <button
                    onClick={() => {
                        paginate(1)
                        handleNextClick()
                    }}
                    className="flex w-1/2 justify-center bg-background-dark p-1 hover:text-purple-dark"
                >
                    <CHEVRON_RIGHT size={32} />
                </button>
            </div>
        </div>
    )
}

export default ContentCarousel