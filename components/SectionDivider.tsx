import { DoubleDownIcon } from '@/assets/Icons'
import { cn } from '@/lib/utils'

type SectionDividerProps = {
  type: 'line' | 'chevron'
  className?: string
}

export default function SectionDivider({
  type,
  className,
}: SectionDividerProps) {
  if (type === 'line') {
    return (
      <div
        className={cn(
          'my-6 h-12 w-1 rounded-full bg-gray-200 dark:bg-opacity-20 sm:block md:my-16 md:h-16',
          className
        )}
      />
    )
  } else {
    return (
      <DoubleDownIcon
        size={98}
        classProps={cn(
          'my-8 text-gray-200 dark:text-opacity-20 md:my-12',
          className
        )}
      />
    )
  }
}
