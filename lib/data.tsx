import Icon from '@/components/Icon'

// navbar items
export const navItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Projects',
    href: '/#projects',
  },
  {
    name: 'Speaking',
    href: '/#speaking',
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
    icon: <Icon id="logo-linkedin" size={28} focusable={false} />,
    aria: 'LinkedIn',
  },
  {
    name: 'GitHub',
    URL: 'https://github.com/chris-nowicki',
    icon: <Icon id="logo-github" size={28} focusable={false} />,
    aria: 'GitHub',
  },
  {
    name: 'Twitter',
    URL: 'https://twitter.com/iamwix',
    icon: <Icon id="logo-x" size={28} focusable={false} />,
    aria: 'Twitter',
  },
  {
    name: 'Twitch',
    URL: 'https://www.twitch.tv/chriswix',
    icon: <Icon id="logo-twitch" size={28} focusable={false} />,
    aria: 'Twitch',
  },
  {
    name: 'DEV',
    URL: 'https://dev.to/chrisnowicki',
    icon: <Icon id="logo-devto" size={28} focusable={false} />,
    aria: 'DEVTO Blog',
  },
] as const

// contact button type, data, and icons
type ContactInfoType = {
  Contact: {
    text: string
    icon: JSX.Element
  }
}

export const contactInfo: ContactInfoType = {
  Contact: {
    text: 'Contact',
    icon: <Icon id="envelope" size={20} focusable={false} />,
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

// contact page button links
export const contactPageLinks = [
  {
    name: 'Chat With Me',
    href: 'https://cal.com/chriswix',
    variant: 'default',
    aria: 'Schedule a call with me via Calendly',
  },
  {
    name: 'Email Me',
    href: 'mailto:chris@chrisnowicki.io',
    variant: 'outline',
    aria: 'Email me directly',
  },
] as const
