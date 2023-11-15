import ContentCarousel from './Carousel/ContentCarousel'
import SectionHeading from '@/components/SectionHeading'
import { getFeaturedProjects } from '@/sanity/sanity-queries'

export default async function FeaturedProjects() {
  const projects = await getFeaturedProjects()

  return (
    <section className="flex scroll-mt-20 flex-col md:scroll-mt-16">
      <SectionHeading>Projects</SectionHeading>
      <div className="flex w-full max-w-3xl flex-col items-center lg:items-start">
        <div className="flex w-full flex-col items-center gap-4  md:flex-row md:flex-wrap md:items-start ">
          <ContentCarousel contents={projects} />
        </div>
      </div>
    </section>
  )
}
