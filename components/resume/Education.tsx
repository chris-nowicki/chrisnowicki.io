import { EducationType } from '@/types/resume'

export default function Education({
  education,
}: {
  education: EducationType[]
}) {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="mb-1">
        <h1 className="mb-2 text-center text-xl uppercase text-purple-light dark:text-purple-dark md:text-left md:text-2xl">
          Education
        </h1>

        <div className="flex w-full flex-col rounded border border-neutral-200 p-4 dark:border-background-dark">
          {education.map((school: EducationType, index: number) => (
            <div key={index + school.school}>
              <div className="text-md mb-1 w-full border-b border-neutral-200 pb-2 dark:border-background-dark md:text-lg">
                <div className="flex flex-col justify-between md:flex-row">
                  <div className="flex flex-col gap-0 md:flex-row md:gap-1">
                    <p className="flex gap-1">
                      <b>{school.school}</b>{' '}
                      <span className="hidden md:block">|</span>{' '}
                    </p>
                    <p>
                      <em>{school.degree}</em>
                    </p>
                  </div>
                  {school.displayDate && (
                    <span className="hidden text-purple-light dark:text-purple-dark md:block">
                      {' '}
                      {new Date(school.dateEarned).getFullYear()}
                    </span>
                  )}
                </div>
                {school.details && (
                  <ul className="ml-6 mt-2 list-outside list-disc marker:text-purple-light dark:marker:text-purple-dark md:mt-0">
                    {school.details.map((detail: string) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
