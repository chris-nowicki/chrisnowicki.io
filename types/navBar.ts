export type NavItems = {
  '/': Path
  '/about': Path
  '/blog': Path
  '/contact': Path
  '/projects': Path
  '/resume': Path
}

export type Path = {
  name: string
  x: number
  y: number
  w: string
  h: string
}
