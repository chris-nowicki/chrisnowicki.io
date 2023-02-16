import { useEffect, useState } from 'react'

// sanity client and query
import { client } from '../../lib/sanity'
import { tech as query } from '../../ts/queries'

// Types
import { Technologies } from '../../ts/types'

// Components
import Button from './Button'

export default function TechSkills() {
    const [loaded, setLoaded] = useState<boolean | null>(false)
    const [tech, setTech] = useState<Technologies[] | null>()
    const [filtered, setFiltered] = useState<Technologies[] | null>()
    const [currentFilter, setCurrentFilter] = useState<string | null>('all')

    // fetch data from sanity
    useEffect(() => {
        client
            .fetch(query)
            .then((data) => {
                // sort the data from a - z by tech name
                data.sort((a: any, b: any) => {
                    if (a.name.toLowerCase() < b.name.toLowerCase()) {
                        return -1
                    }
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return 1
                    }
                    return 0
                })

                // set state for tech and filtered to data and set loaded to true
                setTech(data)
                setFiltered(data)
                setLoaded(true)
            })
            .catch(console.error)
    }, [])

    const handleFilter = (category: string) => {
        // set filtered category if not 'all'
        if (category !== 'all') {
            const filteredTech: Technologies[] = [...tech]
            const filter = filteredTech.filter(
                (tech) => tech.category === `${category}`
            )
            setFiltered(filter)
            setCurrentFilter(category)
        } else {
            // set filtered and currentFilter to 'all'
            setFiltered(tech)
            setCurrentFilter('all')
        }
    }

    return (
        <div className="mb-16 flex w-full flex-col items-center">
            <div className="flex w-full items-center sm:flex-col md:flex-row md:items-start">
                <div className="mr-4 mb-4 flex w-full md:w-1/2 flex-row flex-wrap justify-center gap-2 md:flex-col md:justify-start">
                    <Button
                        name="All"
                        activeCheck="all"
                        handleClick={() => handleFilter('all')}
                        data={currentFilter}
                    />
                    <Button
                        name="Languages"
                        activeCheck="lang"
                        handleClick={() => handleFilter('lang')}
                        data={currentFilter}
                    />
                    <Button
                        name="Frameworks/Libraries"
                        activeCheck="framelib"
                        handleClick={() => handleFilter('framelib')}
                        data={currentFilter}
                    />
                    <Button
                        name="Databases"
                        activeCheck="db"
                        handleClick={() => handleFilter('db')}
                        data={currentFilter}
                    />
                    <Button
                        name="Cloud/Serverless"
                        activeCheck="cloud"
                        handleClick={() => handleFilter('cloud')}
                        data={currentFilter}
                    />
                    <Button
                        name="Operating Systems"
                        activeCheck="os"
                        handleClick={() => handleFilter('os')}
                        data={currentFilter}
                    />
                    <Button
                        name="Tools"
                        activeCheck="tools"
                        handleClick={() => handleFilter('tools')}
                        data={currentFilter}
                    />
                </div>
                <div className="flex w-full flex-col rounded bg-bgDark shadow-lg shadow-bgDark/50 dark:bg-gray-900 dark:shadow-gray-900/50">
                    <ul className="link-animate flex h-[450px] w-full flex-col flex-wrap py-4 text-sm text-textDark md:text-lg">
                        {loaded &&
                            filtered.map(
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
