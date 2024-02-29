'use client'
import { useTheme } from 'next-themes'

type IconProps = {
  id: string
  size: number
  className?: string
  focusable?: boolean
}

export default function Icon({
  id,
  size,
  className,
  focusable = true,
}: IconProps): JSX.Element {
  const { theme } = useTheme()
  const isDarkMode = theme === 'dark'

  const iconName = id === 'logo-devto' && isDarkMode ? 'logo-devto-dark' : id

  return (
    <svg width={size} height={size} className={className} focusable={focusable}>
      <use href={`/icons/sprite.svg#${iconName}`} />
    </svg>
  )
}
