import { cn } from '@/lib/utils'

type SectionDividerProps = {
  className?: string
}

export default function SectionDivider({ className }: SectionDividerProps) {
  return (
    <div
      className={cn(
        'my-6 h-12 w-1 rounded-full bg-gray-200 dark:bg-opacity-20 sm:block md:my-16 md:h-16',
        className
      )}
    />
  )
}
