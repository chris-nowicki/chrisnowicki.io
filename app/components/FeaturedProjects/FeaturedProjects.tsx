// components
import ContentCarousel from './Carousel/ContentCarousel'

export default function FeaturedProjects({ projects }) {
  return (
    <div
      id="projects"
      className="mb-8 flex w-full max-w-3xl flex-col items-center lg:items-start"
    >
      <div className="flex w-full flex-col items-center gap-4  md:flex-row md:flex-wrap md:items-start ">
        <ContentCarousel contents={projects} />
      </div>
    </div>
  )
}
