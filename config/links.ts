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
    icon: 'linkedin',
    aria: 'LinkedIn',
  },
  {
    name: 'GitHub',
    URL: 'https://github.com/chris-nowicki',
    icon: 'github',
    aria: 'GitHub',
  },
  {
    name: 'Twitter',
    URL: 'https://twitter.com/iamwix',
    icon: 'twitter',
    aria: 'Twitter',
  },
  {
    name: 'Twitch',
    URL: 'https://www.twitch.tv/chriswix',
    icon: 'twitch',
    aria: 'Twitch',
  },
] as const

// contact page button links
export const contactPageLinks = [
  {
    name: 'Email Me',
    href: 'mailto:chris@chrisnowicki.io',
    variant: 'default',
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
