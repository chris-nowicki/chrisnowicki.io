'use client'
import MainNav from './MainNav'
import MobileNav from './MobileNav'

export default function NavBar() {
  return (
    <nav className="mb-24 flex w-full max-w-3xl justify-center md:mb-12">
      {/* nav bar */}
      <div className="fixed z-30 flex w-full items-center justify-between bg-background py-4 shadow dark:shadow-foreground/20 md:relative md:px-0 md:py-0 md:shadow-none">
        <MainNav />
        <MobileNav />
      </div>
    </nav>
  )
}
