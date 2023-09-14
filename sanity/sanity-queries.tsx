import { sanityFetch } from './sanity-utils'
import { groq } from 'next-sanity'
import { SeoType } from '../types'

// GROQ Queries
export async function getSEO(): Promise<SeoType> {
  const query = groq`*[_type == "settings"] {
        seo {
            name,
            siteName,
            url,
            description,
            type,
            "image": image.asset->url,
        }
    }[0]`

  const res = await sanityFetch(query)
  return res.seo
}

export async function getHomePage() {
  const query = groq`*[_type == 'home'] {
    'profilePicture': profilePicture.asset->url,
    content,
    'skills': *[_type == 'tech']{
  name,
  link
} | order(lower(name) asc),
    "featuredProjects": featuredProjects[]->{
      _id,  
      "name": projectName,
      excerpt,
      gitHubUrl,
      liveSiteUrl,
      "image": image.asset->url,
      "tags": tags[]->{
        name
      },
    },
    "resumeURL": resume.asset->url,
  }[0]`

  const res = await sanityFetch(query)
  return res
}
