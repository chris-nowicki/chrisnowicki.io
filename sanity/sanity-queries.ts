import { fetchSanity } from './sanity-utils'
import { groq } from 'next-sanity'

// types
import { ResumeType } from '../types/resume'
import { SocialLinksType, SeoType, TechDataType } from '../types'

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

export async function getResume(): Promise<ResumeType> {
  const query = groq`*[_type == "resume"] {
    name,
    email,
    location,
    "picture": picture.asset->url,
    "resumeURL": resume.asset->url,
    professionalExperience[]->{
        company,
        companyURL,
        position,
        startDate,
        endDate,
        "accomplishments": accomplishments[].children[].text
    },
    "projects": technicalProjects[]->{
        projectName,
        role,
        "liveSiteURL": liveSiteUrl,
        "gitHubURL": gitHubUrl,
        "tags": tags[]->{
            name
        },
        "projectDetails": projectDetails[].children[].text
    },
    education[]->{
        school,
        schoolURL,
        degree,
        dateEarned,
        displayDate,
        "details": details[].children[].text
    }
}`

  const res = await fetchSanity(query)
  return res[0]
}

export async function getTechData(): Promise<TechDataType[]> {
  const query = groq`*[_type == "tech"] {name, category, link, show} | order(lower(name) asc)`

  const res = await fetchSanity(query)
  return res
}

export async function getSocialLinks(): Promise<SocialLinksType> {
  const query = groq`*[_type == "settings"] {
        "linkedin": socialLinks.linkedin,
        "github": socialLinks.github,
        "twitter": socialLinks.twitter,
        "instagram": socialLinks.instagram,
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

export async function getAboutPage() {
  const query = groq`*[_type == 'about'] {
    'profilePicture': profilePicture.asset->url,
    content,
  }`

  const res = await fetchSanity(query)
  return res[0]
}
