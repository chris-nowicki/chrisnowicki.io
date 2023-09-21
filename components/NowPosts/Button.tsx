import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import clsx from 'clsx'

type ButtonProps = {
  data: any
  direction: 'left' | 'right'
}

export default function Button({ data, direction }: ButtonProps) {
  const buttonClass = clsx(
    data
      ? direction === 'left'
        ? 'group-hover:-translate-x-1'
        : 'group-hover:translate-x-1'
      : ''
  )
  const directionText = direction === 'left' ? 'newer' : 'older'
  return (
    <button
      className="group flex items-center gap-2 rounded-xl border border-black p-4 text-lg shadow shadow-black drop-shadow-2xl hover:border-purple-light hover:text-purple-light hover:shadow-none disabled:border-gray-400 disabled:text-gray-400 disabled:shadow-none"
      disabled={!data}
    >
      {direction === 'left' && <BsArrowLeft className={buttonClass} />}

      <span>{directionText}</span>

      {direction === 'right' && <BsArrowRight className={buttonClass} />}
    </button>
  )
}
