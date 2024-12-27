import { FC, JSX } from 'react'

import generateOgImageUrl from '@/utils/generateOgImage'

import Community from '@/components/Engagements/Community'
import Conferences from '@/components/Engagements/Conferences'
import OSS from '@/components/Engagements/OSS'
import Speaking from '@/components/Engagements/Speaking'
import SectionHeading from '@/components/SectionHeading'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Metadata } from 'next'
import TechnicalWriting from './TechnicalWriting'

// metadata
const TITLE: string = `Chris Nowicki's Community Involvement`
const DESCRIPTION: string = `OSS, Technical Writing, Conferences, and Speaking Contributions`
const ogImageUrl = generateOgImageUrl({
  header: '/COMMUNITY',
  description: DESCRIPTION,
})

const ogSearchParams = new URLSearchParams({
  page: 'COMMUNITY',
  description: DESCRIPTION,
})

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://chrisnowicki.io/community',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [ogImageUrl],
  },
}
const Blog: FC = (): JSX.Element => {
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

export default Blog
