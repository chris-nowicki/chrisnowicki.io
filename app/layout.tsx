import './globals.css'
import Nav from '../components/NavBar/Nav'
import Footer from 'components/Footer'
import type { Metadata } from 'next'

// vercel analytics
import { AnalyticsWrapper } from 'components/Analytics'

// fonts
import { Roboto } from '@next/font/google'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-roboto',
    display: 'swap',
})

// sanity.io client & query
import { getSettings, getSEO, urlFor } from '../lib/sanity'

export async function generateMetadata(): Promise<Metadata | undefined> {
    const seo = await getSEO()
    const OG = urlFor(seo.image).url()

    return {
        title: {
            default: seo.name,
            template: `%s | ${seo.name}`,
        },
        description: seo.description,
        openGraph: {
            title: seo.name,
            description: seo.description,
            url: seo.url,
            siteName: seo.siteName,
            images: [
                {
                    url: OG,
                    width: 1920,
                    height: 1080,
                },
            ],
            locale: 'en-US',
            type: seo.type,
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
        icons: {
            shortcut: '/favicon.ico',
        },
    }
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const settingData = getSettings()
    const [settings] = await Promise.all([settingData])

    return (
        <html lang="en" className={roboto.variable}>
            <body className="bg-gray-50 dark:bg-bgDark dark:text-textDark">
                <div className="flex h-screen flex-col items-center justify-between">
                    <div className="w-full max-w-3xl">
                        <Nav
                            links={settings.links}
                            showResume={settings.showResume}
                        />
                        <main>
                            {children}
                            <AnalyticsWrapper />
                        </main>
                    </div>
                    <Footer />
                </div>
            </body>
        </html>
    )
}