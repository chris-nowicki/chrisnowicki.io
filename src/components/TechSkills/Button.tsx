import { useActive } from '../../hooks/useActive'

// Types
type TechFilterButton = {
    name: string
    currentFilter: string
    activeCheck: string
    handleClick: any
}

export default function Button({
    name,
    currentFilter,
    activeCheck,
    handleClick,
}: TechFilterButton) {
    const isActive = useActive(activeCheck, currentFilter)
    return (
        <button
            className={`rounded border border-neutral-200 p-2 text-sm hover:bg-neutral-100 dark:border-gray-900 dark:text-textDark dark:hover:bg-gray-900/25 md:text-lg ${
                isActive
                    ? 'dark:border-bg-gray-900 bg-bgDark text-textDark hover:bg-bgDark hover:text-textDark dark:bg-gray-900 dark:text-[#bd93f9]  dark:hover:bg-gray-900'
                    : 'text-black'
            }`}
            onClick={() => handleClick()}
        >
            {name}
        </button>
    )
}
