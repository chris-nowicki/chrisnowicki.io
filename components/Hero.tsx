import { FC } from 'react'

import ButtonLink from './ui/button-link'
import CldImage from './CldImage'
import SocialMetrics from './Social/SocialMetrics'

const HEADSHOT_URL =
  'https://res.cloudinary.com/ddetibihn/image/upload/f_auto,q_auto,w_255,c_limit/v1723742649/portfolio/bqbjvpscfeqkumjbinwk.jpg'

const Hero: FC = () => {
  return (
    <section className="mt-9 flex flex-col items-center gap-y-32 md:mt-28">
      <div className="mx-4 flex flex-wrap-reverse justify-center gap-10 md:mx-0 md:flex-nowrap md:justify-between md:gap-6">
        <div className="flex w-full flex-col items-start text-xl">
          <h1 className="scroll-m-20 text-3xl font-bold">
            Hello, I'm Chris Nowicki
          </h1>
          <p className="text-lg font-semibold md:text-xl">
            I'm a Full Stack Software Engineer
          </p>
          <p className="text-lg md:text-xl">
            I enjoy working with <strong>Next.js/React</strong>,{' '}
            <strong>Astro</strong>, <strong>Typescript</strong>,
            <strong>shadcn/ui</strong>, <strong>Tailwind CSS</strong>,{' '}
            <strong>MySQL/MongoDB</strong>, <strong>Sanity CMS</strong>, and{' '}
            <strong>Vercel</strong>
          </p>
          <p className="text-lg md:text-xl">
            Let's connect to bring your ideas to life. Together, we can craft
            exceptional digital experiences that make a real impact.
          </p>

          <div className="flex gap-4 md:mt-10">
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

        <div className="w-[225px] md:mb-0 md:w-[400px]">
          <CldImage
            className="rounded-xl bg-accent p-2 shadow-lg"
            width={255}
            height={281}
            src={HEADSHOT_URL}
            alt="Chris Nowicki"
          />
        </div>
      </div>
      <SocialMetrics className="mb-0 md:mb-16" />
    </section>
  )
}

export default Hero
