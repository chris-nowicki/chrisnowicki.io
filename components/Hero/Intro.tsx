import ButtonLink from '../ui/button-link'
import CldImage from '../CldImage'

export default async function Intro() {
  return (
    <section className="mx-4 flex flex-wrap-reverse justify-center md:mx-0 md:flex-nowrap md:justify-start">
      {/* intro text */}
      <div className="mr-0 flex w-full flex-col items-center text-xl md:mr-6 md:items-start">
        <h2 className="mb-2 border-b-0 pb-0 text-2xl md:text-3xl">
          Hello, I'm Chris Nowicki
        </h2>
        <p className="text-left text-lg leading-7 md:mr-4 md:text-xl [&:not(:first-child)]:mt-0 [&:not(:first-child)]:pt-0 [&:not(:first-child)]:text-left">
          I'm a Full Stack Web Developer
        </p>
        <p className="text-left text-lg leading-7 md:mr-4 md:text-xl [&:not(:first-child)]:mt-0 [&:not(:first-child)]:pt-0 [&:not(:first-child)]:text-left">
          I enjoy working with <strong>Next.js/React</strong>,{' '}
          <strong>Astro</strong>, <strong>TypeScript</strong>,{' '}
          <strong>shadcn/ui</strong>, <strong>Tailwind CSS</strong>,{' '}
          <strong>MySQL/MongoDB</strong>, <strong>Sanity CMS</strong>, and{' '}
          <strong>Vercel</strong>.
        </p>
        <p className="text-left text-lg leading-7 md:mr-4 md:text-xl [&:not(:first-child)]:mt-0 [&:not(:first-child)]:pt-0 [&:not(:first-child)]:text-left">
          Let's connect to bring your ideas to life. Together, we can craft
          exceptional digital experiences that make a real impact.
        </p>

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
          src="https://res.cloudinary.com/ddetibihn/image/upload/f_auto,q_auto,w_255,c_limit/v1714075439/portfolio/oxt7hq6exyscgrcattm3.webp"
          alt="chris nowicki"
        />
      </div>
    </section>
  )
}
