import SectionHeading from '@/components/SectionHeading'
import { getFeaturedProjects } from '@/sanity/sanity-queries'
import Carousel from './Carousel/Carousel'

export default async function FeaturedProjects() {
  const projects = await getFeaturedProjects()

  return (
    <section
      id="projects"
      className="lex flex w-full max-w-3xl scroll-mt-8 flex-col items-center gap-6"
    >
      <SectionHeading>Projects</SectionHeading>
      <Carousel projects={projects} />
    </section>
  )
}
