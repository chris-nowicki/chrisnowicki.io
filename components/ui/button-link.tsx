import React from 'react'
import cn from 'classnames'
import Icon from '../Icon'
import Link from 'next/link'
import { buttonVariants } from './button'

interface ButtonLinkProps {
  href: string
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
  children?: React.ReactNode
  iconId?: string
  iconSize?: number
  iconFocusable?: boolean
  className?: string
}

export default function ButtonLink({
  href,
  variant,
  children,
  iconId,
  iconSize,
  iconFocusable = false,
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant }),
        'group flex items-center gap-2 rounded-lg py-6 text-xl',
        className
      )}
    >
      {children}
      {iconId && (
        <span>
          <Icon id={iconId} size={iconSize} focusable={iconFocusable} />
        </span>
      )}
    </Link>
  )
}
