import Image from 'next/image'

// types
type ProjectCardProps = {
  name: string
  excerpt: string
  image: string
  tags: {
    name: string
  }[]
  gitHubUrl: string
  liveSiteUrl: string
  isSelected: boolean
}

export default function ProjectCard({
  name,
  excerpt,
  image,
  tags,
  gitHubUrl,
  liveSiteUrl,
  isSelected,
}: ProjectCardProps) {
  return (
    <>
      {isSelected && (
        <div
          className="group relative flex h-64 w-full gap-2 overflow-hidden rounded-lg border border-black p-4 transition-all duration-200 ease-in-out hover:border-purple-light hover:shadow-lg"
        >
          <Image
            src={image}
            alt={name}
            width={1280}
            height={800}
            className="absolute -left-96 top-4 rounded shadow-lg transition-all duration-500 ease-in-out group-even:-right-[400px] group-even:left-[initial] group-hover:rotate-1 group-hover:scale-95 group-even:group-hover:-rotate-1"
            loading={'lazy'}
          />

          <div className="ml-[375px] flex w-1/2 flex-col items-center justify-between gap-4 pl-3 group-even:ml-0 group-even:pl-0">
            <div className="flex flex-col gap-2">
              <h1 className="w-full text-center text-xl uppercase">{name}</h1>
              <ul className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <li className="rounded-full bg-gray-200 px-2 py-1 text-xs">
                    {tag.name}
                  </li>
                ))}
              </ul>
              <p className="">{excerpt}</p>
            </div>
            <div className="flex w-full gap-2">
              <a
                href={gitHubUrl}
                className="flex w-1/2 items-center justify-center gap-1 rounded-lg bg-black py-1 text-white hover:bg-purple-light"
              >
                code
              </a>
              {liveSiteUrl && (
                <a
                  href={liveSiteUrl}
                  className="flex w-1/2 items-center justify-center gap-1 rounded-lg bg-black py-1 text-white hover:bg-purple-light"
                >
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
