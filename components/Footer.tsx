import Link from 'next/link'
import { Separator } from './ui/separator'
import SocialMetrics from './SocialMetrics/SocialMetrics'

const footerLinks = [
  { name: '/home', href: '/' },
  { name: '/projects', href: '/#projects' },
  { name: '/speaking', href: '/#speaking' },
  { name: '/blog', href: '/blog' },
  { name: '/contact', href: '/contact' },
  { name: '/community', href: '/community-speaking' },
]

export default async function Footer() {
  return (
    <footer className="my-10 flex flex-col items-center px-4 text-left md:px-0 md:text-center">
      <Separator className="my-5 md:my-10" />
      <div className="flex w-full flex-col justify-between gap-4 md:flex-wrap">
        <div className="flex w-full flex-col items-center md:w-1/2 md:items-start">
          <span className="text-3xl font-semibold mb-4 md:mb-0">Sitemap</span>
          {footerLinks.map((link, index) => (
            <Link key={index} href={link.href} className="hover:text-primary">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-4 md:w-1/2 md:items-start md:gap-0">
          <span className="text-3xl font-semibold">Links</span>
          <SocialMetrics metrics={false} footer={true} />
        </div>
      </div>
    </footer>
  )
}
