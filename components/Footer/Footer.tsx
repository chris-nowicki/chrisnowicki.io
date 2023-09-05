import React from 'react'
import SocialLink from './SocialLink'

export default function Footer({ footerLinks }) {
  return (
    <footer className="mb-10 flex w-full justify-center text-gray-500 flex-col items-center text-left md:px-0 md:text-center">
      <div className="mb-4 flex w-full md:w-1/2 flex-col gap-2 rounded border border-borderColor-light p-4 dark:border-gray-300/20">
        {footerLinks.map(
          (link, index:number) =>
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
        <div className="flex  items-center gap-3 w-full">
          {footerLinks.map(
            (link, index: number) =>
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
