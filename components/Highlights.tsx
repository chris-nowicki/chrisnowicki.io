import { FC, JSX } from 'react'

import SectionHeading from './SectionHeading'
import Speaking from './Engagements/Speaking'

const Highlights: FC = (): JSX.Element => {
  return (
    <section
      id="speaking"
      className="flex scroll-mt-20 flex-col gap-6 md:scroll-mt-8"
    >
      <SectionHeading className="text-3xl md:text-4xl">Speaking</SectionHeading>
      <Speaking />
    </section>
  )
}

export default Highlights
