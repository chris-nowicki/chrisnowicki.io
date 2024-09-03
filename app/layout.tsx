import { FC } from 'react'

import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import '@/app/globals.css'
import { seo } from '@/lib/site'

import { AnalyticsWrapper } from '@/components/AnalyticsWrapper'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar/NavBar'
import ScrollToTop from '@/components/ScrollToTop'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeProvider } from '../components/ThemeProvider'

const inter = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(seo.url),
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

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }): JSX.Element => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col items-center">
            <div className="w-full max-w-3xl">
              <NavBar />
              <main className="z-10">
                {children}
                <AnalyticsWrapper />
                <SpeedInsights />
              </main>
              <Footer />
            </div>
          </div>

          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
