import Intro from '@/components/Intro/Intro'
import TechStack from '@/components/TechStack'
import SectionDivider from '@/components/SectionDivider'
import FeaturedProjects from '@/components/FeaturedProjects/FeaturedProjects'
import Skills from '@/components/Skills'
import Blog from '@/components/Blog/Blog'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'

// sanity cms queries
import {
  getIntro,
  getResume,
  getFeaturedProjects,
  getSkills,
} from '@/sanity/sanity-queries'

export default async function Home() {
  const introData = getIntro()
  const resumeData = getResume()
  const featuredProjectsData = getFeaturedProjects()
  const skillsData = getSkills()

  const [intro, resume, featuredProjects, skills] = await Promise.all([
    introData,
    resumeData,
    featuredProjectsData,
    skillsData,
  ])

  return (
    <div className="flex w-full flex-col items-center px-4 md:px-0">
      <Intro data={intro} resumeURL={resume} />
      <TechStack />
      <SectionDivider />
      <FeaturedProjects projects={featuredProjects} />
      <SectionDivider />
      <Skills data={skills} />
      <SectionDivider />
      <Blog />
      <SectionDivider />
      <Contact />
      <SectionDivider />
      <Footer resumeURL={resume} />
    </div>
  )
}
