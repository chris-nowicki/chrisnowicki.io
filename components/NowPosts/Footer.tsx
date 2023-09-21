import React from 'react'

export default function Footer() {
  return (
    <div className="mt-16 flex w-full justify-center text-xl italic">
      <p>
        inspired by{' '}
        <a
          href="#"
          className="rounded px-1 text-purple-light underline-offset-2 transition-all duration-200 ease-in-out hover:bg-purple-light hover:text-foreground dark:text-purple-dark"
        >
          derek silvers
        </a>{' '}
        and{' '}
        <a
          href="#"
          className="rounded px-1 text-purple-light underline-offset-2 transition-all duration-200 ease-in-out hover:bg-purple-light hover:text-foreground dark:text-purple-dark"
        >
          nownownow
        </a>
      </p>
    </div>
  )
}
