'use client'
import { usePathname } from 'next/navigation'
import { useMemo, useState } from 'react'
import { navItems } from '@/lib/data'
import MainNav from './MainNav'
import MobileNav from './MobileNav'

export default function NavBar() {
  const [activeSection, setActiveSection] = useState<string>('')
  const pathname = usePathname()

  useMemo(() => {
    const matchingNavItem = navItems.find((item) => item.href === pathname)
    const blogPattern = /^\/blog\/.+/

    if (blogPattern.test(pathname)) {
      setActiveSection('Blog')
    } else if (matchingNavItem) {
      setActiveSection(matchingNavItem.name)
    } else {
      setActiveSection('Home')
    }
  }, [pathname, navItems])

  return (
    <nav className="mb-24 flex w-full max-w-3xl justify-center md:mb-12">
      {/* nav bar */}
      <div className="fixed z-30 flex w-full items-center justify-between bg-background py-4 shadow dark:shadow-foreground/20 md:relative md:px-0 md:py-0 md:shadow-none">
        <MainNav activeSection={activeSection} />
        <MobileNav />
      </div>
    </nav>
  )
}
