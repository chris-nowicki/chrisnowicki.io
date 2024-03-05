import type { IconName } from 'public/icons/name.d.ts'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  id: IconName
  size?: number
}

const Icon = ({ id, size = 24, ...props }: IconProps) => {
  return (
    <svg width={size} height={size} {...props}>
      <use href={`/icons/sprite.svg#${id}`} />
    </svg>
  )
}

export default Icon
