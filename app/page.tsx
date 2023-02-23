import About from '../components/About'
import TechSkills from 'components/TechSkills/TechSkills'
import FeaturedProjects from 'components/FeaturedProjects/FeaturedProjects'
import Contact from 'components/Contact'

// sanity.io client & query
import { getImage, getTechData, getFeaturedProjects } from '../lib/sanity'

export default async function Home() {
    const imageData = getImage()
    const techData = getTechData()
    const projectData = getFeaturedProjects()

    const [chrisnowicki, tech, projects] = await Promise.all([
        imageData,
        techData,
        projectData,
    ])

    return (
        <div className="px-10 lg:px-0">
            <About image={chrisnowicki} />
            <div className="flex w-full flex-col items-center">
                <span className="mb-3 mt-16 w-full rounded bg-bgDark p-2 text-center text-2xl text-purpleDark dark:bg-gray-900 md:px-0 md:text-4xl">
                    Technical Skills
                </span>

                <TechSkills tech={tech} />
                {projects.showProjects && (
                    <FeaturedProjects projects={projects.projects} />
                )}
            </div>

            <Contact showProjects={projects.showProjects} />
        </div>
    )
}
