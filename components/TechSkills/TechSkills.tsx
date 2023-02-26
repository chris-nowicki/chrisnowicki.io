'use client'
import { useState } from 'react'

// Components
import Button from './Button'

// button data
import { btn } from './Names'

// types
import { Technologies } from '../../ts/types'

export default function TechSkills({ tech }) {
    const [filteredTech, setFilteredTech] = useState<Technologies[] | null>(
        tech
    )
    const [currentFilter, setCurrentFilter] = useState<string>('all')

    const handleFilter = (category: string) => {
        // set filtered category if not 'all'
        if (category !== 'all') {
            const filter = tech.filter(
                (tech) => tech.category === `${category}`
            )
            setFilteredTech(filter)
            setCurrentFilter(category)
        } else {
            // set filtered and currentFilter to 'all'
            setFilteredTech(tech)
            setCurrentFilter('all')
        }
    }

    return (
        <div className="mb-16 flex w-full flex-col items-center">
            <div className="flex w-full items-center sm:flex-col md:flex-row md:items-start">
                <div className="mr-0 mb-4 flex w-full flex-row flex-wrap justify-center gap-2 md:mr-4 md:w-1/2 md:flex-col md:justify-start">
                    {btn.map((btn) => (
                        <Button
                            key={btn.name}
                            name={btn.name}
                            activeCheck={btn.active}
                            handleClick={() => handleFilter(btn.active)}
                            currentFilter={currentFilter}
                        />
                    ))}
                </div>
                <div
                    className={`flex w-full flex-col rounded bg-background-light shadow-lg shadow-background-light/50 dark:bg-background-dark dark:shadow-background-dark/50`}
                >
                    <ul
                        className={`link-animate flex h-[450px] w-full flex-col flex-wrap py-4 text-sm text-foreground md:text-lg `}
                    >
                        {filteredTech.map(
                            (tech, index) =>
                                tech.show && (
                                    <li
                                        key={tech.name}
                                        className="flex flex-wrap px-4"
                                    >
                                        {tech.link ? (
                                            <a
                                                href={tech.link}
                                                target="_blank"
                                                className="text-foreground hover:text-purple-dark"
                                            >
                                                {tech.name}
                                            </a>
                                        ) : (
                                            tech.name
                                        )}
                                    </li>
                                )
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}
