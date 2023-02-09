import { useMemo, useState } from 'react'
import { Sun, Moon } from '../icons'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ThemeToggle() {
    const [enabled, setEnabled] = useState(false)
    const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light')

    const handleClick = () => {
        setEnabled(enabled === false ? true : false)
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useMemo(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
            setEnabled(true)
        } else {
            document.documentElement.classList.remove('dark')
            setEnabled(false)
        }
        localStorage.setItem('theme', theme)

        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', ({ matches }) => {
                if (matches) {
                    document.documentElement.classList.add('dark')
                    setEnabled(true)
                } else {
                    document.documentElement.classList.remove('dark')
                    setEnabled(false)
                }
            })
    }, [theme])

    return (
        <Switch
            checked={enabled}
            onChange={handleClick}
            className={classNames(
                enabled ? 'bg-purpleDark' : 'bg-neutral-200',
                'relative inline-flex h-10 w-20 flex-shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none'
            )}
        >
            <span className="sr-only">Use setting</span>
            <span
                className={classNames(
                    enabled ? 'translate-x-10' : 'translate-x-1',
                    'pointer-events-none relative inline-block h-8 w-8 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                )}
            >
                <span
                    className={classNames(
                        enabled
                            ? 'opacity-0 duration-100 ease-out'
                            : 'opacity-100 duration-200 ease-in',
                        'absolute inset-0 flex h-full w-full items-center justify-center text-bgDark transition-opacity'
                    )}
                    aria-hidden="true"
                >
                    <Moon size={12} />
                </span>
                <span
                    className={classNames(
                        enabled
                            ? 'opacity-100 duration-200 ease-in'
                            : 'opacity-0 duration-100 ease-out',
                        'absolute inset-0 flex h-full w-full items-center justify-center text-purpleDark transition-opacity'
                    )}
                    aria-hidden="true"
                >
                    <Sun size={12} />
                </span>
            </span>
        </Switch>
    )
}
