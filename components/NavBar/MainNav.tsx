import { navItems } from '@/lib/data'
import Link from 'next/link'
import { motion } from 'framer-motion'
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

              {activeSection === name && (
                <motion.span
                  className="absolute -bottom-[2px] left-0 -z-10 w-full rounded border-b-2 border-b-primary"
                  layoutId="activeSection"
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </div>
  )
}
