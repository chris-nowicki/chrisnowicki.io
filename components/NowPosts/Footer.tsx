import React from 'react'
import { socialLinks } from '@/lib/data'

export default function Footer() {
  const linkStyle =
    'rounded px-1 underline-offset-4 underline transition-all duration-200 ease-in-out decoration-purple-light hover:text-purple-light dark:decoration-purple-dark dark:hover:text-purple-dark'
  return (
    <div className="mb-24 mt-16 flex w-full flex-col items-center justify-center gap-4 text-xl italic">
      <p>
        inspired by{' '}
        <a
          href="https://bradgarropy.com/now"
          className={linkStyle}
          target="_blank"
        >
          brad garropy
        </a>{' '}
        and{' '}
        <a
          href="https://nownownow.com/about"
          className={linkStyle}
          target="_blank"
        >
          nownownow
        </a>
      </p>
      {/* social media links */}
      <div className="flex items-center gap-2">
        {socialLinks.map((link) => (
          <a
            key={link.URL}
            href={link.URL}
            className="hover:scale-110 hover:text-purple-light hover:duration-75 hover:ease-in-out dark:hover:text-purple-dark"
            target="_blank"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  )
}
