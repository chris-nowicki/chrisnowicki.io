import { Separator } from './ui/separator'
import { cn } from '@/utils/utils'

interface SectionDividerProps {
  className?: string
}

export default function SectionDivider({ className }: SectionDividerProps) {
  return (
    <Separator
      orientation="vertical"
      className={cn(
        'my-6 h-12 w-1 rounded-full sm:block md:my-12 md:h-16',
        className
      )}
    />
  )
}
