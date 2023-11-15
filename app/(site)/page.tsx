import Intro from '@/components/Intro/Intro'
import TechStack from '@/components/TechStack'
import SectionDivider from '@/components/SectionDivider'
import FeaturedProjects from '@/components/FeaturedProjects/FeaturedProjects'
import Skills from '@/components/Skills'
import Footer from '@/components/Footer/Footer'

// sanity cms queries
import { getResume, getSkills } from '@/sanity/sanity-queries'

export default async function Home() {
  const resumeData = getResume()
  const skillsData = getSkills()

  const [resume, skills] = await Promise.all([resumeData, skillsData])

  return (
    <div className="flex w-full flex-col items-center px-4 md:px-0">
      <Intro />
      <TechStack />
      <SectionDivider />
      <FeaturedProjects />
      <SectionDivider />
      <Skills data={skills} />
      <SectionDivider />
      <Footer resumeURL={resume} />
    </div>
  )
}
