import Link from 'next/link'
import clsx from 'clsx'
import {
  Linkedin,
  GitHub,
  Twitter,
  PDF,
  DEVTO,
} from '../../assets/Icons'

type SocialLinks = {
  icon: string
  content: any
  width?: string
  paddingX?: number
  paddingY?: number
  padding?: number
  fontSize?: string
  url: string
}

export default function SocialLink({
  fontSize = '',
  icon,
  paddingX = 4,
  paddingY = 2,
  padding,
  url,
  width = 'w-full',
}: SocialLinks) {
  return (
    <Link
      href={url}
      className={clsx(
        'flex w-full cursor-pointer items-center justify-center rounded-lg border dark:text-foreground border-borderColor-light hover:bg-activeColor-light dark:border-gray-300/20 dark:hover:bg-gray-300/20',
        padding ? `p-${padding}` : `px-${paddingX} py-${paddingY}`,
        `text-${fontSize}`,
        `md:${width}`
      )}
      target="_blank"
      prefetch={false}
    >
      <div className="flex items-center gap-2">
        {icon === 'pdf' ? (
          <PDF size={24} />
        ) : icon === 'linkedin' ? (
          <Linkedin size={24} />
        ) : icon === 'github' ? (
          <GitHub size={24} />
        ) : icon === 'dev' ? (
          <DEVTO size={24} />
        ) : (
          <Twitter size={24} />
        )}

        {icon === 'pdf' ? 'Download Resumé' : ''}
      </div>
    </Link>
  )
}
