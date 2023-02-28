import Link from 'next/link'

import {
    Linkedin,
    GitHub,
    Twitter,
    Instagram,
    ArrowIcon,
} from 'components/Icons'

export default function SocialLink({ href, name }) {
    return (
        <Link
            href={href}
            className="flex w-full cursor-pointer items-center justify-between rounded-md border border-neutral-200 p-4 hover:bg-neutral-100 dark:border-background-dark dark:hover:bg-background-dark/25"
            target="_blank"
            prefetch={false}
        >
            <div className="flex items-center gap-2">
                <ArrowIcon size={12} />
                follow me on {name}
            </div>
            {name === 'linkedin' ? (
                <Linkedin size={24} />
            ) : name === 'github' ? (
                <GitHub size={24} />
            ) : name === 'twitter' ? (
                <Twitter size={24} />
            ) : (
                <Instagram size={24} />
            )}
        </Link>
    )
}
