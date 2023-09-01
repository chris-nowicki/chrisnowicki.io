import Image from 'next/image'
import { Location } from '@/assets/Icons'

// types
type ContactInfoType = {
  name: string
  email: string
  location: string
}

type HeaderProps = {
  image: string
  data: ContactInfoType
}

export default function Header({ image, data }: HeaderProps) {
  return (
    <div className="mb-4 flex gap-4 rounded border border-neutral-200 p-2 text-center dark:border-background-dark md:text-left">
      <div className="flex w-1/4">
        <Image
          src={image}
          width={200}
          height={200}
          className="rounded"
          priority
          alt="chris nowicki"
        />
      </div>
      <div className="flex w-3/4 flex-col items-center justify-center">
        <h1 className="text-2xl md:text-5xl">{data.name}</h1>
        <a
          href="mailto:chris@chrisnowicki.io"
          className="ml-1 text-lg text-purple-light hover:underline dark:text-purple-dark md:text-2xl"
        >
          {data.email}
        </a>
        <p className="text-md mt-1 flex items-center md:text-xl">
          <Location size={24} />
          {data.location}
        </p>
      </div>
    </div>
  )
}
