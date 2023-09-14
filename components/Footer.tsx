import React from 'react'
import { PDF } from '@/assets/Icons'
import { BsDownload } from 'react-icons/bs'
import { socialLinks } from '@/lib/data'

type FooterProps = {
  pdfLink: string
}

export default function Footer({ pdfLink }: FooterProps) {
  return (
    <footer className="mb-10 flex w-full flex-col items-center justify-center text-left text-gray-500 md:px-0 md:text-center">
      {/* resume & social media links */}
      <div className="mb-10 flex w-full flex-col gap-2 rounded-lg border p-4 shadow-lg dark:border-borderColor-dark dark:bg-gray-300/10 md:w-1/2">
        <a
          href={pdfLink}
          className="group flex w-full items-center justify-center gap-2 rounded-lg border p-2 hover:border-black hover:text-black hover:shadow dark:border-borderColor-dark dark:hover:border-foreground dark:hover:text-foreground"
          target="_blank"
        >
          <PDF size={28} />
          Download CV
          <BsDownload size={20} className="group-hover:translate-y-1" />
        </a>
        <div className="flex items-center justify-between gap-2">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.URL}
              className="flex w-full items-center justify-center rounded-lg border p-2 hover:border-black hover:text-black hover:shadow dark:border-borderColor-dark dark:hover:border-foreground dark:hover:text-foreground"
              target="_blank"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* about this website information */}
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Built with
        React & Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email &
        Resend, Sanity CMS, Vercel hosting.
      </p>
    </footer>
  )
}
