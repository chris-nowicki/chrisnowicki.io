import { TechStackIcons } from '@/lib/data'

export default async function TechStack() {
  return (
    <section className="md:px-4.5 mt-8 flex w-full flex-wrap items-center justify-center gap-3 rounded-full border px-6 py-4 shadow-lg dark:bg-foreground md:mt-12 md:w-3/4 md:justify-between md:gap-0 md:py-2">
      {TechStackIcons.map((techStack, index) => (
        <a
          key={index}
          href={techStack.URL}
          className="duration-100 ease-in-out hover:scale-105"
          target="_blank"
          aria-label={techStack.aria}
        >
          {techStack.icon}
        </a>
      ))}
    </section>
  )
}
