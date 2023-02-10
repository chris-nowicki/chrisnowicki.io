import { useMemo, useState } from 'react'
import { Sun, Moon } from '../icons'

export default function ThemeToggle() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light')

    const handleClick = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useMemo(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)

        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', ({ matches }) => {
                if (matches) {
                    document.documentElement.classList.add('dark')
                    setTheme('dark')
                } else {
                    document.documentElement.classList.remove('dark')
                    setTheme('light')
                }
            })
    }, [theme])

    return (
        <button
            className="rounded-lg border border-neutral-200 p-2.5 hover:bg-neutral-100 dark:border-neutral-900/50 hover:dark:bg-neutral-900/20"
            onClick={handleClick}
        >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
        </button>
    )
}
