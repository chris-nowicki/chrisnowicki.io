import { FC } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import Link from 'next/link'
import CldImage from './CldImage'

interface YouTubeLinkProps {
  youTubeId: string
  title: string
  alt: string
}

const YouTubeLink: FC<YouTubeLinkProps> = ({
  youTubeId,
  title,
  alt,
}): JSX.Element => {
  return (
    <Link
      href={`https://youtu.be/${youTubeId}`}
      className="group"
      target="_blank"
    >
      <Card className="w-full transition-all duration-100 ease-in-out hover:border-primary md:w-[375px]">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CldImage
            src={youTubeId}
            alt={alt}
            width={375}
            height={200}
            deliveryType="youtube"
            loading="lazy"
            className="rounded-lg transition-all duration-100 ease-in-out group-hover:scale-105"
          />
        </CardContent>
      </Card>
    </Link>
  )
}

export default YouTubeLink
