'use client'
import clsx from 'clsx'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

import { navItems } from '@/lib/data'
import Icon from '../Icon'
import { ModeToggle } from './ModeToggle'

export default function NavBar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { scrollY } = useScroll()
  const pathname = usePathname()

  // show up button when scrollY > 200
  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 200) {
      setShowScrollTop(true)
    } else {
      setShowScrollTop(false)
    }
  })

  // on page load, if returning to a point > 200, show scroll to top button
  useEffect(() => {
    scrollY.get() > 200 ? setShowScrollTop(true) : setShowScrollTop(false)
  }, [])

  useMemo(() => {
    // Assuming navItems is an array of objects with name and href properties
    const matchingNavItem = navItems.find((item) => item.href === pathname)

    if (matchingNavItem) {
      setActiveSection(matchingNavItem.name)
    } else {
      // Handle special cases or fallback
      if (pathname.startsWith('/community-speaking')) {
        setActiveSection('Community & Speaking')
      } else {
        setActiveSection('Home') // Or some default/fallback section name
      }
    }
  }, [pathname, navItems])

  // toggle hamburger mobile menu
  const handleMenu = () => {
    const btn: HTMLElement = document.getElementById('menu-btn')
    btn.classList.toggle('open')
    setShowMobileMenu(showMobileMenu === false ? true : false)
  }

  return (
    <nav className="mb-12 flex w-full max-w-3xl justify-center">
      {/* scroll to top button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: 'easeInOut' }}
          className="group fixed bottom-10 right-12 hidden rounded-full border bg-primary p-2 text-white shadow-lg transition-all duration-150 ease-in-out hover:scale-105 md:block"
          onClick={() => {
            document.body.scrollTop = 0 // For Safari
            document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
          }}
          aria-label="scroll to top"
        >
          <Icon id="arrow-up" size={32} />
        </motion.button>
      )}

      {/* nav bar */}
      <div className="z-99 relative flex w-full items-center justify-between py-4 shadow md:px-0 md:py-0 md:shadow-none">
        {/* nav bar menu */}
        <menu
          className={clsx(
            'hidden w-full pt-6 sm:hidden md:flex md:items-center md:justify-between'
          )}
        >
          <ul className="flex items-center gap-4">
            {navItems.map(({ name, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={clsx(
                    'relative text-lg transition-all duration-200 ease-in-out hover:text-primary',
                    activeSection === name && 'font-semibold hover:text-black'
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
          <div className="flex items-center gap-2">
            <Link
              href="/community-speaking"
              className={clsx(
                'flex items-center gap-2 rounded-lg border px-4 py-1 text-lg transition-all duration-200 ease-in-out hover:border-primary hover:shadow-sm',
                pathname.startsWith('/community-speaking') && 'border-primary'
              )}
            >
              <Icon id="community" size={24} />
              Community
            </Link>
            <ModeToggle />
          </div>
        </menu>

        {/* hamburger menu for mobile */}
        <div className="flex w-full items-center justify-between px-4 md:hidden">
          <button
            className="hamburger relative shadow-2xl focus:outline-none"
            id="menu-btn"
            onClick={() => handleMenu()}
          >
            <span className="hamburger-top bg-accent-foreground"></span>
            <span className="hamburger-middle bg-accent-foreground"></span>
            <span className="hamburger-bottom bg-accent-foreground"></span>
          </button>

          <div className="flex items-center gap-2">
            <Link
              href="/community-speaking"
              className={clsx(
                'flex items-center gap-2 rounded-lg border px-4 py-1 text-lg transition-all duration-200 ease-in-out hover:border-primary hover:shadow-sm',
                pathname.startsWith('/community-speaking') && 'border-primary'
              )}
            >
              <Icon id="community" size={24} />
              Community
            </Link>
            <ModeToggle />
          </div>
        </div>

        {/* mobile navigation menu when hamburger button is selected */}
        {showMobileMenu && (
          <div>
            <menu
              id="menu"
              className="absolute left-0 right-0 z-10 mt-7 flex flex-col  items-center self-end bg-foreground opacity-95 drop-shadow-md dark:opacity-100 sm:w-full sm:self-center"
            >
              {navItems.map(({ name, href }) => (
                <Link
                  key={name + href}
                  href={href}
                  className="flex w-full justify-center py-1 text-3xl text-background last:mb-2 last:border-none"
                  onClick={() => handleMenu()}
                  aria-label={name}
                >
                  {name}
                </Link>
              ))}
            </menu>
          </div>
        )}
      </div>
    </nav>
  )
}
