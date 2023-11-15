'use client'
import React, { useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from '@/assets/Icons'
import { cn } from '@/lib/utils'

type ModeToggleProps = {
  className?: string
}

export default function ModeToggle({ className }: ModeToggleProps) {
  const { theme, setTheme, systemTheme } = useTheme()

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    localTheme === null && setTheme('light')
  }, [])

  return (
    <button
      className={cn(
        'mr-4 cursor-pointer rounded-lg border border-gray-300 p-2 text-lg text-purple-light shadow hover:bg-gray-300/20 dark:border-borderColor-dark/20',
        className
      )}
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light')
      }}
    >
      <Sun classProps="hidden dark:block " />
      <Moon classProps="block dark:hidden " />
    </button>
  )
}
