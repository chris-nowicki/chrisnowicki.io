'use client'
import SectionHeading from '@/components/SectionHeading'
import { CldImage } from 'next-cloudinary'

export default function Uses() {
  return (
    <section className="mx-6 flex flex-col items-start md:mx-0">
      <SectionHeading className="-mb-6 text-left">Uses</SectionHeading>
      <p className="mb-6 text-muted-foreground">
        All the the HW / SW I use on a daily basis!
      </p>

      {/* setup image */}
      <CldImage
        src="https://res.cloudinary.com/ddetibihn/image/upload/f_auto,q_auto,w_768,c_limit/v1713891400/portfolio/uses/s4hwrs0deshum1skhne2.jpg"
        width="768"
        height={700 * 0.75}
        className="aspect-video w-full rounded-lg shadow-xl"
        alt="My setup"
      />
    </section>
  )
}
