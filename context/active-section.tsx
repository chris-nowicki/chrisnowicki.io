'use client'
import React, { useState, useContext, createContext, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import path from 'path'

type ActiveSectionProviderProps = {
  children: React.ReactNode
}

type ActiveSectionContextType = {
  activeSection: string
  setActiveSection: React.Dispatch<React.SetStateAction<string>>
}

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null)

export const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionProviderProps) => {
  const [activeSection, setActiveSection] = useState<string>('')
  const pathname = usePathname()

  useEffect(() => {
    pathname === '/'
      ? setActiveSection('Home')
      : setActiveSection(
          path.basename(
            pathname.replace('/', '').charAt(0).toUpperCase() +
              pathname.slice(2)
          )
        )
  }, [pathname])

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext)
  if (context === null) {
    throw new Error(
      'useActiveSection must be used within a ActiveSectionProvider'
    )
  }
  return context
}
