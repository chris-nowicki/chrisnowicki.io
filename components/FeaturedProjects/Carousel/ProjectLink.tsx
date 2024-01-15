import clsx from 'clsx'
import { Button } from '@/components/ui/button'
import Icon from '@/components/Icon'

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
        {name == 'github' ?
          <Icon id="logo-github" size={18} />
        : <Icon id="open" size={18} />}
        {name == 'github' ? 'code' : 'live site'}
      </a>
    </Button>
  )
}
