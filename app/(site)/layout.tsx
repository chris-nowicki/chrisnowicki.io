import NavBar from '@/components/NavBar'
import { AnalyticsWrapper } from '@/components/Analytics'
import { ActiveSectionContextProvider } from '@/context/active-section'
import '@/app/globals.css'
import { Toaster } from 'react-hot-toast'

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
        <div className="absolute right-[3rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#cfb3f8] blur-[10rem] dark:bg-[#a88bd4] dark:blur-[15rem] sm:w-[68.75rem]"></div>
        <div className="2xl:left-[-5rem] absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#e1e1dc] blur-[10rem] dark:bg-[#111827] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem]"></div>

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

        <Toaster position="bottom-right" toastOptions={{ duration: 5000 }} />

        <div className="fixed bottom-0 z-[-10] hidden w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#44475a"
              fill-opacity="1"
              d="M0,224L80,240C160,256,320,288,480,293.3C640,299,800,277,960,272C1120,267,1280,277,1360,282.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </body>
    </html>
  )
}
