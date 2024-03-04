import SectionHeading from './SectionHeading'
import Speaking from './Engagements/Speaking'

export default function Highlights() {
  return (
    <section id="speaking" className="flex flex-col gap-6">
      <SectionHeading className="text-2xl md:text-3xl">Speaking</SectionHeading>
      <Speaking />
    </section>
  )
}
