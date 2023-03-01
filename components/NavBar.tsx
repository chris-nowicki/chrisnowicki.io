'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

//type
import { Links } from 'ts/types'

// icons
import { ArrowIcon } from './Icons'

export default function Nav({ links }: { links: Links[] }) {
    const [showMenu, setShowMenu] = useState(false)
    const pathname = usePathname()

    const handleMenu = () => {
        const btn = document.getElementById('menu-btn')
        btn.classList.toggle('open')
        setShowMenu(showMenu === false ? true : false)
    }

    return (
        <nav id="home" className="mb-6">
            <div className="relative flex w-full items-center justify-between px-5 pt-4 pb-4 sm:shadow md:px-0 md:shadow-none">
                {/* regular nav menu */}
                <div className="sm:hidden md:flex">
                    {links.map(
                        (link) =>
                            link.show && (
                                <Link
                                    key={link.title}
                                    href={link.reference}
                                    className={`dark:text-textDark rounded-lg border px-2 py-1 text-xl 
                                    ${
                                        pathname === link.reference
                                            ? 'border-neutral-200 bg-neutral-100 text-purple-light dark:border-neutral-900/50 dark:bg-neutral-900/20 dark:text-purple-dark'
                                            : 'border-transparent hover:text-purple-light dark:hover:text-purple-dark'
                                    }
                                    `}
                                >
                                    {link.title}
                                </Link>
                            )
                    )}
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

                {/* mobile menu when hamburger button is selected */}
                {showMenu && (
                    <div>
                        <div
                            id="menu"
                            className="absolute left-6 right-6 z-10 -ml-6 mt-10 flex flex-col items-center justify-center space-y-2 self-end bg-background-light py-4 text-foreground opacity-95 drop-shadow-md dark:bg-background-dark sm:w-full sm:self-center"
                        >
                            {links.map(
                                (link) =>
                                    link.show && (
                                        <Link
                                            key={link.title}
                                            href={link.reference}
                                            className="text-2xl text-foreground hover:text-purple-dark"
                                            onClick={() => handleMenu()}
                                        >
                                            {link.title}
                                        </Link>
                                    )
                            )}
                        </div>
                    </div>
                )}

                {/* link to resume */}
                <Link
                    href="/resume"
                    className={`flex items-center justify-between rounded-lg border border-neutral-200 px-4 py-2 text-lg hover:bg-neutral-100 dark:border-neutral-900/50  dark:text-foreground hover:dark:bg-neutral-900/20
                                ${
                                    pathname === '/resume'
                                        ? 'bg-neutral-100 text-purple-light dark:bg-neutral-900/20 dark:text-purple-dark'
                                        : ''
                                }
                                `}
                >
                    <div className="mr-2 flex items-center md:mr-6">resumé</div>
                    <ArrowIcon size={12} />
                </Link>
            </div>
        </nav>
    )
}
