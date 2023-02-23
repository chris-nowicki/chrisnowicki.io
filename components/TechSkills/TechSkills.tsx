'use client'

import { useEffect, useState } from 'react'

// sanity client and query
import { fetchSanity, tech as query } from '../../lib/sanity'

// Components
import Button from './Button'

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
                    <Button
                        name="All"
                        activeCheck="all"
                        handleClick={() => handleFilter('all')}
                        currentFilter={currentFilter}
                    />
                    <Button
                        name="Languages"
                        activeCheck="lang"
                        handleClick={() => handleFilter('lang')}
                        currentFilter={currentFilter}
                    />
                    <Button
                        name="Frameworks/Libraries"
                        activeCheck="framelib"
                        handleClick={() => handleFilter('framelib')}
                        currentFilter={currentFilter}
                    />
                    <Button
                        name="Databases"
                        activeCheck="db"
                        handleClick={() => handleFilter('db')}
                        currentFilter={currentFilter}
                    />
                    <Button
                        name="Cloud/Serverless"
                        activeCheck="cloud"
                        handleClick={() => handleFilter('cloud')}
                        currentFilter={currentFilter}
                    />
                    <Button
                        name="Operating Systems"
                        activeCheck="os"
                        handleClick={() => handleFilter('os')}
                        currentFilter={currentFilter}
                    />
                    <Button
                        name="Tools"
                        activeCheck="tools"
                        handleClick={() => handleFilter('tools')}
                        currentFilter={currentFilter}
                    />
                </div>
                <div
                    className={`flex w-full flex-col rounded bg-bgDark shadow-lg shadow-bgDark/50 dark:bg-gray-900 dark:shadow-gray-900/50`}
                >
                    <ul
                        className={`link-animate flex h-[450px] w-full flex-col flex-wrap py-4 text-sm text-textDark md:text-lg `}
                    >
                        {filteredTech.map(
                            (tech, index) =>
                                tech.show && (
                                    <li
                                        key={index}
                                        className="flex flex-wrap px-4"
                                    >
                                        {tech.link ? (
                                            <a
                                                href={tech.link}
                                                target="_blank"
                                                className="text-textDark hover:text-purpleDark"
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
