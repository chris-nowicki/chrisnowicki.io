import { TechStackIcons } from '@/lib/data'

export default function TechStack() {
  return (
    <section className="mt-8 flex w-3/4 flex-wrap items-center justify-center gap-3 rounded-full border p-2 shadow-lg dark:bg-foreground dark:py-2 md:mt-12 md:justify-between md:gap-0 md:px-12">
      {TechStackIcons.map((techStack, index) => (
        <a
          key={index}
          href={techStack.URL}
          className="duration-100 ease-in-out hover:scale-105"
          target="_blank"
        >
          {techStack.icon}
        </a>
      ))}
    </section>
  )
}
