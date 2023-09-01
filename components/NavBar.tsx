'use client'
import Link from 'next/link'
import clsx from 'clsx'
import { useState } from 'react'
import { navItems } from '@/lib/data'
import { motion } from 'framer-motion'
import { useActiveSection } from '@/context/active-section'

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
    <nav className="fixed left-1/2 top-6 z-[999] w-full max-w-3xl -translate-x-1/2">
      <motion.div
        className="relative flex items-center justify-center px-5 pb-4 pt-4 sm:shadow md:px-0 md:shadow-none "
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {/* regular nav menu */}
        <ul className="absolute mt-6  gap-4 rounded-full bg-white bg-opacity-40 px-6 py-2 shadow-lg backdrop-blur-xl sm:hidden md:flex">
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
                    className="absolute -bottom-1 left-0 w-full rounded border-b-4 border-b-purple-light"
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
        </ul>

        {/* hamburger menu for mobile */}
        <button
          className="hamburger block shadow-2xl focus:outline-none md:hidden"
          id="menu-btn"
          onClick={() => handleMenu()}
        >
          <span className="hamburger-top bg-black dark:bg-foreground"></span>
          <span className="hamburger-middle bg-black dark:bg-foreground"></span>
          <span className="hamburger-bottom bg-black dark:bg-foreground"></span>
        </button>

        {/* mobile nav menu when hamburger button is selected */}
        {showMenu && (
          <div>
            <div
              id="menu"
              className="absolute left-6 right-6 z-10 -ml-6 mt-9 flex flex-col items-center justify-center space-y-2 self-end bg-background-light py-4 text-foreground opacity-95 drop-shadow-md dark:bg-background-dark sm:w-full sm:self-center"
            >
              {navItems.map(({ name, hash }) => (
                <Link
                  key={hash}
                  href={hash}
                  className="text-2xl text-foreground hover:text-purple-dark"
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
