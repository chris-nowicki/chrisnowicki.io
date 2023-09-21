import React from 'react'
import { BsStopwatch } from 'react-icons/bs'
import { PortableText } from '@portabletext/react'
import { nowPortableText } from '@/lib/portable-text'
import { PortableTextBlock } from 'sanity'
import format from 'date-fns/format'

type NowProps = {
  post: {
    publishDate: string
    content: PortableTextBlock[]
  }
}

export default function Post({ post }: NowProps) {
  return (
    <>
      <div className="flex w-full flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <BsStopwatch size={36} />
          <span className="text-3xl">NOW</span>
        </div>
        <span className="text-xl">
          {format(new Date(post.publishDate), 'MMMM dd, yyyy')}
        </span>
      </div>
      <div className="mt-8 flex flex-col gap-4 text-xl text-gray-600 dark:text-foreground">
        <PortableText value={post.content} components={nowPortableText} />
      </div>
    </>
  )
}
