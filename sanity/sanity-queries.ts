import { fetchSanity } from './sanity-utils'
import { groq } from 'next-sanity'

// types
import { Seo } from '../types/seo'
import { Resume } from '../types/resume'
import { TechData } from '../types/techData'
import { Contact } from '../types/contact'
import { SocialLinks } from '../types/socialLinks'
import { Projects } from '../types/projects'
import { About } from '../types/about'

// GROQ Queries
export async function getSEO(): Promise<Seo> {
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

export async function getResume(): Promise<Resume> {
  const query = groq`*[_type == "resume"] {
    name,
    email,
    location,
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

export async function getTechData(): Promise<TechData[]> {
  const query = groq`*[_type == "tech"] {name, category, link, show} | order(lower(name) asc)`

  const res = await fetchSanity(query)
  return res
}

export async function getImage(): Promise<string> {
  const query = groq`*[_type == 'settings'] {
        bio {
            "chrisnowicki": profilePicture.asset->url
        }
    }`

  const res = await fetchSanity(query)
  return res[0].bio.chrisnowicki
}

export async function getContactInfo(): Promise<Contact> {
  const query = groq`*[_type == "resume"] {
    name,
    email,
    location
    }`

  const res = await fetchSanity(query)
  return res[0]
}

export async function getSocialLinks(): Promise<SocialLinks> {
  const query = groq`*[_type == "settings"] {
        "linkedin": socialLinks.linkedin,
        "github": socialLinks.github,
        "twitter": socialLinks.twitter,
        "instagram": socialLinks.instagram,
    }`

  const res = await fetchSanity(query)
  return res[0]
}

export async function getProjects(): Promise<Projects> {
  const query = groq`*[_type == "settings"] {
        "featuredProjects": featuredProjects.featured[]->{
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
        "projects": *[_type == 'projects' && !(_id in ^.featuredProjects.featured[]._ref)] {
            projectName,
            dateCreated,
            "liveSiteURL": liveSiteUrl,
            "gitHubURL": gitHubUrl,
            "tags": tags[]->{
                name
            },
        } | order(dateCreated desc),
    }`

  const res = await fetchSanity(query)
  return res[0]
}

export async function getAboutMe(): Promise<About> {
  const query = groq`*[_type == 'settings'] {
        'about': bio.about,
        'bio': bio.bio,
        'profilePicture': bio.profilePicture.asset->url,
    }`

  const res = await fetchSanity(query)

  return {
    about: res[0].about,
    bio: res[0].bio,
    profilePicture: res[0].profilePicture,
  }
}
