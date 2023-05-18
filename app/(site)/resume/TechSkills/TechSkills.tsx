'use client'
import { useState } from 'react'
import Button from './Button'

// types
import { TechDataType } from '../../../../types'

type Button = {
  name: string
  active: string
}

// button data
export const btn: Button[] = [
  { name: 'All', active: 'all' },
  { name: 'Languages', active: 'lang' },
  { name: 'Frameworks/Libraries', active: 'framelib' },
  { name: 'Databases', active: 'db' },
  { name: 'Cloud/Serverless', active: 'cloud' },
  { name: 'Operating Systems', active: 'os' },
  { name: 'Tools', active: 'tools' },
]

export default function TechSkills({ tech }: { tech: TechDataType[] }) {
  const [filteredTech, setFilteredTech] = useState<TechDataType[] | null>(tech)
  const [currentFilter, setCurrentFilter] = useState<string>('all')

  const handleFilter = (category: string) => {
    // set filtered category if not 'all'
    if (category !== 'all') {
      const filter = tech.filter((tech) => tech.category === `${category}`)
      setFilteredTech(filter)
      setCurrentFilter(category)
    } else {
      // set filtered and currentFilter to 'all'
      setFilteredTech(tech)
      setCurrentFilter('all')
    }
  }

  return (
    <div className="mb-8 flex w-full flex-col">
      <h1 className="mb-2 text-center text-xl uppercase text-purple-light dark:text-purple-dark md:text-left md:text-2xl">
        Technical Skills
      </h1>
      <div className="flex w-full items-center sm:flex-col md:flex-row md:items-start">
        <div className="mb-4 mr-0 flex w-full flex-row flex-wrap justify-center gap-2 md:mr-4 md:w-1/2 md:flex-col md:justify-start">
          {btn.map((btn: Button) => (
            <Button
              key={btn.name}
              name={btn.name}
              activeCheck={btn.active}
              handleClick={() => handleFilter(btn.active)}
              currentFilter={currentFilter}
            />
          ))}
        </div>
        <div className="flex w-full flex-col rounded bg-background-light shadow-lg shadow-background-light/50 dark:bg-background-dark dark:shadow-background-dark/50">
          <ul className="link-animate text-md flex h-[550px] w-full flex-col flex-wrap overflow-hidden px-4 py-4 text-foreground md:h-[450px] md:text-lg">
            {filteredTech.map(
              (tech: TechDataType) =>
                tech.show && (
                  <li key={tech.name} className="flex flex-wrap md:px-4">
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
