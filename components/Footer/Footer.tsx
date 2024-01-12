import { PDF, Download } from '@/assets/Icons'
import { socialLinks } from '@/lib/data'
import Metrics from './Metrics'
import SectionDivider from '../SectionDivider'
import { Button } from '../ui/button'

type FooterProps = {
  resumeURL: string
}

export default function Footer({ resumeURL }: FooterProps) {
  return (
    <footer className="mb-10 flex w-full flex-col items-center justify-center px-4 text-left md:px-0 md:text-center">
      <SectionDivider />
      {/* resume & social media links */}
      {/* links */}
      <div className="mb-10 flex w-full flex-col gap-2 rounded-lg border p-4 shadow-lg md:w-3/4 md:flex-row">
        <div className="flex w-full flex-col gap-1 md:w-1/2 md:gap-2">
          {/* resume */}
          <Button
            variant="outline"
            className="group py-6 hover:border-primary hover:bg-transparent hover:shadow"
          >
            <a
              href={resumeURL}
              className="flex w-full items-center justify-center gap-2 rounded-lg group-hover:text-primary"
              target="_blank"
            >
              <PDF size={28} />
              Download CV
              <Download
                size={20}
                classProps="transition-all group-hover:animate-bounce"
              />
            </a>
          </Button>

          {/* social media links */}
          <div className="flex items-center justify-between gap-1 md:gap-2">
            {socialLinks.map((link, index) => (
              <Button
                variant="outline"
                className="group p-2 py-5 hover:border-primary hover:bg-transparent"
              >
                <a
                  key={index}
                  href={link.URL}
                  className="flex w-full items-center justify-center group-hover:text-primary"
                  target="_blank"
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
        CMS, PlanetScale MySQL, Vercel hosting.
      </p>
    </footer>
  )
}
