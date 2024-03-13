'use client'
import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Icon from '../Icon'
import { navItems } from '@/lib/data'
import { ThemeToggle } from './ThemeToggle'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex w-full items-center justify-between px-4 md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Icon id="menu" size={25} />
        </SheetTrigger>
        <SheetContent side="left" className="w-screen">
          <div className="mt-7 flex flex-col">
            {navItems.map(({ name, href }) => (
              <MobileLink
                key={name + href}
                href={href}
                className="text-3xl"
                onOpenChange={setOpen}
                aria-label={name}
              >
                {`/${name.toLocaleLowerCase()}`}
              </MobileLink>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      <ThemeToggle />
    </div>
  )
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode
  onOpenChange?: (open: boolean) => void
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) {
  const router = useRouter()

  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  )
}
