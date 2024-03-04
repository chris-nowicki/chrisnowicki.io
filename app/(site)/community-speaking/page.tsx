import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import SectionHeading from '@/components/SectionHeading'
import Community from '@/components/Engagements/Community'
import TechnicalWriting from './TechnicalWriting'
import OSS from '@/components/Engagements/OSS'
import Conferences from '@/components/Engagements/Conferences'
import Speaking from '@/components/Engagements/Speaking'

export default async function Blog() {
  return (
    <section className="flex w-full flex-col gap-4 px-4 md:px-0">
      <SectionHeading className="-mb-6 text-left text-2xl md:text-4xl">
        Community & Speaking
      </SectionHeading>
      <p>
        I'm passionate about being involved in the coding community and sharing
        my passion for Web Development, ADHD / Neurodivervisity, and All Things
        Tech. This community is such a wonderful group of developers who support
        and uplift one another.
      </p>

      <Accordion type="single" collapsible className="w-full">
        <Community />
        <TechnicalWriting />
        <OSS />
        <Conferences />

        {/* speaking */}
        <AccordionItem value="Speaking">
          <AccordionTrigger className="text-xl font-bold md:text-2xl">
            Speaking
          </AccordionTrigger>
          <AccordionContent>
            <Speaking />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
