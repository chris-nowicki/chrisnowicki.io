import { sanityFetch } from './sanity-utils'
import { groq } from 'next-sanity'
import { DEVTO, GitHub, Linkedin, Twitter } from '@/assets/Icons'
import { SeoType, SkillsType, SocialLinksType } from '../types'

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

  const res = await sanityFetch(query)
  return res[0].seo
}

export async function getSocialLinks(): Promise<SocialLinksType[]> {
  const query = groq`*[_type == "settings"][0] {
        "linkedin": socialLinks.linkedin,
        "github": socialLinks.github,
        "twitter": socialLinks.twitter,
        "devto": socialLinks.devto,
    }`

  const res = await sanityFetch(query)
  const socialLinks = [
    { name: 'Linkedin', URL: res.linkedin, icon: <Linkedin size={28} /> },
    { name: 'GitHub', URL: res.github, icon: <GitHub size={28} /> },
    { name: 'Twitter', URL: res.twitter, icon: <Twitter size={28} /> },
    { name: 'DEV', URL: res.devto, icon: <DEVTO size={28} /> },
  ]
  return socialLinks
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

  const res = await sanityFetch(query)
  return res[0]
}

export async function getSkills(): Promise<SkillsType[]> {
  const query = groq`*[_type =='tech'] {
  name,
  link
} | order(lower(name) asc)`

  const res = await sanityFetch(query)
  return res
}
