import { socialLinks } from '@/lib/data'
import Metrics from './Metrics'
import SectionDivider from '../SectionDivider'
import { Button } from '../ui/button'
import Icon from '../Icon'
import { getResume } from '@/sanity/sanity-queries'

export default async function Footer() {
  const resumeURL = await getResume()

  return (
    <footer className="mb-10 flex flex-col items-center justify-center px-4 text-left md:px-0 md:text-center">
      <SectionDivider />

      {/* resume & social media links, and metrics */}
      {/* links */}
      <div className="mb-10 flex w-full flex-col gap-2 rounded-lg border p-4 shadow-lg md:w-3/4 md:flex-row">
        <div className="flex w-full flex-col gap-2 md:w-1/2">
          {/* resume */}
          <Button
            variant="outline"
            className="group py-6 hover:border-primary hover:bg-transparent hover:shadow"
          >
            <a
              href={resumeURL}
              className="flex items-center justify-center gap-2 rounded-lg group-hover:text-primary"
              target="_blank"
            >
              <Icon id="pdf" size={28} />
              Download CV
              <Icon
                id="download"
                size={20}
                className="transition-all group-hover:animate-bounce"
              />
            </a>
          </Button>

          {/* social media links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((link, index) => (
              <Button
                key={index + link.URL}
                variant="outline"
                className="group w-full px-3.5 py-6 hover:border-primary hover:bg-transparent md:px-[9px] md:py-5"
                aria-label={link.aria}
              >
                <a
                  key={index}
                  href={link.URL}
                  className="group-hover:text-primary"
                  target="_blank"
                  aria-label={link.aria}
                >
                  {link.icon}
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* metrics */}
        <Metrics />
      </div>

      {/* about this website information */}
      <p className="text-left text-xs">
        <span className="font-semibold">Built with:</span> Next.js, TypeScript,
        Tailwind CSS, shadcn/ui, Framer Motion, React Email & Resend, Sanity
        CMS, PlanetScale MySQL, and hosted on Vercel.
      </p>
    </footer>
  )
}
