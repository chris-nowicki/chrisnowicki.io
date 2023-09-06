import { MDB, MYSQL, NEXTJS, SANITY, TAILWIND, TS, VERCEL } from '@/assets/Icons'
import { BsDownload } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'

export const navItems = [
  {
    name: 'Home',
    hash: '/#home',
  },

  {
    name: 'Projects',
    hash: '/#projects',
  },
  {
    name: 'Skills',
    hash: '/#skills',
  },
  {
    name: 'Blog',
    hash: '/#blog',
  },
  {
    name: 'Contact',
    hash: '/#contact',
  },
] as const

type ContactInfoType = {
  Contact: {
    text: string
    icon: JSX.Element
  }
  DownloadCV: {
    text: string
    icon: JSX.Element
  }
}

export const contactInfo: ContactInfoType = {
  Contact: {
    text: 'Contact',
    icon: <MdOutlineEmail />,
  },
  DownloadCV: {
    text: 'Download CV',
    icon: (
      <BsDownload className="transition-all group-hover:translate-y-1 sm:hidden md:block" />
    ),
  },
}

export const TechStackIcons = [
  { icon: <NEXTJS />, URL: 'https://nextjs.org/' },
  { icon: <TS />, URL: 'https://www.typescriptlang.org/' },
  { icon: <TAILWIND />, URL: 'https://tailwindcss.com/' },
  { icon: <SANITY />, URL: 'https://www.sanity.io/' },
  { icon: <MYSQL />, URL: 'https://www.mysql.com/' },
  { icon: <MDB />, URL: 'https://www.mongodb.com/' },
  { icon: <VERCEL />, URL: 'https://www.vercel.com' },
] as const

