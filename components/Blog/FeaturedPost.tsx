'use client'
import { Suspense } from 'react'
import { CldImage } from 'next-cloudinary'
import Icon from '../Icon'
import Link from 'next/link'
import FeaturedPostSkeleton from './FeaturedPostSkeleton'
import { motion } from 'framer-motion'

export default function FeaturedPost({ post }) {
  return (
    <div className="relative flex w-full flex-wrap rounded-xl border group-hover:shadow-none md:flex-row">
      <Suspense fallback={<FeaturedPostSkeleton />}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex w-full md:w-1/2 md:rounded-bl-xl md:rounded-tl-none"
        >
          <CldImage
            src={post.cover}
            width={383}
            height={272}
            alt={post.title}
            quality={75}
            className="w-full rounded-tl-xl rounded-tr-xl md:rounded-bl-xl md:rounded-tr-none"
          />
        </motion.div>
      </Suspense>
      <div className="flex w-full flex-col p-4 md:w-1/2">
        <span className="text-lg font-semibold">{post.title}</span>
        <p className="text-muted-foreground">{post.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-primary">
            <Icon id="clock" className="h-4 w-4" />
            {post.readingTime}
          </div>
          <Link
            href={post.slug}
            prefetch={true}
            className="group flex items-center gap-1 text-primary"
          >
            Read More{' '}
            <Icon
              id="arrow-right"
              className="transition-all ease-in-out group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
      {/* badge */}
      <div className="absolute -right-4 -top-2 flex items-center gap-2 text-white md:left-1 md:top-1">
        <Icon id="star" className="" size={26} />
        <span className="text-lg font-semibold">Featured Article</span>
      </div>
    </div>
  )
}
