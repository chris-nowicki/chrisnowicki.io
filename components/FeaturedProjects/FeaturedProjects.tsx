import ContentCarousel from './Carousel/ContentCarousel'
import SectionHeading from '@/components/SectionHeading'
import { getFeaturedProjects } from '@/sanity/sanity-queries'

export default async function FeaturedProjects() {
  const projects = await getFeaturedProjects()

  return (
    <section className="flex w-full max-w-3xl flex-col">
      <SectionHeading>Projects</SectionHeading>
      <ContentCarousel projects={projects} />
    </section>
  )
}
