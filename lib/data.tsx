import Icon from '@/components/Icon'

// navbar items
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

// social links for intro section, footer, and project cards
export const socialLinks = [
  {
    name: 'Linkedin',
    URL: 'https://www.linkedin.com/in/chris-nowicki/',
    icon: <Icon id="logo-linkedin" size={28} />,
    aria: 'LinkedIn',
  },
  {
    name: 'GitHub',
    URL: 'https://github.com/chris-nowicki',
    icon: <Icon id="logo-github" size={28} />,
    aria: 'GitHub',
  },
  {
    name: 'Twitter',
    URL: 'https://twitter.com/iamwix',
    icon: <Icon id="logo-x" size={28} />,
    aria: 'Twitter',
  },
  {
    name: 'Twitch',
    URL: 'https://www.twitch.tv/chriswix',
    icon: <Icon id="logo-twitch" size={28} />,
    aria: 'Twitch',
  },
  {
    name: 'DEV',
    URL: 'https://dev.to/chrisnowicki',
    icon: <Icon id="logo-devto" size={28} />,
    aria: 'DEVTO Blog',
  },
] as const

// contact button type, data, and icons
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

// icons for tech stack section
export const TechStackIcons = [
  {
    icon: <Icon id="logo-nextjs" size={36} />,
    URL: 'https://nextjs.org/',
    aria: 'Next.js',
  },
  {
    icon: <Icon id="logo-react" size={36} />,
    URL: 'https://reactjs.org/',
    aria: 'React',
  },
  {
    icon: <Icon id="logo-astro" size={36} />,
    URL: 'https://astro.build/',
    aria: 'Astro',
  },
  {
    icon: <Icon id="logo-ts" size={36} />,
    URL: 'https://www.typescriptlang.org/',
    aria: 'TypeScript',
  },
  {
    icon: <Icon id="logo-shadcn" size={36} />,
    URL: 'https://ui.shadcn.com/',
    aria: 'shadcn/ui',
  },
  {
    icon: <Icon id="logo-tailwindcss" size={36} />,
    URL: 'https://tailwindcss.com/',
    aria: 'Tailwind CSS',
  },
  {
    icon: <Icon id="logo-sanity" size={36} />,
    URL: 'https://www.sanity.io/',
    aria: 'Sanity',
  },
  {
    icon: <Icon id="logo-mysql" size={47} />,
    URL: 'https://www.mysql.com/',
    aria: 'MySQL',
  },
  {
    icon: <Icon id="logo-mongodb" size={36} />,
    URL: 'https://www.mongodb.com/',
    aria: 'MongoDB',
  },
  {
    icon: <Icon id="logo-vercel" size={36} />,
    URL: 'https://www.vercel.com',
    aria: 'Vercel',
  },
] as const
