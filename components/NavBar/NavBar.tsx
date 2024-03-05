'use client'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo, useState } from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'

import { navItems } from '@/lib/data'
import { ModeToggle } from './ModeToggle'

export default function NavBar() {
  const [activeSection, setActiveSection] = useState<string>('')
  const pathname = usePathname()

  useMemo(() => {
    // Assuming navItems is an array of objects with name and href properties
    const matchingNavItem = navItems.find((item) => item.href === pathname)

    if (matchingNavItem) {
      setActiveSection(matchingNavItem.name)
    } else {
      setActiveSection('Home') // Or some default/fallback section name
    }
  }, [pathname, navItems])

  // toggle hamburger mobile menu
  const handleMenu = () => {
    const btn: HTMLElement = document.getElementById('menu-btn')
    btn.classList.toggle('open')
  }

  return (
    <nav className="mb-24 flex w-full max-w-3xl justify-center md:mb-12">
      {/* nav bar */}
      <div className="fixed z-30 flex w-full items-center justify-between bg-background py-4 shadow dark:shadow-foreground/20 md:relative md:px-0 md:py-0 md:shadow-none">
        {/* nav bar menu */}
        <div
          className={clsx(
            'hidden w-full pt-6 sm:hidden md:flex md:items-center md:justify-between'
          )}
        >
          <ul className="flex items-center gap-5">
            {navItems.map(({ name, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={clsx(
                    'relative text-lg transition-all duration-200 ease-in-out'
                  )}
                  prefetch={true}
                >
                  {name}

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
          {/* dark/light theme toggle button */}
          <ModeToggle />
        </div>

        <div className="flex w-full items-center justify-between px-4 md:hidden">
          <Sheet key="mobile">
            <SheetTrigger asChild>
              <button
                className="hamburger relative shadow-2xl focus:outline-none"
                id="menu-btn"
                onClick={() => handleMenu()}
              >
                <span className="hamburger-top bg-accent-foreground"></span>
                <span className="hamburger-middle bg-accent-foreground"></span>
                <span className="hamburger-bottom bg-accent-foreground"></span>
              </button>
            </SheetTrigger>
            <SheetContent side="left" className=" h-svh w-screen">
              <div className="mt-7 flex flex-col justify-center self-end opacity-95 drop-shadow-md dark:opacity-100">
                {navItems.map(({ name, href }) => (
                  <SheetClose key={name + href} asChild>
                    <Link
                      href={href}
                      className="text-3xl"
                      onClick={() => handleMenu()}
                      aria-label={name}
                    >
                      {`/${name}`}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}
