'use client'
import React, { useEffect } from 'react'
import { useTheme } from 'next-themes'
import { BiSun, BiMoon } from 'react-icons/bi'
import { cn } from '@/lib/utils'

type ModeToggleProps = {
  className?: string
}

function ModeToggle({className}: ModeToggleProps) {
  const { theme, setTheme, systemTheme } = useTheme()

  // useEffect(() => {
  //   if (systemTheme != theme) {
  //     setTheme(systemTheme)
  //   }
  // }, [systemTheme])

  return (
    <button
      className={cn("cursor-pointer rounded-full border border-borderColor-light dark:border-borderColor-dark/20 p-2 mr-2 shadow text-lg text-purple-light hover:bg-gray-300/20", className)}
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light')
      }}
    >
      <BiSun className="hidden dark:block " />
      <BiMoon className="block dark:hidden " />
    </button>
  )
}

export default ModeToggle