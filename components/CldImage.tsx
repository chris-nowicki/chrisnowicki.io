'use client'
import { FC } from 'react'
import { CldImage as CldImageDefault, CldImageProps } from 'next-cloudinary'

const CldImage: FC<CldImageProps> = (props): JSX.Element => {
  return <CldImageDefault {...props} />
}

export default CldImage
