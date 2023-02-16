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
                                <div className="flex items-center justify-between">
                                    <p>
                                        <b>{school.school}</b> |{' '}
                                        <em>{school.degree}</em>
                                    </p>
                                    {school.displayDate && (
                                        <span className="text-purple-600 dark:text-purpleDark">
                                            {' '}
                                            {new Date(
                                                school.dateEarned
                                            ).getFullYear()}
                                        </span>
                                    )}
                                </div>
                                {school.details && (
                                    <ul className="ml-6 list-outside list-disc marker:text-purple-600 dark:marker:text-purpleDark">
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
