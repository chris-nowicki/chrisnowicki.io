'use client'
import { FC, JSX } from 'react'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes'

const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  ...props
}): JSX.Element => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export default ThemeProvider
