import About from '../components/About'

// sanity.io client & query
import { getImage } from '../lib/sanity'

import {
    NEXTJS,
    TS,
    JS,
    MDB,
    ASTRO,
    MYSQL,
    TAILWIND,
    SANITY,
} from 'components/Icons'
import Link from 'next/link'

export default async function Home() {
    const imageData = getImage()

    const [chrisnowicki] = await Promise.all([imageData])

    return (
        <div className="px-10 md:px-0">
            <About image={chrisnowicki} />
            {/* <div className="mt-3 flex w-3/4 flex-col">
                <div className="flex w-3/4 flex-col rounded-t border border-neutral-200 bg-neutral-100 uppercase text-foreground">
                    <span className="border-b border-neutral-200 bg-background-light p-1 text-center">
                        made with
                    </span>
                    <div className="flex flex-wrap items-center gap-2 p-.5 justify-evenly">
                        <JS size={24} />
                        <TS size={24} />
                        <Link href="https://nextjs.org" target="_blank">
                            <NEXTJS />
                        </Link>
                        <Link href="https://sanity.io" target="_blank">
                            <SANITY />
                        </Link>
                        <Link href="https://tailwindcss.com" target="_blank">
                            <TAILWIND />
                        </Link>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
