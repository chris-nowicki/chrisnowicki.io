import { ProjectType } from '@/types/types'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

import ButtonLink from '../ui/button-link'
import Icon from '../Icon'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Badge } from '../ui/badge'

type ProjectCardProps = {
  project: ProjectType
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group w-[375px] hover:border-primary">
      <CardHeader className="px-0">
        <CardTitle className="text-center">{project.name}</CardTitle>
        <div className="flex justify-center gap-1 pt-1">
          {project.tags.map((tag, index) => (
            <Badge
              key={index + tag.name}
              variant="secondary"
              className="rounded-full"
            >
              {tag.name}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="relative h-[220px]">
        <div className="absolute z-10 flex h-[200px] w-[320px] items-center justify-center bg-secondary px-4 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">
          {project.excerpt}
        </div>
        <Image
          src={project.image}
          className="absolute z-20 rounded-md opacity-100 shadow-lg shadow-primary/20 transition-all duration-500 ease-in-out group-hover:opacity-0"
          width={320}
          height={200}
          alt={`Screenshot of ${project.name}`}
          loading="lazy"
        />
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-center gap-4">
          {project.liveSiteUrl && (
            <ButtonLink
              href={project.liveSiteUrl}
              className="w-1/2 rounded-lg"
              targetBlank={true}
            >
              live site
              <Icon id="open" size={24} />
            </ButtonLink>
          )}
          <ButtonLink
            href={project.gitHubUrl}
            className={cn(
              'w-full rounded-lg',
              project.liveSiteUrl ? 'w-1/2' : 'w-full'
            )}
            variant="outline"
          >
            <Icon
              id="logo-github"
              size={24}
              className="text-black dark:text-white"
            />
            code
          </ButtonLink>
        </div>
      </CardFooter>
    </Card>
  )
}
