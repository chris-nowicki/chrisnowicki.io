import clsx from 'clsx'
import { GitHub, OpenOutline } from '@/assets/Icons'

type ProjectLink = {
  url: string
  name: string
}

export default function ProjectLink({ url, name }: ProjectLink) {
  return (
    <>
      <a
        href={url}
        className={clsx(
          'flex items-center justify-center gap-2 rounded-lg bg-black px-4 py-1 text-white hover:bg-purple-light dark:hover:bg-purple-dark md:w-1/2 md:px-0'
        )}
        target="_blank"
      >
        {name == 'github' ? <GitHub size={18} /> : <OpenOutline size={18} />}
        {name == 'github' ? 'code' : 'live site'}
      </a>
    </>
  )
}
