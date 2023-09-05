'use client'
import Link from 'next/link'
import clsx from 'clsx'
import { useState } from 'react'
import { navItems } from '@/lib/data'
import { motion } from 'framer-motion'
import { useActiveSection } from '@/context/active-section'
import ModeToggle from './ModeToggle'

export default function NavBar() {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection()

  const handleMenu = () => {
    const btn: HTMLElement = document.getElementById('menu-btn')
    btn.classList.toggle('open')
    setShowMenu(showMenu === false ? true : false)
  }

  return (
    <nav className="fixed left-1/2 top-0 z-[999] w-full max-w-3xl -translate-x-1/2 md:top-0">
      <motion.div
        className="relative flex w-full items-center justify-between bg-foreground p-4 shadow dark:bg-background-light md:bg-transparent md:px-0 md:pb-4 md:pt-4 md:shadow-none md:dark:bg-transparent"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {/* regular nav menu */}
        <ul className="hidden w-full rounded-full bg-foreground bg-opacity-40 py-2 shadow-lg backdrop-blur-xl dark:bg-opacity-100 sm:hidden md:flex md:items-center md:justify-between">
          <div className="flex items-center gap-4 pl-5">
            {navItems.map(({ name, hash }) => (
              <motion.li
                key={hash}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
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
                      className="absolute -bottom-[2px] left-0 w-full rounded border-b-4 border-b-purple-light/75 -z-10"
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

        {/* mobile nav menu when hamburger button is selected */}
        {showMenu && (
          <div>
            <div
              id="menu"
              className="absolute left-0 right-0 z-10 -ml-6 mt-7 flex h-screen flex-col items-center justify-center  space-y-2 self-end bg-background-light text-foreground opacity-95 drop-shadow-md dark:bg-background-dark sm:w-full sm:self-center"
            >
              {navItems.map(({ name, hash }) => (
                <Link
                  key={hash}
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
      </motion.div>
    </nav>
  )
}