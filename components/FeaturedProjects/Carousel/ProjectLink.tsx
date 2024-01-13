import clsx from 'clsx'
import { GitHub, OpenOutline } from '@/assets/Icons'
import { Button } from '@/components/ui/button'

type ProjectLink = {
  url: string
  name: string
}

export default function ProjectLink({ url, name }: ProjectLink) {
  return (
    <Button className="rounded-lg px-4 py-1 md:w-1/2 md:px-0 ">
      <a
        href={url}
        className={clsx('flex items-center justify-center gap-2 ')}
        target="_blank"
      >
        {name == 'github' ? <GitHub size={18} /> : <OpenOutline size={18} />}
        {name == 'github' ? 'code' : 'live site'}
      </a>
    </Button>
  )
}
