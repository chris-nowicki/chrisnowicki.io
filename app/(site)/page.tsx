import Intro from '@/components/Intro/Intro'
import TechStack from '@/components/TechStack'
import SectionDivider from '@/components/SectionDivider'
import FeaturedProjects from '@/components/FeaturedProjects/FeaturedProjects'
import Skills from '@/components/Skills/Skills'

export default async function Home() {
  return (
    <div className="flex w-full flex-col items-center px-4 md:px-0">
      <Intro />
      <TechStack />
      <SectionDivider />
      <FeaturedProjects />
      <SectionDivider />
      <Skills />
    </div>
  )
}
