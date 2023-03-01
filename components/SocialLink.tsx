import Link from 'next/link'
import { SocialLinks } from 'ts/types'
import {
    ArrowIcon,
    Linkedin,
    GitHub,
    Twitter,
    Instagram,
    PDF,
    Download,
} from './Icons'

export default function SocialLink({
    arrowPlacement = 'after',
    arrowSize = 12,
    content,
    fontSize = '',
    icon,
    paddingX = 4,
    paddingY = 2,
    padding,
    url,
    width = 'w-full',
}: SocialLinks) {
    console.log(!padding)
    return (
        <Link
            href={url}
            className={`flex w-full md:${width} cursor-pointer gap-2 items-center justify-between rounded-md border border-borderColor-light hover:bg-activeColor-light dark:border-borderColor-dark dark:hover:bg-activeColor-dark/25
        ${
            padding ? `p-${padding}` : `px-${paddingX} py-${paddingY}`
        } ${`text-${fontSize}`}    
        `}
            target="_blank"
            prefetch={false}
        >
            <div className="flex items-center gap-2">
                {arrowPlacement === 'before' ? (
                    <ArrowIcon size={12} />
                ) : icon === 'pdf' ? (
                    <PDF size={24} />
                ) : icon === 'linkedin' ? (
                    <Linkedin size={24} />
                ) : icon === 'github' ? (
                    <GitHub size={24} />
                ) : icon === 'twitter' ? (
                    <Twitter size={24} />
                ) : (
                    <Instagram size={24} />
                )}

                {icon === 'pdf' ? 'Download Resumé' : content}
            </div>
            {arrowPlacement === 'before' ? (
                icon === 'linkedin' ? (
                    <Linkedin size={24} />
                ) : icon === 'github' ? (
                    <GitHub size={24} />
                ) : icon === 'twitter' ? (
                    <Twitter size={24} />
                ) : (
                    <Instagram size={24} />
                )
            ) : icon === 'pdf' ? (
                <Download size={24} />
            ) : (
                <ArrowIcon size={arrowSize} />
            )}
        </Link>
    )
}
