'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from '../Icons'

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
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

    return (
        <>
            {!mounted ? (
                <div className="rounded-lg border border-neutral-200 p-2.5 dark:border-neutral-900/50">
                    <Moon size={24} />
                </div>
            ) : (
                <button
                    className="cursor-pointer rounded-lg border border-neutral-200 p-2.5 hover:bg-neutral-100 dark:border-neutral-900/50 hover:dark:bg-neutral-900/20"
                    onClick={() => {
                        setTheme(theme === 'light' ? 'dark' : 'light')
                    }}
                >
                    {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
                </button>
            )}
        </>
    )
}
