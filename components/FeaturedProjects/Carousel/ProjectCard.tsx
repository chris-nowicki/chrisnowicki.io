import Image from 'next/image'
import { GitHub, OpenOutline } from '@/assets/Icons'
// types
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
        <div className="group relative flex h-64 w-full gap-2 overflow-hidden rounded-lg border border-black p-4 transition-all duration-200 ease-in-out hover:border-purple-light hover:shadow-lg">
          <Image
            src={project.image}
            alt={project.name}
            width={1280}
            height={800}
            className="absolute -left-96 top-4 rounded shadow-lg transition-all duration-500 ease-in-out group-even:-right-[400px] group-even:left-[initial] group-hover:rotate-1 group-hover:scale-95 group-even:group-hover:-rotate-1"
            loading={'lazy'}
          />

          <div className="ml-[375px] flex w-1/2 flex-col items-center justify-between gap-4 pl-3 group-even:ml-0 group-even:pl-0">
            <div className="flex flex-col gap-2">
              <h1 className="w-full text-center text-xl uppercase">
                {project.name}
              </h1>
              <ul className="flex flex-wrap gap-2 justify-center">
                {project.tags.map((tag) => (
                  <li className="rounded-full bg-gray-200 px-2 py-1 text-xs">
                    {tag.name}
                  </li>
                ))}
              </ul>
              <p className="">{project.excerpt}</p>
            </div>
            <div className="flex w-full gap-2 justify-center">
              <a
                href={project.gitHubUrl}
                className="flex w-1/2 items-center justify-center gap-2 rounded-lg bg-black py-1 text-white hover:bg-purple-light"
              >
                <GitHub size={16} />
                code
              </a>
              {project.liveSiteUrl && (
                <a
                  href={project.liveSiteUrl}
                  className="flex w-1/2 items-center justify-center gap-2 rounded-lg bg-black py-1 text-white hover:bg-purple-light"
                >
                  <OpenOutline size={16} />
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
