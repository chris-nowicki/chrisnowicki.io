'use client'
import { FC } from 'react'
import { CldImage as CldImageDefault } from 'next-cloudinary'

interface CLDImageProps {
  src: string
  width: number
  height: number
  className: string
  alt: string
}

const CldImage: FC<CLDImageProps> = ({
  src,
  width,
  height,
  className,
  alt,
}): JSX.Element => {
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

export default CldImage
