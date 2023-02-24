'use client'
import ThemeToggle from './ThemeToggle'

//type
import { Links } from 'ts/types'

// icons
import { ArrowIcon, PDF } from '../Icons'

export default function Nav({
    links,
    showResume,
}: {
    links: Links[]
    showResume: boolean
    }) {

    const handleMenu = () => {
        const btn = document.getElementById('menu-btn')
        const nav = document.getElementById('menu')
        btn.classList.toggle('open')
        nav.classList.toggle('flex')
        nav.classList.toggle('hidden')
    }

    return (
        <nav id="home" className="mb-6 flex flex-col items-center w-full">
            <div className="flex w-full flex-row items-center justify-between px-5 pt-4 pb-4 sm:shadow md:px-0 md:shadow-none">
                <div className="items-center sm:hidden md:flex">
                    {links.map(
                        (link, index) =>
                            link.show && (
                                <a
                                    key={index}
                                    href={link.reference}
                                    className={`mr-4 text-xl hover:text-purple-600 dark:text-textDark dark:hover:text-purpleDark `}
                                >
                                    {link.title}
                                </a>
                            )
                    )}
                </div>

                <button
                    className="hamburger block shadow-2xl focus:outline-none md:hidden"
                    id="menu-btn"
                    onClick={() => handleMenu()}
                >
                    <span className="hamburger-top bg-black dark:bg-textDark"></span>
                    <span className="hamburger-middle bg-black dark:bg-textDark"></span>
                    <span className="hamburger-bottom bg-black dark:bg-textDark"></span>
                </button>

                <div className="md:hidden">
                    <div
                        id="menu"
                        className="absolute left-6 right-6 z-10 -mx-6 mt-10 hidden h-1/4 flex-col items-center justify-center space-y-2 self-end bg-bgDark py-4 text-textDark opacity-95 drop-shadow-md dark:bg-gray-900 sm:w-full sm:self-center"
                    >
                        {links.map(
                            (link, index) =>
                                link.show && (
                                    <a
                                        key={index}
                                        href={link.reference}
                                        className="text-3xl text-textDark hover:text-purpleDark"
                                    >
                                        {link.title}
                                    </a>
                                )
                        )}
                    </div>
                </div>

                <div className="flex flex-row items-center justify-center gap-1">
                    {showResume && (
                        <div className="flex flex-row">
                            <a
                                href="/resume"
                                className={`flex w-full items-center justify-between rounded-lg border border-neutral-200 px-4 py-2 text-lg hover:bg-neutral-100 dark:border-neutral-900/50  dark:text-textDark hover:dark:bg-neutral-900/20`}
                            >
                                <div className="mr-2 flex items-center gap-2 md:mr-6">
                                    <PDF
                                        size={24}
                                        classProps="hidden md:block"
                                    />
                                    resumé
                                </div>
                                <ArrowIcon size={12} />
                            </a>
                        </div>
                    )}

                    {/* <ThemeToggle /> */}
                </div>
            </div>
        </nav>
    )
}