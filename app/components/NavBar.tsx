'use client'
import Link from 'next/link'
import clsx from 'clsx'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowIcon } from './Icons'
import { navItems } from '@/lib/data'

export default function NavBar() {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const pathname: string = usePathname()

  const handleMenu = () => {
    const btn: HTMLElement = document.getElementById('menu-btn')
    btn.classList.toggle('open')
    setShowMenu(showMenu === false ? true : false)
  }

  return (
    <nav id="home" className="mb-6">
      <div className="relative flex w-full items-center justify-between px-5 pb-4 pt-4 sm:shadow md:px-0 md:shadow-none">
        {/* motion settings for active links*/}
        {navItems[pathname] && (
          <div className="hidden md:block">
            <motion.div
              className="absolute top-4 z-[-1] rounded-lg border border-borderColor-light bg-neutral-100 px-2 py-1 dark:border-neutral-900/50 dark:bg-neutral-900/20"
              layoutId="test"
              initial={{
                opacity: 0,
                x: navItems[pathname].x,
                y: navItems[pathname].y,
                width: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                x: navItems[pathname].x,
                y: navItems[pathname].y,
                width: navItems[pathname].w,
                height: navItems[pathname].h,
              }}
              transition={{
                type: 'spring',
                stiffness: 350,
                damping: 30,
              }}
            />
          </div>
        )}

        {/* regular nav menu */}
        <div className="absolute sm:hidden md:flex">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = path === pathname
            return (
              path != '/resume' && (
                <Link
                  key={path}
                  href={path}
                  className={clsx(
                    'dark:text-textDark rounded-lg border border-transparent px-2 py-1 text-xl',
                    {
                      'hover:text-purple-light dark:hover:text-purple-dark':
                        !isActive,
                      'text-purple-light dark:text-purple-dark': isActive,
                    }
                  )}
                >
                  {name}
                </Link>
              )
            )
          })}
        </div>

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
              {Object.entries(navItems).map(([path, { name }]) => {
                return (
                  path != '/resume' && (
                    <Link
                      key={path}
                      href={path}
                      className="text-2xl text-foreground hover:text-purple-dark"
                      onClick={() => handleMenu()}
                    >
                      {name}
                    </Link>
                  )
                )
              })}
            </div>
          </div>
        )}

        {/* link to resume page */}
        <Link
          href="/resume"
          className={clsx(
            'flex items-center justify-between gap-2 rounded-lg border border-neutral-200 px-4 py-1.5 text-lg  dark:border-neutral-900/50 dark:text-foreground md:gap-6',
            pathname === '/resume'
              ? ' text-purple-light dark:text-purple-dark'
              : 'hover:bg-neutral-100 hover:dark:bg-neutral-900/20'
          )}
        >
          resumé
          <ArrowIcon size={12} />
        </Link>
      </div>
    </nav>
  )
}
