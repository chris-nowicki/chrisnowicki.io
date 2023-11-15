import Image from 'next/image'
import { GitHub, OpenOutline } from '@/assets/Icons'

type ProjectCardProps = {
  project: {
    name: string
    excerpt: string
    image: string
    tags: {
      name: string
    }[]
    gitHubUrl: string
    liveSiteUrl: string
  }
  isSelected: boolean
}

export default function ProjectCard({ project, isSelected }: ProjectCardProps) {
  return (
    <>
      {isSelected && (
        <div className="group relative flex h-64 w-full gap-2 overflow-hidden rounded-lg border border-black p-4 transition-all duration-200 ease-in-out hover:border-purple-light hover:shadow-lg dark:hover:border-purple-dark">
          <Image
            src={project.image}
            alt={project.name}
            width={1280}
            height={800}
            className="absolute -left-96 top-4 rounded shadow-lg transition-all duration-500 ease-in-out group-hover:rotate-1 group-hover:scale-95"
            loading={'lazy'}
          />

          <div className="ml-[375px] flex w-1/2 flex-col items-center justify-between gap-4 pl-3">
            <div className="flex flex-col gap-2">
              <h1 className="w-full text-center text-xl uppercase dark:text-foreground">
                {project.name}
              </h1>
              <ul className="flex flex-wrap justify-center gap-2">
                {project.tags.map((tag) => (
                  <li className="rounded-full bg-gray-200 px-2 py-1 text-xs dark:bg-foreground dark:text-black">
                    {tag.name}
                  </li>
                ))}
              </ul>
              <p className="">{project.excerpt}</p>
            </div>
            <div className="flex w-full justify-center gap-2">
              <a
                href={project.gitHubUrl}
                className="flex w-1/2 items-center justify-center gap-2 rounded-lg bg-black py-1 text-white hover:bg-purple-light dark:hover:bg-purple-dark"
              >
                <GitHub size={18} />
                code
              </a>
              {project.liveSiteUrl && (
                <a
                  href={project.liveSiteUrl}
                  className="flex w-1/2 items-center justify-center gap-2 rounded-lg bg-black py-1 text-white hover:bg-purple-light dark:hover:bg-purple-dark"
                >
                  <OpenOutline size={18} />
                  live site
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
