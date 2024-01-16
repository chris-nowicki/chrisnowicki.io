import Image from 'next/image'
import type { ProjectType } from '@/types/types'
import ProjectLink from './ProjectLink'
import { Badge } from '@/components/ui/badge'

type ProjectCardProps = {
  project: ProjectType
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex h-72 w-full gap-2 overflow-hidden rounded-lg border bg-accent p-2 transition-all duration-200 ease-in-out hover:shadow-lg md:p-2 md:py-2">
      <Image
        src={project.image}
        alt={project.name}
        width={1280}
        height={800}
        className="absolute -left-96 top-4 hidden rounded shadow-lg transition-all duration-500 ease-in-out group-hover:rotate-1 group-hover:scale-95 md:block"
        loading={'eager'}
      />

      <div className="flex w-full flex-col items-center justify-between px-2 md:ml-[375px] md:w-1/2 md:gap-4 md:pl-3">
        <div className="flex flex-col gap-1">
          <h4 className="text-center text-lg uppercase md:text-xl">
            {project.name}
          </h4>
          <div className="flex flex-wrap justify-center gap-1">
            {project.tags.map((tag) => (
              <Badge key={tag.name} className="rounded-full text-xs lowercase">
                {tag.name}
              </Badge>
            ))}
          </div>
          <p className="text-md -mt-2 md:text-inherit text-center">{project.excerpt}</p>
        </div>
        <div className="flex w-full justify-center gap-2">
          <ProjectLink url={project.gitHubUrl} name="github" />
          {project.liveSiteUrl && (
            <ProjectLink url={project.liveSiteUrl} name="live site" />
          )}
        </div>
      </div>
    </div>
  )
}
