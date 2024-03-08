import SectionDivider from '@/components/SectionDivider'
import FeaturedProjects from '@/components/FeaturedProjects/FeaturedProjects'
import Hero from '@/components/Hero/Hero'
import Speaking from '@/components/Highlights'

export const revalidate = 60

export default async function Home() {
  return (
    <div className="flex w-full flex-col items-center px-4 md:px-0">
      <Hero />
      <SectionDivider />
      <FeaturedProjects />
      <SectionDivider />
      <Speaking />
    </div>
  )
}
