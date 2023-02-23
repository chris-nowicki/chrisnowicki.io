import './globals.css'
import Nav from '../components/NavBar/Nav'
import Footer from 'components/Footer'
import { AnalyticsWrapper } from 'components/Analytics'
import Script from 'next/script'

// fonts
import { Roboto } from '@next/font/google'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

// types
import { Links } from '../ts/types'

// sanity.io client & query
import { fetchSanity, links as query } from '../lib/sanity'

export const metadata = {
    title: {
        default: 'Chris Nowicki',
        template: '%s | Chris Nowicki',
    },
    description: 'Full-Stack Developer & Technology Nerd.',
    openGraph: {
        title: 'Chris Nowicki',
        description: 'Full-Stack Developer & Technology Nerd.',
        url: 'https://chrisnowicki.io',
        siteName: 'Chris Nowicki',
        // images: [
        //   {
        //     url: 'https://leerob.io/og.jpg',
        //     width: 1920,
        //     height: 1080,
        //   },
        // ],
        locale: 'en-US',
        type: 'website',
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
        title: 'Chris NOwicki',
        card: 'summary_large_image',
    },
    icons: {
        shortcut: '/favicon.ico',
    },
    // verification: {
    //   google:
    //   yandex:
    // },
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    let links: Links[]
    let showResume: boolean

    const res = await fetchSanity(query)
    links = res[0].links
    showResume = res[0].showResume

    return (
        <html lang="en" className={roboto.className}>
            <head>
                <Script src='../lib/theme.js'/>
            </head>
            <body className="bg-gray-50 dark:bg-bgDark dark:text-textDark">
                <div className="flex h-screen flex-col items-center justify-between">
                    <div className="w-full max-w-3xl">
                        <Nav links={links} showResume={showResume} />
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
