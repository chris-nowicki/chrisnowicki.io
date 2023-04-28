export type Projects = {
  featuredProjects: FeaturedProject[]
  projects: Project[]
}

type FeaturedProject = {
  _id: string
  name: string
  excerpt: string
  gitHubUrl: string
  liveSiteUrl: string
  image: string
  tags: Tag[]
}

export type Project = {
  projectName: string
  dateCreated: string
  liveSiteURL: string
  gitHubURL: string
  tags: Tag[]
}

type Tag = {
  name: string
}
