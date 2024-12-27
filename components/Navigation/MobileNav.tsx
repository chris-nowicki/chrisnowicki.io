'use client'
import { FC, JSX, useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { navLinks } from '@/config/links'
import ThemeToggle from './ThemeToggle'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'

const MobileNav: FC = (): JSX.Element => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex w-full items-center justify-between px-4 md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          {/* hamburger icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 12h16M4 6h16M4 18h16"
            />
          </svg>
        </SheetTrigger>
        <SheetContent side="left" className="w-screen">
          <div className="mt-7 flex flex-col">
            {navLinks.map(({ name, href }, index) => (
              <MobileLink
                key={`${name}-${href}-${index}`}
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

export default MobileNav

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
