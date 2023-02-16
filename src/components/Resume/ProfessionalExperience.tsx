import { useEffect, useState } from 'react'

import { client } from '../../lib/sanity'
import { professionalExperience as query } from '../../ts/queries'

import { Experience } from '../../ts/types'

export default function ProfessionalExperience() {
    const [loaded, setLoaded] = useState<boolean>(false)
    const [experience, setExperience] = useState<Experience | null>(null)

    // fetch data from sanity
    useEffect(() => {
        client
            .fetch(query)
            .then((data) => {
                setExperience(data[0])
                setLoaded(true)
            })
            .catch(console.error)
    }, [])
    return (
        <>
            {loaded && (
                <div className="flex flex-col">
                    <div className="flex w-full flex-col md:flex-row justify-between text-md md:text-lg mb-2">
                        <p className='text-center md:text-left'>
                            <b>{experience.position}</b> |
                            <a href={experience.companyURL} target="_blank">
                                <em> {experience.company}</em>
                            </a>
                        </p>
                        <div className="flex text-purple-600 dark:text-purpleDark justify-center md:justify-start">
                            {new Date(experience.startDate).getFullYear()} -{' '}
                            {experience.endDate
                                ? new Date(experience.endDate).getFullYear()
                                : 'Present'}
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <ul className="text-md ml-6 list-outside list-disc marker:text-purple-600 dark:marker:text-purpleDark md:text-lg">
                            {experience.accomplishments.map(
                                (accomplishment, index) =>
                                    index !== 0 && (
                                        <li key={index}>{accomplishment}</li>
                                    )
                            )}
                        </ul>
                    </div>
                </div>
            )}
        </>
    )
}
