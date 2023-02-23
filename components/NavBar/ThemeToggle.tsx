'use client'
import { useEffect, useState } from 'react'
import { Sun, Moon } from '../Icons'

export default function ThemeToggle() {
    const [theme, setTheme] = useState<string | null>('dark')

    useEffect(() => {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', ({ matches }) => {
                if (matches) {
                    if (!document.documentElement.classList.contains('dark')) {
                        setTheme('dark')
                    }
                } else {
                    if (document.documentElement.classList.contains('dark')) {
                        setTheme('light')
                    }
                }
            })
    }, [])

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <>
            <button
                className="cursor-pointer rounded-lg border border-neutral-200 p-2.5 hover:bg-neutral-100 dark:border-neutral-900/50 hover:dark:bg-neutral-900/20"
                onClick={() => {
                    setTheme(theme === 'light' ? 'dark' : 'light')
                }}
            >
                {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
            </button>
        </>
    )
}
