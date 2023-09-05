import React from 'react'
import SocialLink from './SocialLink'

export default function Footer({ footerLinks }) {
  return (
    <footer className=" mb-10 w-full sm:text-left md:text-center text-gray-500 sm:px-4 md:px-0">
      <div className="mb-4 flex w-full flex-col gap-2 rounded border border-borderColor-light p-4 dark:border-borderColor-dark">
        {footerLinks.map(
          (link, index) =>
            index === 0 && (
              <SocialLink
                key={index + link.name}
                content={link.name}
                icon={link.name.toLowerCase()}
                url={link.url}
                padding={4}
                fontSize={'md'}
              />
            )
        )}
        <div className="flex items-center gap-3 flex-wrap">
          {footerLinks.map(
            (link, index) =>
              index != 0 && (
                <SocialLink
                  key={index + link.name}
                  content={link.name}
                  icon={link.name.toLowerCase()}
                  url={link.url}
                  padding={4}
                  fontSize={'md'}
                />
              )
          )}
        </div>
      </div>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Built with
        React & Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email &
        Resend, Sanity CMS, Vercel hosting.
      </p>
    </footer>
  )
}
