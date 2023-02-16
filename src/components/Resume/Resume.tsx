import { useState, useEffect } from 'react'
import TechSkills from '../TechSkills/TechSkills'
import TechnicalProjectCard from './TechnicalProjectCard'
import ProfessionalExperience from './ProfessionalExperience'
import Education from './Education'

// sanity client & query
import { client } from '../../lib/sanity'
import { resume as query } from '../../ts/queries'

// types
import { Resume } from '../../ts/types'

import {
    Linkedin,
    GitHub,
    ArrowIcon,
    Download,
    PDF,
} from '../../components/icons'

export default function Resume() {
    const [loaded, setLoaded] = useState<boolean>(false)
    const [resume, setResume] = useState<Resume | null>(null)

    // fetch data from sanity
    useEffect(() => {
        client
            .fetch(query)
            .then((data) => {
                setResume(data[0])
                setLoaded(true)
            })
            .catch(console.error)
    }, [])

    return (
        <div className="mx-auto flex w-full max-w-3xl flex-col sm:px-10 md:px-0">
            {loaded && (
                <>
                    {/* name and email */}
                    <div className="mb-4 text-center text-xl md:text-left">
                        <h1 className="text-4xl">{resume.name}</h1>
                        <a
                            href="mailto:chris@chrisnowicki.io"
                            className="ml-1 text-purple-600 hover:underline dark:text-purpleDark"
                        >
                            {resume.email}
                        </a>
                    </div>

                    {/* resume and social links */}
                    <div className="mb-12 flex w-full flex-col items-center gap-4 md:flex-row">
                        {/* resume link */}
                        <a
                            href={`${resume.resumeURL}?dl=`}
                            className="flex w-3/4 items-center justify-between rounded-md border border-neutral-200 p-4 hover:bg-neutral-100 dark:border-neutral-900/50 hover:dark:bg-neutral-900/20 md:w-full"
                        >
                            <div className="flex items-center gap-2">
                                <PDF size={24} />
                                Download Resumé
                            </div>
                            <Download size={24} />
                        </a>

                        {/* linkedin link */}
                        <a
                            href={resume.linkedin}
                            className="flex w-3/4 items-center justify-between rounded-md border border-neutral-200 p-4 hover:bg-neutral-100 dark:border-neutral-900/50 hover:dark:bg-neutral-900/20 md:w-full"
                            target="_blank"
                        >
                            <div className="flex items-center gap-2">
                                <Linkedin size={24} />
                                Linkedin
                            </div>
                            <ArrowIcon size={12} />
                        </a>

                        {/* github Link */}
                        <a
                            href={resume.github}
                            className="flex w-3/4 items-center justify-between rounded-md border border-neutral-200 p-4 hover:bg-neutral-100 dark:border-neutral-900/50 hover:dark:bg-neutral-900/20 md:w-full"
                            target="_blank"
                        >
                            <div className="flex items-center gap-2">
                                <GitHub size={24} />
                                GitHub
                            </div>
                            <ArrowIcon size={12} />
                        </a>
                    </div>

                    {/* technical skills, projects, professional experience, and education */}
                    <div >
                        {/* Technical Skills */}
                        <div className="-mb-8 flex w-full flex-col gap-4">
                            <div className="mb-1">
                                <h1 className="mb-2 text-xl uppercase text-purple-600 dark:text-purpleDark md:text-2xl">
                                    Technical Skills
                                </h1>
                                <TechSkills />
                            </div>
                        </div>

                        {/* Technical Projects */}
                        <div className="mb-8 flex w-full flex-col gap-4">
                            <div className="mb-1">
                                <h1 id="technicalProjects" className="mb-2  text-xl uppercase text-purple-600 dark:text-purpleDark md:text-2xl">
                                    Technical Projects
                                </h1>
                                <div className="flex flex-col gap-2">
                                    {resume.projects.map((project, index) => (
                                        <TechnicalProjectCard
                                            key={index}
                                            project={project}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Professional Experience */}
                        <div className="mb-8 flex w-full flex-col gap-4">
                            <div className="mb-1">
                                <h1 className="mb-2  text-xl uppercase text-purple-600 dark:text-purpleDark md:text-2xl">
                                    Professional Experience
                                </h1>
                                <ProfessionalExperience />
                            </div>
                        </div>

                        {/* Education */}
                        <div className="flex w-full flex-col gap-4">
                            <div className="mb-1">
                                <h1 className="mb-2  text-xl uppercase text-purple-600 dark:text-purpleDark md:text-2xl">
                                    Education
                                </h1>
                                <Education />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
