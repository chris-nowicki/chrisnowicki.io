import { FC } from 'react'

// local imports
import Contact from '@/components/Contact'
import FeaturedProjects from '@/components/FeaturedProjects/FeaturedProjects'
import Hero from '@/components/Hero'
import Speaking from '@/components/Highlights'
import SectionDivider from '@/components/SectionDivider'

export const revalidate = 60

const Home: FC = (): JSX.Element => {
  return (
    <div className="flex w-full flex-col items-center px-4 md:px-0">
      <Hero />
      <SectionDivider />
      <FeaturedProjects />
      <SectionDivider />
      <Speaking />
      <SectionDivider />
      <Contact />
    </div>
  )
}

export default Home
