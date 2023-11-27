import NavBar from '@/components/NavBar/NavBar'
import { AnalyticsWrapper } from '@/components/Analytics'
import { ActiveSectionContextProvider } from '@/context/active-section'
import ThemeProvider from './ThemeProvider'
import { Toaster } from 'react-hot-toast'
import type { Metadata } from 'next'
import type { SeoType } from '@/types/types'
import Footer from '@/components/Footer/Footer'
import '@/app/globals.css'

// font
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

// sanity cms query
import { getSEO, getResume } from '@/sanity/sanity-queries'

export async function generateMetadata(): Promise<Metadata | undefined> {
  const seo: SeoType = await getSEO()

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const resumeURL = await getResume()

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.className} bg-gray-50 dark:bg-background-light dark:text-foreground`}
      >
        <ActiveSectionContextProvider>
          <ThemeProvider>
            {/* main portfolio site */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-3xl">
                <NavBar />
                <main className="z-10">
                  {children}
                  <AnalyticsWrapper />
                </main>
                <Footer resumeURL={resumeURL} />
              </div>
            </div>

            {/* toaster for when an email is sent from the contact form */}
            <Toaster position="top-center" toastOptions={{ duration: 5000 }} />
          </ThemeProvider>
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
