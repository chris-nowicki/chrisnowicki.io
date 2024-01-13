'use client'
import { useEffect, useState, useMemo } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import path from 'path'

import { navItems } from '@/lib/data'
import { UpArrowIcon } from '@/assets/Icons'
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
    pathname === '/' ?
      setActiveSection('Home')
    : setActiveSection(
        path.basename(
          pathname.replace('/', '').charAt(0).toUpperCase() + pathname.slice(2)
        )
      )
  }, [pathname])

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
        >
          <UpArrowIcon />
        </motion.button>
      )}

      {/* nav bar */}
      <div className="z-99 relative flex w-full items-center justify-between py-4 shadow md:px-0 md:py-0 md:shadow-none">
        {/* nav bar menu */}
        <ul
          className={clsx(
            'hidden w-full pt-6 sm:hidden md:flex md:items-center md:justify-between'
          )}
        >
          <div className="flex items-center gap-4">
            {navItems.map(({ name, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={clsx(
                    'relative text-lg',
                    activeSection === name && 'font-semibold'
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
          </div>
          {/* dark/light theme toggle button */}
          <ModeToggle />
        </ul>

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

          <ModeToggle />
        </div>

        {/* mobile navigation menu when hamburger button is selected */}
        {showMobileMenu && (
          <div>
            <div
              id="menu"
              className="absolute left-0 right-0 z-10 mt-7 flex flex-col  items-center self-end bg-foreground opacity-95 drop-shadow-md dark:opacity-100 sm:w-full sm:self-center"
            >
              {navItems.map(({ name, href }) => (
                <Link
                  key={name + href}
                  href={href}
                  className="flex w-full justify-center py-1 text-3xl text-background last:mb-2 last:border-none"
                  onClick={() => handleMenu()}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
