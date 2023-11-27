'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { navItems } from '@/lib/data'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useActiveSection } from '@/context/active-section'
import ModeToggle from './ModeToggle'
import { UpArrowIcon } from '@/assets/Icons'

export default function NavBar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const { activeSection } = useActiveSection()
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { scrollY } = useScroll()

  // show up button when scrollY > 200
  useMotionValueEvent(scrollY, 'change', (latest) => {
    console.log(scrollY.get())
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
          className="group fixed bottom-16 right-24 hidden rounded-full border bg-purple-light p-2 text-foreground shadow-lg transition-all duration-150 ease-in-out hover:scale-105 hover:text-foreground dark:bg-purple-dark dark:text-black md:block"
          onClick={() => {
            document.body.scrollTop = 0 // For Safari
            document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
          }}
        >
          <UpArrowIcon />
        </motion.button>
      )}

      {/* nav bar */}
      <div className="relative flex w-full items-center justify-between bg-gray-50 py-4 shadow dark:bg-background-light md:bg-transparent md:px-0 md:py-0 md:shadow-none md:dark:bg-transparent">
        {/* nav bar menu */}
        <ul
          className={clsx(
            'hidden w-full bg-gray-50 pt-6 backdrop-blur-xl dark:bg-foreground dark:bg-transparent sm:hidden md:flex md:items-center md:justify-between'
          )}
        >
          <div className="flex items-center gap-4">
            {navItems.map(({ name, hash }) => (
              <motion.li key={hash} initial={{ opacity: 1 }}>
                <Link
                  href={hash}
                  className={clsx(
                    'dark:text-textDark relative rounded-lg border border-transparent text-xl',
                    activeSection === name
                      ? 'text-black dark:text-purple-dark'
                      : 'text-gray-600 hover:text-black dark:text-foreground dark:hover:text-purple-dark'
                  )}
                  prefetch={true}
                >
                  {name}

                  {activeSection === name && (
                    <motion.span
                      className="absolute -bottom-[2px] left-0 -z-10 w-full rounded border-b-2 border-b-purple-light/75 dark:border-foreground"
                      layoutId="activeSection"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </motion.li>
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
            <span className="hamburger-top bg-black dark:bg-foreground"></span>
            <span className="hamburger-middle bg-black dark:bg-foreground"></span>
            <span className="hamburger-bottom bg-black dark:bg-foreground"></span>
          </button>

          <ModeToggle className="rounded-lg dark:border-foreground dark:text-foreground" />
        </div>

        {/* mobile navigation menu when hamburger button is selected */}
        {showMobileMenu && (
          <div>
            <div
              id="menu"
              className="absolute left-0 right-0 z-10 mt-7 flex flex-col items-center  space-y-2 self-end bg-background-light text-foreground opacity-95 dark:opacity-100 drop-shadow-md dark:bg-background-dark sm:w-full sm:self-center"
            >
              {navItems.map(({ name, hash }) => (
                <Link
                  href={hash}
                  className="flex w-full justify-center border-b border-foreground/20 py-2 text-4xl text-foreground last:border-none hover:text-purple-dark"
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
