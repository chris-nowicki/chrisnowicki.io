import TechnicalProjectCard from './TechnicalProjectCard'

// types
import { TechnicalProjectType } from '../../../../types/resume'

type TechnicalProjectProps = {
  projects: TechnicalProjectType[]
}

export default function TechnicalProjects({ projects }: TechnicalProjectProps) {
  return (
    <div className="mb-8 flex w-full flex-col gap-4">
      <div className="mb-1">
        <h1
          id="technicalProjects"
          className="mb-2 text-center text-xl uppercase text-purple-light dark:text-purple-dark md:text-left md:text-2xl"
        >
          Technical Projects
        </h1>
        <div className="flex flex-col gap-2">
          {projects.map((project: TechnicalProjectType, index: number) => (
            <TechnicalProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
