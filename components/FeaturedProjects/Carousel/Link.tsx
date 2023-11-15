import clsx from 'clsx'
import { GitHub, OpenOutline } from '@/assets/Icons'

type ProjectLink = {
  url: string
  icon: string
  name: string
  liveSiteUrl: boolean
}

export default function Link({ url, icon, name, liveSiteUrl }: ProjectLink) {
  return (
    <>
      <a
        href={url}
        className={clsx(
          'hover:bg-activeColor-dark/85 flex cursor-pointer items-center justify-center border  border-borderColor-dark p-2 text-foreground hover:text-purple-dark md:bg-background-dark  md:p-0',
          liveSiteUrl ? 'w-1/2' : 'w-full'
        )}
        target="_blank"
      >
        {icon == 'github' ? <GitHub size={16} /> : <OpenOutline size={16} />}
        <span className="text-md ml-2">{name}</span>
      </a>
    </>
  )
}
