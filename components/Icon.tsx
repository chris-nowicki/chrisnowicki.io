type IconProps = {
  id: string
  size: number
  className?: string
  focusable?: boolean
}

export default function Icon({
  id,
  size,
  className,
  focusable = true,
}: IconProps): JSX.Element {
  return (
    <svg width={size} height={size} className={className} focusable={focusable}>
      <use href={`/icons/sprite.svg#${id}`} />
    </svg>
  )
}
