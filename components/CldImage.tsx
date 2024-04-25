'use client'
import { CldImage as CldImageDefault } from 'next-cloudinary'

interface Props {
  src: string
  width: number
  height: number
  className: string
  alt: string
}

export default function CldImage({
  src,
  width,
  height,
  className,
  alt,
}: Props) {
  return (
    <CldImageDefault
      src={src}
      width={width}
      height={height}
      className={className}
      alt={alt}
      loading="eager"
    />
  )
}
