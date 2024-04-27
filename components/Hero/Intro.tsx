import ButtonLink from '../ui/button-link'
import CldImage from '../CldImage'
import { getMarkdownData } from '@/utils/hero'
import '@/styles/intro.css'

type HeroData = {
  image: string
  markdown: string
}

export default async function Intro() {
  const heroData: HeroData = await getMarkdownData('intro.md')

  return (
    <section className="mx-4 flex flex-wrap-reverse justify-center md:mx-0 md:flex-nowrap md:justify-start">
      <div className="mr-0 flex w-full flex-col items-center text-xl md:mr-6 md:items-start">
        {/* intro text */}
        <div
          dangerouslySetInnerHTML={{ __html: heroData.markdown }}
          className="intro"
        />

        {/* projects and contact buttons */}
        <div className="mt-6 flex items-center gap-2 md:mt-10">
          <ButtonLink
            href="#projects"
            variant="default"
            className="px-8 uppercase"
          >
            Projects
          </ButtonLink>

          <ButtonLink href="#contact" variant="outline" className="uppercase">
            Contact Me
          </ButtonLink>
        </div>
      </div>

      {/* profile image */}
      <div className="mb-10 w-[200px] md:mb-0 md:w-[400px]">
        <CldImage
          className="rounded-xl bg-accent p-2 shadow-lg "
          width={255}
          height={281}
          src={heroData.image}
          alt="chris nowicki"
        />
      </div>
    </section>
  )
}
