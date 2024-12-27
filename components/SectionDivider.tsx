import { FC, JSX } from 'react'

import { cn } from '@/utils/utils'
import { Separator } from './ui/separator'

interface SectionDividerProps {
  className?: string
}

const SectionDivider: FC<SectionDividerProps> = ({
  className,
}): JSX.Element => {
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

export default SectionDivider
