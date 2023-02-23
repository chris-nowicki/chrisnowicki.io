import TechSkills from 'components/TechSkills/TechSkills'
import TechnicalProjects from 'components/Resume/TechnicalProjects'
import ProfessionalExperience from 'components/Resume/ProfessionalExperience'
import Education from 'components/Resume/Education'

// icons
import {
    Location,
    Linkedin,
    GitHub,
    ArrowIcon,
    Download,
    PDF,
} from 'components/Icons'

// sanity.io client & query
import { getImage, getTechData, getResume } from '../../lib/sanity'

export default async function Resume() {
    const pictureData = getImage()
    const techData = getTechData()
    const resumeData = getResume()

    const [chrisnowicki, tech, resume] = await Promise.all([
        pictureData,
        techData,
        resumeData,
    ])

    return (
        <div className="px-5 lg:px-0">
            {/* name and email */}
            <div className="mb-4 flex gap-4 rounded border border-neutral-200 p-2 text-center dark:border-gray-900 md:text-left">
                <div className="flex w-1/4">
                    <img src={chrisnowicki} width="200px" className="rounded" />
                </div>
                <div className="flex w-3/4 flex-col items-center justify-center">
                    <h1 className="text-2xl md:text-5xl">{resume.name}</h1>
                    <a
                        href="mailto:chris@chrisnowicki.io"
                        className="ml-1 text-lg text-purple-600 hover:underline dark:text-purpleDark md:text-2xl"
                    >
                        {resume.email}
                    </a>
                    <p className="text-md mt-1 flex items-center md:text-xl">
                        <Location size={24} />
                        {resume.location}
                    </p>
                </div>
            </div>

            {/* resume and social links */}
            <div className="mb-12 flex w-full flex-col items-center gap-4 md:flex-row">
                {/* resume link */}
                <a
                    href={`${resume.resumeURL}?dl=`}
                    className="flex w-full items-center justify-between rounded-md border border-neutral-200 p-4 hover:bg-neutral-100 dark:border-gray-900 hover:dark:bg-gray-900/25"
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
                    className="flex w-full items-center justify-between rounded-md border border-neutral-200 p-4 hover:bg-neutral-100 dark:border-gray-900 hover:dark:bg-gray-900/25"
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
                    className="flex w-full items-center justify-between rounded-md border border-neutral-200 p-4 hover:bg-neutral-100 dark:border-gray-900 hover:dark:bg-gray-900/20"
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
            <div>
                {/* Technical Skills */}
                <div className="-mb-8 flex w-full flex-col gap-4">
                    <div className="mb-1">
                        <h1 className="mb-2 text-center text-xl uppercase text-purple-600 dark:text-purpleDark md:text-left md:text-2xl">
                            Technical Skills
                        </h1>
                        <TechSkills tech={tech} />
                    </div>
                </div>

                <TechnicalProjects projects={resume.projects} />
                {/* Professional Experience  */}
                <ProfessionalExperience
                    experience={resume.professionalExperience[0]}
                />

                {/* Education */}
                <Education education={resume.education} />
            </div>
        </div>
    )
}
