import { FC } from 'react'

import cn from 'classnames'
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
  targetBlank?: boolean
}

const ButtonLink: FC<ButtonLinkProps> = ({
  href,
  variant,
  children,
  className,
  targetBlank = false,
}): JSX.Element => {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant }),
        'group flex items-center gap-2 rounded-lg py-6 text-xl',
        className
      )}
      target={targetBlank ? '_blank' : ''}
    >
      {children}
    </Link>
  )
}

export default ButtonLink
