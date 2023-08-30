import React from 'react'
import { NEXTJS, TS, TAILWIND, SANITY, MYSQL, MDB, VERCEL } from './Icons'

export default function TechStack() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-2 dark:bg-foreground md:justify-between md:gap-0 ">
      <a
        href="https://nextjs.org/"
        className="duration-100 ease-in-out hover:scale-105"
        target="_blank"
      >
        <NEXTJS />
      </a>
      <a
        href="https://www.typescriptlang.org/"
        className="duration-100 ease-in-out hover:scale-105"
        target="_blank"
      >
        <TS />
      </a>
      <a
        href="https://tailwindcss.com/"
        className="duration-100 ease-in-out hover:scale-105"
        target="_blank"
      >
        <TAILWIND />
      </a>
      <a
        href="https://www.sanity.io/"
        className="duration-100 ease-in-out hover:scale-105"
        target="_blank"
      >
        <SANITY />
      </a>
      <a
        href="https://www.mysql.com/"
        className="duration-100 ease-in-out hover:scale-105"
        target="_blank"
      >
        <MYSQL />
      </a>

      <a
        href="https://www.mongodb.com/"
        className="duration-100 ease-in-out hover:scale-105"
        target="_blank"
      >
        <MDB />
      </a>
      <a
        href="https://www.vercel.com"
        className="duration-100 ease-in-out hover:scale-105"
        target="_blank"
      >
        <VERCEL />
      </a>
    </div>
  )
}
