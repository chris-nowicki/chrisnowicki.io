import Image from 'next/image'
import type { ProjectType } from '@/types/types'
import ProjectLink from './ProjectLink'

type ProjectCardProps = {
  project: ProjectType
  isSelected: boolean
}

export default function ProjectCard({ project, isSelected }: ProjectCardProps) {
  return (
    <>
      {isSelected && (
        <div className="group relative flex h-64 w-full gap-2 overflow-hidden rounded-lg border border-black p-2 transition-all duration-200 ease-in-out hover:border-purple-light hover:shadow-lg dark:border-gray-300/20 dark:bg-gray-300/10 dark:hover:border-purple-dark md:p-4">
          <Image
            src={project.image}
            alt={project.name}
            width={1280}
            height={800}
            className="absolute -left-96 top-4 hidden rounded shadow-lg transition-all duration-500 ease-in-out group-hover:rotate-1 group-hover:scale-95 md:block"
            loading={'eager'}
          />

          <div className="flex w-full flex-col items-center justify-between gap-4 md:ml-[375px] md:w-1/2 md:pl-3">
            <div className="flex flex-col gap-2">
              <h1 className="text-center text-lg uppercase dark:text-foreground md:text-xl">
                {project.name}
              </h1>
              <ul className="flex flex-wrap justify-center gap-1 md:gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag.name}
                    className="rounded-full bg-gray-200 px-2 py-1 text-xs dark:bg-foreground dark:text-black md:px-1"
                  >
                    {tag.name}
                  </li>
                ))}
              </ul>
              <p>{project.excerpt}</p>
            </div>
            <div className="flex w-full justify-center gap-2">
              <ProjectLink url={project.gitHubUrl} name="github" />
              {project.liveSiteUrl && (
                <ProjectLink url={project.liveSiteUrl} name="live site" />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
