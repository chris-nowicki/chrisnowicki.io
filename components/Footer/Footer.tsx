import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-64 mb-10 flex w-full justify-center text-gray-500 flex-col items-center text-left md:px-0 md:text-center">
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Built with
        React & Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email &
        Resend, Sanity CMS, Vercel hosting.
      </p>
    </footer>
  )
}
