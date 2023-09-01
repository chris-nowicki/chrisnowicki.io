import React from 'react'
import SocialLink from './SocialLink'

export default function Footer({ footerLinks }) {
  return (
    <footer className="mb-10 w-full text-center text-gray-500">
      <div className="mb-4 flex w-full flex-col gap-2 rounded border border-borderColor-light p-4 dark:border-borderColor-dark">
        {footerLinks.map((link, index) => (
          <SocialLink
            key={index + link.name}
            content={link.name}
            icon={link.name.toLowerCase()}
            url={link.url}
            padding={4}
            fontSize={'md'}
          />
        ))}
      </div>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Built with
        React & Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email &
        Resend, Sanity CMS, Vercel hosting.
      </p>
    </footer>
  )
}
