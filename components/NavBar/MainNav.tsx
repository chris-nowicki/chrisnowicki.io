import { navItems } from '@/lib/data'
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

export default function MainNav({ activeSection }: { activeSection: string }) {
  return (
    <div className="hidden w-full pt-6 sm:hidden md:flex md:items-center md:justify-between">
      <ul className="ml-0 flex list-none items-center gap-5">
        {navItems.map(({ name, href }) => (
          <li key={href}>
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
