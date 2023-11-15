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
  const [hideNavBar, setHideNavBar] = useState(false) // for hiding navbar on scroll
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection()
  const { scrollY } = useScroll()

  // hide navbar on scroll down & show on scroll up
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 75) {
      activeSection !== 'Now' && setHideNavBar(true) // do not allow useMotionValueEvent if the activeSection is 'Now
    } else {
      setHideNavBar(false)
    }
  })

  // toggle hamburger mobile menu
  const handleMenu = () => {
    const btn: HTMLElement = document.getElementById('menu-btn')
    btn.classList.toggle('open')
    setShowMobileMenu(showMobileMenu === false ? true : false)
  }

  return (
    <nav className="fixed left-1/2 top-0 z-[999] w-full max-w-3xl -translate-x-1/2">
      <div className="relative flex w-full items-center justify-between bg-gray-50 shadow dark:bg-background-light md:bg-transparent md:px-0 md:shadow-none md:dark:bg-transparent">
        {/* nav bar menu */}
        <motion.ul
          variants={{
            visible: { y: 0 },
            hidden: { y: -110 },
          }}
          animate={hideNavBar ? 'hidden' : 'visible'}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className={clsx(
            'hidden w-full bg-gray-50 bg-opacity-40 py-4 rounded-xl shadow-sm backdrop-blur-xl dark:bg-foreground dark:bg-opacity-100 sm:hidden md:flex md:items-center md:justify-between'
          )}
        >
          <div className="flex items-center gap-4 pl-5">
            {navItems.map(({ name, hash }) => (
              <motion.li key={hash} initial={{ opacity: 1 }}>
                <Link
                  href={hash}
                  className={clsx(
                    'dark:text-textDark relative rounded-lg border border-transparent text-lg hover:text-black',
                    activeSection === name ? 'text-black' : 'text-gray-600'
                  )}
                  onClick={() => {
                    setActiveSection(name)
                    setTimeOfLastClick(Date.now())
                  }}
                >
                  {name}

                  {activeSection === name && (
                    <motion.span
                      className="absolute -bottom-[2px] left-0 -z-10 w-full rounded border-b-2 border-b-purple-light/75"
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
        </motion.ul>

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
