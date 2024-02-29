import Icon from '@/components/Icon'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

type ProjectLinkProps = {
  url: string
  name: string
}

export default function ProjectLink({ url, name }: ProjectLinkProps) {
  return (
    <Link
      href={url}
      className={cn(
        buttonVariants({ variant: 'default' }),
        'flex w-full items-center justify-center gap-2 rounded-lg px-4 py-1 md:w-1/2 md:px-0'
      )}
      target="_blank"
      prefetch={false}
    >
      {name == 'github' ?
        <Icon id="logo-github" size={18} />
      : <Icon id="open" size={18} />}
      {name == 'github' ? 'code' : 'live site'}
    </Link>
  )
}
