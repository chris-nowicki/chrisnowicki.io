import { useActive } from '../../hooks/useActive'

export default function Button({ name, data, activeCheck, handleClick }) {
    const isActive = useActive(activeCheck, data)
    return (
        <button
            className={`text-md rounded border border-neutral-200 p-2 hover:bg-neutral-100 dark:border-gray-900 dark:text-textDark dark:hover:bg-gray-900/25 ${
                isActive ?
                'dark:border-bg-gray-900 bg-bgDark text-textDark dark:text-[#bd93f9] hover:bg-bgDark hover:text-textDark dark:bg-gray-900  dark:hover:bg-gray-900' :
                'text-black'
            }`}
            onClick={() => handleClick()}
        >
            {name}
        </button>
    )
}
