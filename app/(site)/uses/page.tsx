import SectionHeading from '@/components/SectionHeading'
import AffiliateLink from '@/components/AffiliateLink'
import { Metadata } from 'next'
import CldImage from '@/components/CldImage'

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
    url: 'https://chrisnowicki.io/blog',
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

const hw = [
  { name: 'LG 27" 5K UHD Monitor', link: 'https://a.co/d/3GTjqUC' },
  { name: 'LG 28" DualUp Monitor', link: 'https://a.co/d/dIDu3P9' },
  { name: 'CalDigit TS4 Docking Station', link: 'https://a.co/d/9vBnxSh' },
  { name: 'Lacie 2BIG Raid', link: 'https://a.co/d/8t33fbe' },
  { name: 'MX Master 3S Mouse', link: 'https://a.co/d/fLPmSLo' },
  { name: 'Apple Magic Trackpad', link: 'https://a.co/d/3Py1Fc8' },
  { name: 'Keychron Q1 Pro Keyboard', link: 'https://a.co/d/405cpbJ' },
  {
    name: 'OMOTON Vertical Laptop Desktop Stand',
    link: 'https://a.co/d/3HkFNW7',
  },
  {
    name: 'Audio Engine A2+ Speakers',
    link: 'https://a.co/d/6IRbVvj',
  },
]

const sw = [
  { name: '1Password', link: 'https://1password.com/' },
  { name: 'Arc Browser', link: 'https://arc.net/' },
  { name: 'CleanMyMac', link: 'https://macpaw.com/cleanmymac' },
  { name: 'CleanShot X', link: 'https://cleanshot.com/' },
  { name: 'Discord', link: 'https://discord.com/' },
  { name: 'Figma', link: 'https://www.figma.com/' },
  { name: 'MindNode', link: 'https://mindnode.com/' },
  { name: 'RayCast', link: 'https://www.raycast.com/' },
  { name: 'Rectangle', link: 'https://rectangleapp.com/' },
  { name: 'Slack', link: 'https://slack.com/' },
  { name: 'Spotify', link: 'https://www.spotify.com/' },
  { name: 'Things3', link: 'https://culturedcode.com/things/' },
  { name: 'VS Code', link: 'https://code.visualstudio.com/' },
  { name: 'Zoom', link: 'https://zoom.us/' },
]

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
        repo's to go into more depth on the tools I use.
      </span>

      {/* setup image */}
      <CldImage
        src="https://res.cloudinary.com/ddetibihn/image/upload/f_auto,q_auto,w_768,c_limit/v1713891400/portfolio/uses/s4hwrs0deshum1skhne2.jpg"
        width={768}
        height={700 * 0.75}
        className="aspect-video w-full rounded-lg shadow-md shadow-black"
        alt="My setup"
      />

      {/* laptop */}
      <div className="mt-8 flex w-full flex-col">
        <h2 className="mb-2 font-semibold">Laptop</h2>
        <AffiliateLink
          href="https://www.apple.com/shop/buy-mac/macbook-pro/16-inch-m3-max"
          name='16" MacBook Pro M1 Max'
        />
      </div>

      {/* desk */}
      <div className="mt-8 flex w-full flex-col">
        <h2 className="mb-2 font-semibold">Desk</h2>
        <AffiliateLink
          href="https://www.upliftdesk.com"
          name="Uplift V2 Standing Desk"
        />
        <AffiliateLink
          href="https://grovemade.com/product/wood-desk-shelf/"
          name="LG Grovemade Desk Shelf with Drawer"
        />
      </div>

      {/* hardware */}
      <div className="mt-8 flex w-full flex-col">
        <h2 className="mb-2 font-semibold">Hardware</h2>
        {hw.map((item, i) => (
          <AffiliateLink key={i} href={item.link} name={item.name} />
        ))}
      </div>

      {/* software */}
      <div className="mt-8 flex w-full flex-col">
        <h2 className="mb-2 font-semibold">Software</h2>
        {sw.map((item, i) => (
          <AffiliateLink key={i} href={item.link} name={item.name} />
        ))}
      </div>
    </section>
  )
}
