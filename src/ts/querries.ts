export const siteSettings: string = `*[_type == "siteSettings"] {
  "profilePicture": profilePicture {asset {_ref}},
  showProjects}`

export const tech: string = '*[_type == "tech"] {name, link, show}'

export const featuredProjects: string = `*[_type == "projects" && count(*[ _type == "featuredProjects" && ^._id in projects[]._ref ]) > 0 ] {
  "name": projectName,
    excerpt,
    image {asset {_ref}},
    "tags": *[_type == "tech" && count(*[ _type == "projects" && ^._id in tags[]._ref ]) > 0 ] {name} | order(name asc),
    gitHubUrl,
    liveSiteUrl,
    slug {current}
}`
