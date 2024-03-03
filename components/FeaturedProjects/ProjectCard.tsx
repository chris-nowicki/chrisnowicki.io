import { ProjectType } from '@/types/types'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
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
      <CardContent className="flex flex-col items-center gap-4">
        <Image
          src={project.image}
          className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
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
