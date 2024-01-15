import {
  MDB,
  MYSQL,
  NEXTJS,
  SANITY,
  TAILWIND,
  TS,
  VERCEL,
  REACT,
  Astro,
  SHADCN,
} from '@/assets/Icons'

import Icon from '@/components/Icon'

export const navItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
] as const

export const socialLinks = [
  {
    name: 'Linkedin',
    URL: 'https://www.linkedin.com/in/chris-nowicki/',
    icon: <Icon id="logo-linkedin" size={28} />,
  },
  {
    name: 'GitHub',
    URL: 'https://github.com/chris-nowicki',
    icon: <Icon id="logo-github" size={28} />,
  },
  {
    name: 'Twitter',
    URL: 'https://twitter.com/iamwix',
    icon: <Icon id="logo-x" size={28} />,
  },
  {
    name: 'Twitch',
    URL: 'https://www.twitch.tv/chriswix',
    icon: <Icon id="logo-twitch" size={28} />,
  },
  {
    name: 'DEV',
    URL: 'https://dev.to/chrisnowicki',
    icon: <Icon id="logo-devto" size={28} />,
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
    icon: <Icon id="envelope" size={20} />,
  },
  DownloadCV: {
    text: 'Download CV',
    icon: <Icon id="download" size={20} className="sm:hidden md:block" />,
  },
}

export const TechStackIcons = [
  { icon: <NEXTJS />, URL: 'https://nextjs.org/' },
  { icon: <REACT />, URL: 'https://reactjs.org/' },
  { icon: <Astro />, URL: 'https://astro.build/' },
  { icon: <TS />, URL: 'https://www.typescriptlang.org/' },
  { icon: <SHADCN />, URL: 'https://ui.shadcn.com/' },
  { icon: <TAILWIND />, URL: 'https://tailwindcss.com/' },
  { icon: <SANITY />, URL: 'https://www.sanity.io/' },
  { icon: <MYSQL />, URL: 'https://www.mysql.com/' },
  { icon: <MDB />, URL: 'https://www.mongodb.com/' },
  { icon: <VERCEL />, URL: 'https://www.vercel.com' },
] as const
