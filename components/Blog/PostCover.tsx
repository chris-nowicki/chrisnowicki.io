'use client'
import { Suspense } from 'react'
import { CldImage } from 'next-cloudinary'
import { Skeleton } from '../ui/skeleton'
import Icon from '../Icon'
import { motion } from 'framer-motion'

export default function PostCover({ cover, alt }) {
  return (
    <Suspense fallback={<PostCoverSkeleton />}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="div"
      >
        <CldImage
          src={cover}
          alt={`${alt} cover image`}
          width={768}
          height={438}
          className="rounded-lg border-none"
        />
      </motion.div>
    </Suspense>
  )
}

export function PostCoverSkeleton() {
  return (
    <Skeleton className="h-[438px] w-[768px] rounded-lg border-none bg-foreground/10 ">
      <Icon id="image" className="h-16 w-16 text-muted-foreground" />
    </Skeleton>
  )
}
