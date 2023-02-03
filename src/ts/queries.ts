export const siteSettings: string = `*[_type == "settings"] {
  "profilePicture": profilePicture.asset._ref,
  "showProjects": featuredProjects.showProjects
}`

export const tech: string = '*[_type == "tech"] {name, link, show}'

export const featuredProjects: string = `*[_type == "settings"] {
  "projects": featuredProjects.featured[]->{
      "name": projectName,
      "slug": slug.current,
      excerpt,
      gitHubUrl,
      liveSiteUrl,
      "image": image.asset._ref,
      "tags": tags[]->{
        name
      },
  },
}`

export const projects: string = `*[_type == "projects"]{
  projectName,
    dateCreated,
    "tags": tags[]->{
        name
      },
    gitHubUrl,
    liveSiteUrl
}`

export const links = `*[_type == "settings"] {
  "links": navigation.links,
  "showResume": navigation.showResume
}`
