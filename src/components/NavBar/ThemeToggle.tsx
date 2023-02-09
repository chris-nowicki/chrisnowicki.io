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
    }, [theme])

    return (
        <button
            className="flex items-center rounded border-2 border-gray-300 p-1 shadow-md hover:border-purple-600 hover:text-purple-600 hover:shadow-purple-600/25 dark:border-textDark/25 dark:text-textDark dark:hover:border-purpleDark dark:hover:text-purpleDark"
            onClick={handleClick}
        >
            {theme === 'light' ? <Moon /> : <Sun />}
        </button>
    )
}
