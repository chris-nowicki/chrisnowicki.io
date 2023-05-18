import { ProfessionalExperienceType } from '../../../types/resume'

export default function ProfessionalExperience({
  experience,
}: {
  experience: ProfessionalExperienceType
}) {
  return (
    <div className="mb-8 flex w-full flex-col gap-4">
      <div className="mb-1">
        <h1 className="mb-2 text-center text-xl uppercase text-purple-light dark:text-purple-dark md:text-start md:text-2xl">
          Professional Experience
        </h1>

        <div className="flex flex-col rounded border border-neutral-200 dark:border-background-dark">
          <div className="text-md mb-2 flex w-full flex-col justify-between border-b border-neutral-200 bg-neutral-100 p-4 dark:border-background-dark dark:bg-background-dark/25 md:flex-row md:text-lg">
            <p className="text-center md:text-left">
              <b>{experience.position}</b> |
              <a href={experience.companyURL} target="_blank">
                <em> {experience.company}</em>
              </a>
            </p>
            <div className="flex justify-center text-purple-light dark:text-purple-dark md:justify-start">
              {new Date(experience.startDate).getFullYear()} -{' '}
              {experience.endDate
                ? new Date(experience.endDate).getFullYear()
                : 'Present'}
            </div>
          </div>
          <div className="flex flex-col p-4">
            <ul className="text-md ml-6 list-outside list-disc marker:text-purple-light dark:marker:text-purple-dark md:text-lg">
              {experience.accomplishments.map(
                (accomplishment: string, index: number) =>
                  index !== 0 && (
                    <li key={index + accomplishment}>{accomplishment}</li>
                  )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
