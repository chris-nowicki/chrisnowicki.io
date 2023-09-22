'use client'
import React, { useEffect } from 'react'
import { BsStopwatch } from 'react-icons/bs'
import { PortableText } from '@portabletext/react'
import { nowPortableText } from '@/lib/portable-text'
import { PortableTextBlock } from 'sanity'
import format from 'date-fns/format'
import Link from 'next/link'
import Button from './Button'
import NowFooter from './NowFooter'
import { useActiveSection } from '@/context/active-section'

type PostProps = {
  post: {
    current: {
      publishDate: string
      content: PortableTextBlock[]
    }
    older?: {
      slug: string
    }
    newer?: {
      slug: string
    }
  }
}

export default function Post({ post }: PostProps) {
  const { activeSection, setActiveSection } = useActiveSection()

  useEffect(() => {
    activeSection != 'Now' && setActiveSection('Now')
  }, [])

  return (
    <section className="mx-6 mt-20 flex flex-col items-center md:mx-0 md:mt-32">
      {/* header */}
      <div className="flex w-full flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <BsStopwatch size={36} />
          <span className="text-3xl">NOW</span>
        </div>
        <span className="text-xl">
          {format(new Date(post.current.publishDate), 'MMMM dd, yyyy')}
        </span>
      </div>

      <div className="mt-8 flex flex-col gap-4 text-xl text-gray-600 dark:text-foreground">
        <PortableText
          value={post.current.content}
          components={nowPortableText}
        />
      </div>

      {/* pagination buttons */}
      {(post.newer || post.older) && (
        <div className="mt-16 flex w-full justify-between">
          {post.newer && (
            <Link href={`/now/${post.newer.slug}`} prefetch>
              <span>
                <Button data={post.newer} direction="left" />
              </span>
            </Link>
          )}
          {post.older && (
            <Link href={`/now/${post.older.slug}`} prefetch>
              <span>
                <Button data={post.older} direction="right" />
              </span>
            </Link>
          )}
        </div>
      )}

      {/* Footer */}
      <NowFooter />
    </section>
  )
}
