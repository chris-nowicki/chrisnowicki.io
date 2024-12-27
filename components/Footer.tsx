import { FC, JSX } from 'react'

import Link from 'next/link'
import { footerLinks } from '@/config/links'

import Icon from './Icon'
import SocialLinks from './SocialLinks'
import SectionDivider from './SectionDivider'

const Footer: FC = (): JSX.Element => {
  return (
    <footer className="mb-20 flex flex-col items-center px-4 text-left md:px-0 md:text-center">
      <SectionDivider />
      <div className="mb-6 flex w-full flex-col justify-between gap-4 rounded-xl border p-6 shadow-xl shadow-primary/20 md:flex-row">
        <div className="flex w-full flex-col items-center md:w-1/2 md:items-start md:justify-between">
          <span className="mb-4 text-3xl font-semibold">Sitemap</span>
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              className="text-xl hover:text-primary"
              href={link.href}
              rel="noopener noreferrer"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex w-full flex-col items-center gap-6 md:w-1/2 md:items-start">
          <span className="text-3xl font-semibold">Links</span>
          <SocialLinks isFooter={true} />
        </div>
      </div>
      {/* about this website information */}
      <p className="text-left text-xs md:px-4">
        <span className="font-semibold">Built with:</span> Next.js, TypeScript,
        Tailwind CSS, shadcn/ui, and Framer Motion.
      </p>

      {/* powered by vercel */}
      <div className="mt-2 flex gap-2">
        <span>⚡️ by vercel</span>
        <Link
          href="https://vercel.com"
          target="_blank"
          aria-label={`Vercel's website`}
          rel="noopener noreferrer"
        >
          <Icon id="vercel" size={24} />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
