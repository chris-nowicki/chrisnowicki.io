'use client'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

type ProviderProps = {
  children: React.ReactNode
}

export default function ThemeProvider({ children }: ProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
    >
      {children}
    </NextThemesProvider>
  )
}
