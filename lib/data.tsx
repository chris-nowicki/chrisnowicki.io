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
