import NavBar from '@/components/NavBar'
import { AnalyticsWrapper } from '@/components/Analytics'
import { ActiveSectionContextProvider } from '@/context/active-section'
import { Toaster } from 'react-hot-toast'
import '@/app/globals.css'

// types
import type { Metadata } from 'next'
import { SeoType } from 'types'

// font
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

// sanity cms query
import { getSEO } from '@/sanity/sanity-queries'

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
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-gray-50 dark:bg-background-light dark:text-foreground`}
      >
        {/* colored background */}
        <div className="absolute right-[3rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#cfb3f8] blur-[10rem] dark:bg-[#a88bd4] dark:blur-[15rem] "></div>
        <div className="2xl:left-[-5rem] absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#e1e1dc] blur-[10rem] dark:bg-[#111827]  md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem]"></div>

        {/* main portfolio site */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-3xl">
            <ActiveSectionContextProvider>
              <NavBar />
              <main className="z-10">
                {children}
                <AnalyticsWrapper />
              </main>
            </ActiveSectionContextProvider>
          </div>
        </div>

        {/* toaster for when an email is sent from the contact form */}
        <Toaster position="bottom-right" toastOptions={{ duration: 5000 }} />
      </body>
    </html>
  )
}
