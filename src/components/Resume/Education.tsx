import { useEffect, useState } from 'react'

import { client } from '../../lib/sanity'
import { education as query } from '../../ts/queries'

import { Education } from '../../ts/types'

export default function Education() {
    const [loaded, setLoaded] = useState<boolean>(false)
    const [education, setEducation] = useState<Education[] | null>(null)

    // fetch data from sanity
    useEffect(() => {
        client
            .fetch(query)
            .then((data) => {
                setEducation(data)
                setLoaded(true)
            })
            .catch(console.error)
    }, [])

    return (
        <>
            {loaded && (
                <div key={education[0].school} className="flex w-full flex-col">
                    {education.map((school) => (
                        <>
                            <div
                                key={school.school}
                                className="text-md mb-1 w-full border-b pb-2 md:text-lg"
                            >
                                <div className="flex flex-col justify-between md:flex-row">
                                    <div className='flex flex-col md:flex-row gap-0 md:gap-1'>
                                        <p className='flex gap-1'>
                                            <b>{school.school}</b> <span className='hidden md:block'>|</span>{' '}
                                        </p>
                                        <p>
                                            <em>{school.degree}</em>
                                        </p>
                                    </div>
                                    {school.displayDate && (
                                        <span className="text-purple-600 dark:text-purpleDark hidden md:block">
                                            {' '}
                                            {new Date(
                                                school.dateEarned
                                            ).getFullYear()}
                                        </span>
                                    )}
                                </div>
                                {school.details && (
                                    <ul className="ml-6 list-outside list-disc marker:text-purple-600 dark:marker:text-purpleDark mt-2 md:mt-0">
                                        {school.details.map((detail, index) => (
                                            <li key={index}>{detail}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </>
                    ))}
                </div>
            )}
        </>
    )
}
