import { fetchSanity } from './sanity-utils'
import { groq } from 'next-sanity'

// types
import { SocialLinksType, SeoType, SkillsType } from '../types'

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
    }`

  const res = await fetchSanity(query)
  return res[0].seo
}


export async function getSocialLinks(): Promise<SocialLinksType> {
  const query = groq`*[_type == "settings"] {
        "linkedin": socialLinks.linkedin,
        "github": socialLinks.github,
        "twitter": socialLinks.twitter,
        "devto": socialLinks.devto,
    }`

  const res = await fetchSanity(query)
  return res[0]
}

export async function getHomePage() {
  const query = groq`*[_type == 'home'] {
    'profilePicture': profilePicture.asset->url,
    content,
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
  }`

  const res = await fetchSanity(query)
  return res[0]
}

export async function getSkills(): Promise<SkillsType[]> {
  const query = groq`*[_type =='tech'] {
  name,
  link
} | order(lower(name) asc)`

  const res = await fetchSanity(query)
  return res
}
