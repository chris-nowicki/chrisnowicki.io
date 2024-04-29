import SectionHeading from '@/components/SectionHeading'
import AffiliateLink from '@/components/uses/AffiliateLink'
import { Metadata } from 'next'
import CldImage from '@/components/CldImage'
import { hw_accessories, hw_streaming, sw, laptop, desk } from '@/lib/uses'
import UsesSection from '@/components/UsesSection'

// metadata
const title: string = `Chris Nowicki's Uses`
const description: string = `A list of the hardware and software I use on a daily basis.`

const ogSearchParams = new URLSearchParams()
ogSearchParams.set('page', 'USES')
ogSearchParams.set('description', description)

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: 'https://chrisnowicki.io/uses',
    images: [
      {
        url: `/api/og?${ogSearchParams.toString()}`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: [`/api/og?${ogSearchParams.toString()}`],
  },
}

export default function Uses() {
  return (
    <section className="mx-6 flex flex-col items-start md:mx-0">
      <SectionHeading className="mb-4 text-left">Uses</SectionHeading>
      <span className="mb-4">
        Being a total tech nerd 🤓, I am always trying new technologies /
        products! Below is a list of all the the HW / SW I use on a daily basis.
        Please note that some of the links are affiliate links.
      </span>
      <span className="mb-4">
        I also have my{' '}
        <a
          href="https://github.com/chris-nowicki/dotfiles"
          target="_blank"
          className="text-primary hover:underline"
        >
          dotfiles
        </a>
        {' and '}
        <a
          href="https://github.com/chris-nowicki/mac-setup"
          target="_blank"
          className="text-primary hover:underline"
        >
          mac-setup{' '}
        </a>
        repositories that go into more depth on the tools I use.
      </span>

      {/* setup image */}
      <CldImage
        src="https://res.cloudinary.com/ddetibihn/image/upload/f_auto,q_auto,w_768,c_limit/v1713891400/portfolio/uses/s4hwrs0deshum1skhne2.jpg"
        width={768}
        height={700 * 0.75}
        className="aspect-video w-full rounded-lg"
        alt="My setup"
      />

      {/* sections */}
      <UsesSection name="Laptop" items={laptop} />
      <UsesSection name="Desk" items={desk} />
      <UsesSection name="Accessories" items={hw_accessories} />
      <UsesSection name="Streaming" items={hw_streaming} />
      <UsesSection name="Software" items={sw} />
    </section>
  )
}
