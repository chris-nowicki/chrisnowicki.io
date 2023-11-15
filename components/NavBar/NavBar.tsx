'use client'
import { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { navItems } from '@/lib/data'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useActiveSection } from '@/context/active-section'
import ModeToggle from './ModeToggle'

export default function NavBar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const { activeSection, setActiveSection } = useActiveSection()
  const { scrollY } = useScroll()

  // hide navbar on scroll down & show on scroll up
  // useMotionValueEvent(scrollY, 'change', (latest) => {
  //   const previous = scrollY.getPrevious()
  //   if (latest > previous && latest > 52) {
  //     setHideNavBar(true)
  //   } else {
  //     setHideNavBar(false)
  //   }
  // })

  // toggle hamburger mobile menu
  const handleMenu = () => {
    const btn: HTMLElement = document.getElementById('menu-btn')
    btn.classList.toggle('open')
    setShowMobileMenu(showMobileMenu === false ? true : false)
  }

  return (
    <nav className="flex w-full max-w-3xl justify-center mb-12">
      <div className="relative flex w-full items-center justify-between bg-gray-50 shadow dark:bg-background-light md:bg-transparent md:px-0 md:shadow-none md:dark:bg-transparent">
        {/* nav bar menu */}
        <ul
          className={clsx(
            'hidden w-full bg-gray-50 dark:bg-transparent pt-6 backdrop-blur-xl dark:bg-foreground sm:hidden md:flex md:items-center md:justify-between'
          )}
        >
          <div className="flex items-center gap-4">
            {navItems.map(({ name, hash }) => (
              <motion.li key={hash} initial={{ opacity: 1 }}>
                <Link
                  href={hash}
                  className={clsx(
                    'dark:text-textDark relative rounded-lg border border-transparent text-xl',
                    activeSection === name ? 'text-black dark:text-purple-dark' : 'text-gray-600 hover:text-black dark:text-foreground dark:hover:text-purple-dark'
                  )}
                  onClick={() => {
                    setActiveSection(name)
                  }}
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
        <button
          className="hamburger relative shadow-2xl focus:outline-none md:hidden"
          id="menu-btn"
          onClick={() => handleMenu()}
        >
          <span className="hamburger-top bg-black dark:bg-foreground"></span>
          <span className="hamburger-middle bg-black dark:bg-foreground"></span>
          <span className="hamburger-bottom bg-black dark:bg-foreground"></span>
        </button>

        <ModeToggle className="fixed right-2 rounded-lg dark:border-foreground dark:text-foreground md:hidden" />

        {/* mobile navigation menu when hamburger button is selected */}
        {showMobileMenu && (
          <div>
            <div
              id="menu"
              className="absolute left-0 right-0 z-10 -ml-6 mt-7 flex h-screen flex-col items-center justify-center  space-y-2 self-end bg-background-light text-foreground opacity-95 drop-shadow-md dark:bg-background-dark sm:w-full sm:self-center"
            >
              {navItems.map(({ name, hash }) => (
                <Link
                  href={hash}
                  className="py-4 text-6xl text-foreground hover:text-purple-dark"
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
