import { FC, JSX } from 'react'
import { cn } from '@/utils/utils'

type SectionHeadingProps = {
  children: React.ReactNode
  className?: string
}

const SectionHeading: FC<SectionHeadingProps> = ({
  children,
  className,
}): JSX.Element => {
  return (
    <span
      className={cn(
        'w-full border-b-0 pb-0 text-center text-2xl font-semibold uppercase md:text-5xl',
        className
      )}
    >
      {children}
    </span>
  )
}

export default SectionHeading
