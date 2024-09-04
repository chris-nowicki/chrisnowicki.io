import { FC } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import Link from 'next/link'

interface YouTubeLinkProps {
  title: string
  id: string
  alt: string
}

const YouTubeLink: FC<YouTubeLinkProps> = ({ id, title, alt }): JSX.Element => {
  return (
    <Link href={`https://youtu.be/${id}`} className="group" target="_blank">
      <Card className="w-full transition-all duration-100 ease-in-out hover:border-primary md:w-[375px]">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
            alt={alt}
            width={375}
            height={200}
            className="rounded-lg transition-all duration-100 ease-in-out group-hover:scale-105"
          />
        </CardContent>
      </Card>
    </Link>
  )
}

export default YouTubeLink
