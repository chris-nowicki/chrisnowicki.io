import React from 'react'
import SectionHeading from '@/components/SectionHeading'
import { Accordion } from '@/components/ui/accordion'
import Community from './Community'
import Conferences from './Conferences'
import Speaking from './Speaking'

export default function Engagements() {
  return (
    <section
      id="engagements"
      className="border-1 flex w-full scroll-mt-8 flex-col gap-4 rounded-xl px-4 md:px-0"
    >
      <SectionHeading className="text-2xl md:text-3xl">
        Community & Speaking
      </SectionHeading>

      <Accordion type="single" collapsible className="w-full">
        <Community />
        <Conferences />
        <Speaking />
      </Accordion>
    </section>
  )
}
