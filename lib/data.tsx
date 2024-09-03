import Icon from '@/components/Icon'

// navbar items
export const navLinks = [
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
    name: 'Uses',
    href: '/uses',
  },
] as const

// social links for intro section, footer, and project cards
export const socialLinks = [
  {
    name: 'Linkedin',
    URL: 'https://www.linkedin.com/in/chris-nowicki/',
    icon: <Icon id="linkedin" size={28} focusable={false} />,
    aria: 'LinkedIn',
  },
  {
    name: 'GitHub',
    URL: 'https://github.com/chris-nowicki',
    icon: <Icon id="github" size={28} focusable={false} />,
    aria: 'GitHub',
  },
  {
    name: 'Twitter',
    URL: 'https://twitter.com/iamwix',
    icon: <Icon id="twitter" size={28} focusable={false} />,
    aria: 'Twitter',
  },
  {
    name: 'Twitch',
    URL: 'https://www.twitch.tv/chriswix',
    icon: <Icon id="twitch" size={28} focusable={false} />,
    aria: 'Twitch',
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

export const footerLinks = [
  { name: '/home', href: '/' },
  { name: '/projects', href: '/#projects' },
  { name: '/speaking', href: '/#speaking' },
  { name: '/blog', href: '/blog' },
  { name: '/uses', href: '/uses' },
  { name: '/community', href: '/community' },
] as const
