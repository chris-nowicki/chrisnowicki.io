export const siteSettings: string = `*[_type == "siteSettings"] {
  "profilePicture": profilePicture {asset {_ref}},
  showProjects}`

export const tech: string = '*[_type == "tech"] {name, link, show}'

export const featuredProjects: string = `*[_type == "featuredProjects"]{
   projects[]->{
     "name": projectName,
     "slug": slug.current,
     excerpt,
     gitHubUrl,
     liveSiteUrl,
     "image": image.asset._ref,
     "tags": tags[]->{
       name
     }
   }
}`