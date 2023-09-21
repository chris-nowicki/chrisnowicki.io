import { sanityFetch } from './sanity-utils'
import { groq } from 'next-sanity'
import { SeoType } from '@/types/types'

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
    "now": *[_type == 'now']|order(publishDate desc)[0]{ 
      "slug": slug.current 
    },
  }[0]`

  const res = await sanityFetch(query)
  return res
}

export async function getPost(slug: string) {
  const query = groq`
  *[_type == 'now' && slug.current == $slug] {
    "current": { 
      publishDate,
      content,
    },
   "newer": *[^.publishDate < publishDate ]| order(publishDate asc)[0]{ 
        "slug": slug.current,
    },
    "older": *[^.publishDate > publishDate ]| order(publishDate desc)[0]{ 
        "slug": slug.current,
    },
} |order(publishDate desc)[0]`

  const res = await sanityFetch(query, { slug })
  return res
}
