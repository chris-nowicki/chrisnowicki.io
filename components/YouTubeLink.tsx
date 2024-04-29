import Image from 'next/image'
import Link from 'next/link'

interface Props {
  id: string
  alt: string
}

export default function YouTubeLink({ id, alt }: Props) {
  return (
    <Link href={`https://youtu.be/${id}`} className="group" target="_blank">
      <Image
        src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={alt}
        width={375}
        height={200}
        className="rounded-lg transition-all duration-100 ease-in-out group-hover:scale-105 "
      />
    </Link>
  )
}
