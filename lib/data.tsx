import {
  MDB,
  MYSQL,
  NEXTJS,
  SANITY,
  TAILWIND,
  TS,
  VERCEL,
  DEVTO,
  GitHub,
  Linkedin,
  Twitter,
  REACT,
  Download,
  Email
} from '@/assets/Icons'

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
  {
    name: 'Now',
    hash: '/now',
  },
  
] as const

export const socialLinks = [
  {
    name: 'Linkedin',
    URL: 'https://www.linkedin.com/in/chris-nowicki/',
    icon: <Linkedin size={28} />,
  },
  {
    name: 'GitHub',
    URL: 'https://github.com/chris-nowicki',
    icon: <GitHub size={28} />,
  },
  {
    name: 'Twitter',
    URL: 'https://twitter.com/iamwix',
    icon: <Twitter size={28} />,
  },
  {
    name: 'DEV',
    URL: 'https://dev.to/chrisnowicki',
    icon: <DEVTO size={28} />,
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
    icon: <Email />,
  },
  DownloadCV: {
    text: 'Download CV',
    icon: (
      <Download size={20} classProps="transition-all group-hover:translate-y-1 sm:hidden md:block" />
    ),
  },
}

export const TechStackIcons = [
  { icon: <NEXTJS />, URL: 'https://nextjs.org/' },
  { icon: <REACT />, URL: 'https://reactjs.org/'},
  { icon: <TS />, URL: 'https://www.typescriptlang.org/' },
  { icon: <TAILWIND />, URL: 'https://tailwindcss.com/' },
  { icon: <SANITY />, URL: 'https://www.sanity.io/' },
  { icon: <MYSQL />, URL: 'https://www.mysql.com/' },
  { icon: <MDB />, URL: 'https://www.mongodb.com/' },
  { icon: <VERCEL />, URL: 'https://www.vercel.com' },
] as const
