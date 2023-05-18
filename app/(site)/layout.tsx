import type { Metadata } from 'next'
import Nav from '../../components/NavBar'
import { AnalyticsWrapper } from '../../components/Analytics'
import '../globals.css'

// types
import { Seo } from '../../types/seo'

// font
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
})

// sanity cms query
import { getSEO } from '../../sanity/sanity-queries'

export async function generateMetadata(): Promise<Metadata | undefined> {
  const seo: Seo = await getSEO()

  return {
    title: {
      default: seo.name,
      template: `%s | ${seo.name}`,
    },
    description: seo.description,
    openGraph: {
      type: 'website',
      title: seo.name,
      description: seo.description,
      url: seo.url,
      siteName: seo.siteName,
      images: [
        {
          url: seo.image,
          width: 1920,
          height: 1080,
        },
      ],
      locale: 'en-US',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    twitter: {
      title: seo.name,
      card: 'summary_large_image',
    },
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="bg-gray-50 dark:bg-background-light dark:text-foreground">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-3xl">
            <Nav />
            <main>
              {children}
              <AnalyticsWrapper />
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
