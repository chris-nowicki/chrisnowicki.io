import clsx from 'clsx'

// hooks
import { useActive } from '../../../../hooks/useActive'

// types
type TechFilterButton = {
  name: string
  currentFilter: string
  activeCheck: string
  handleClick: any
}

const activeCSS = `rounded border border-neutral-200 p-2 text-sm dark:border-background-dark dark:text-foreground md:text-lg dark:border-bg-background-dark bg-background-light text-foreground dark:bg-background-dark dark:text-[#bd93f9]`
const css = `rounded border border-neutral-200 p-2 text-sm hover:bg-neutral-100 dark:border-background-dark dark:text-foreground dark:hover:bg-background-dark/25 md:text-lg`

export default function Button({
  name,
  currentFilter,
  activeCheck,
  handleClick,
}: TechFilterButton) {
  const isActive = useActive(activeCheck, currentFilter)
  return (
    <button
      className={clsx(isActive ? activeCSS : css)}
      onClick={() => handleClick()}
    >
      {name}
    </button>
  )
}
