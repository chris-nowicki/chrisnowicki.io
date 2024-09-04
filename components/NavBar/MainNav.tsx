import { FC } from 'react'

import { navLinks } from '@/config/links'
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

const MainNav: FC = (): JSX.Element => {
  return (
    <div className="hidden w-full pt-6 sm:hidden md:flex md:items-center md:justify-between">
      <ul className="ml-0 flex list-none items-center gap-5">
        {navLinks.map(({ name, href }, index) => (
          <li key={`${href}-${index}`}>
            <Link
              href={href}
              className="relative text-lg transition-all duration-200 ease-in-out"
            >
              {name.toLocaleLowerCase()}
            </Link>
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </div>
  )
}

export default MainNav
