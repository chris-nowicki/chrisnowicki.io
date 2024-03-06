import Link from 'next/link'
import SocialMetrics from './SocialMetrics/SocialMetrics'
import SectionDivider from './SectionDivider'

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
    <footer className="mb-20 flex flex-col items-center px-4 text-left md:px-0 md:text-center">
      <SectionDivider />
      <div className="flex w-full flex-col justify-between gap-4 rounded-xl border p-4 shadow-xl shadow-primary/20 md:flex-row">
        <div className="flex w-full flex-col items-center md:w-1/2 md:items-start md:justify-between">
          <span className="mb-4 text-3xl font-semibold">Sitemap</span>
          {footerLinks.map((link, index) => (
            <Link key={index} href={link.href} className="hover:text-primary">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-4 md:w-1/2  md:gap-0">
          <span className="text-3xl font-semibold">Links</span>
          <SocialMetrics metrics={false} footer={true} />
        </div>
      </div>
      {/* about this website information */}
      <p className="text-left text-xs md:px-4">
        <span className="font-semibold">Built with:</span> Next.js, TypeScript,
        Tailwind CSS, shadcn/ui, Framer Motion, React Email & Resend, Sanity
        CMS, PlanetScale MySQL, and hosted on Vercel.
      </p>
    </footer>
  )
}
