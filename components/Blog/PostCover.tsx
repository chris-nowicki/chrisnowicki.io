'use client'
import { CldImage } from 'next-cloudinary'

export default function PostCover({ cover, alt }) {
  return (
    <CldImage
      src={cover}
      alt={`${alt} cover image`}
      width={768}
      height={438}
      className="rounded-lg border-none"
      loading="eager"
    />
  )
}
