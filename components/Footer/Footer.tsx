import React from 'react'
import { PDF, Download } from '@/assets/Icons'
import { socialLinks } from '@/lib/data'
import Metrics from './Metrics'

type FooterProps = {
  pdfLink: string
}

export default function Footer({ pdfLink }: FooterProps) {
  return (
    <footer className="mb-10 flex w-full flex-col items-center justify-center text-left text-gray-500 md:px-0 md:text-center">
      {/* resume & social media links */}
      {/* links */}
      <div className="mb-10 flex w-full flex-col gap-2 rounded-lg border p-4 shadow-lg dark:border-gray-300/20 dark:bg-gray-300/10 md:w-3/4 md:flex-row">
        <div className="flex w-full flex-col gap-1 md:w-1/2 md:gap-2">
          {/* resume */}
          <a
            href={pdfLink}
            className="group flex w-full items-center justify-center gap-2 rounded-lg border p-2 hover:border-purple-light hover:text-purple-light hover:shadow dark:border-gray-300/20 dark:hover:border-purple-dark dark:hover:text-purple-dark"
            target="_blank"
          >
            <PDF size={28} />
            Download CV
            <Download
              size={20}
              classProps="transition-all group-hover:animate-bounce"
            />
          </a>

          {/* social media links */}
          <div className="flex items-center justify-between gap-1 md:gap-2">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.URL}
                className="flex w-full items-center justify-center rounded-lg border p-2 hover:border-purple-light hover:text-purple-light hover:shadow dark:border-gray-300/20 dark:hover:border-purple-dark dark:hover:text-purple-dark"
                target="_blank"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* metrics */}
        <Metrics />
      </div>

      {/* about this website information */}
      <p className="text-xs">
        <span className="font-semibold">Built with:</span> React & Next.js,
        TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Sanity
        CMS, PlanetScale MySQL, Vercel hosting.
      </p>
    </footer>
  )
}
