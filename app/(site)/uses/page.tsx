'use client'
import SectionHeading from '@/components/SectionHeading'
import { CldImage } from 'next-cloudinary'

const hw = [
  {
    name: '16" MacBook Pro M1 Max',
    link: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch-m3-max',
  },
  { name: 'LG 27" 5K UHD Monitor', link: 'https://a.co/d/3GTjqUC' },
  { name: 'LG 28" DualUp Monitor', link: 'https://a.co/d/dIDu3P9' },
  { name: 'CalDigit TS4 Docking Station', link: 'https://a.co/d/9vBnxSh' },
  { name: 'Lacie 2BIG Raid', link: 'https://a.co/d/8t33fbe' },
  { name: 'MX Master 3S Mouse', link: 'https://a.co/d/fLPmSLo' },
  { name: 'Apple Magic Trackpad', link: 'https://a.co/d/3Py1Fc8' },
]

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
        className="aspect-video w-full rounded-lg shadow-md shadow-black"
        alt="My setup"
      />

      <div className="mt-8 flex w-full flex-col">
        <h2 className="mb-2">Hardware</h2>
        {hw.map((item, i) => (
          <a
            key={i}
            href={item.link}
            className="mb-2 flex items-center hover:underline"
          >
            {item.name}
          </a>
        ))}
      </div>
    </section>
  )
}
