export type ProjectsType = {
  featuredProjects: FeaturedProject[]
  projects: ProjectType[]
}

type FeaturedProject = {
  _id: string
  name: string
  excerpt: string
  gitHubUrl: string
  liveSiteUrl: string
  image: string
  tags: TagType[]
}

export type ProjectType = {
  projectName: string
  dateCreated: string
  liveSiteURL: string
  gitHubURL: string
  tags: TagType[]
}

export type TagType = {
  name: string
}
