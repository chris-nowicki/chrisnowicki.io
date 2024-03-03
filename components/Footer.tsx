import SectionDivider from './SectionDivider'
import SocialMetrics from './SocialMetrics/SocialMetrics'

export default async function Footer() {
  return (
    <footer className="mb-10 flex flex-col items-center justify-center px-4 text-left md:px-0 md:text-center">
      <SectionDivider />
      <SocialMetrics />
      {/* about this website information */}
      <p className="text-left text-xs">
        <span className="font-semibold">Built with:</span> Next.js, TypeScript,
        Tailwind CSS, shadcn/ui, Framer Motion, React Email & Resend, Sanity
        CMS, PlanetScale MySQL, and hosted on Vercel.
      </p>
    </footer>
  )
}
