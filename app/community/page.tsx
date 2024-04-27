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
import { Metadata } from 'next'

// metadata
const title: string = `Chris Nowicki's Community Involvement`
const description: string = `OSS, Technical Writing, Conferences, and Speaking Contributions`

const ogSearchParams = new URLSearchParams()
ogSearchParams.set('page', 'COMMUNITY')
ogSearchParams.set('description', description)

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: 'https://chrisnowicki.io/community',
    images: [
      {
        url: `/api/og?${ogSearchParams.toString()}`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: [`/api/og?${ogSearchParams.toString()}`],
  },
}

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
