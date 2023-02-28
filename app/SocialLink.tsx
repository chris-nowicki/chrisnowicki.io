import Link from 'next/link'

import { Linkedin, GitHub, ArrowIcon } from '../components/Icons'

export default function SocialLink({ href, name }) {
    return (
        <Link
            href={href}
            className="flex w-full items-center justify-between gap-2 rounded border border-neutral-200 py-3 px-4 text-lg hover:bg-neutral-100 dark:border-background-dark dark:hover:bg-background-dark/25 md:w-auto"
            target="_blank"
            prefetch={false}
        >
            <div className="flex items-center gap-2">
                {name === 'linkedin' ? (
                    <Linkedin size={24} />
                ) : (
                    <GitHub size={24} />
                )}
                {name}
            </div>
            <ArrowIcon size={12} />
        </Link>
    )
}
