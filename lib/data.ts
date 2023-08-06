type NavItems = {
  '/': Path
  '/about': Path
  '/blog': Path
  '/resume': Path
}

type Path = {
  name: string
  x: number
  y: number
  w: string
  h: string
}

export const navItems: NavItems = {
  '/': {
    name: 'home',
    x: 0,
    y: 3,
    w: '67.5px',
    h: '37px',
  },
  '/about': {
    name: 'about',
    x: 68,
    y: 3,
    w: '68px',
    h: '37px',
  },
  '/blog': {
    name: 'blog',
    x: 135.7,
    y: 3,
    w: '56px',
    h: '37px',
  },
  '/resume': {
    name: 'resume',
    x: 638,
    y: 0,
    w: '130px',
    h: '42px',
  },
}
