import { fetchSanity, urlFor } from './sanityClient'
import { groq } from 'next-sanity'

// GROQ Queries
export async function getSEO() {
    const query = groq`*[_type == "settings"] {
        seo {
            name,
            siteName,
            url,
            description,
            type,
            "image": image.asset._ref,
        }
    }`

    const res = await fetchSanity(query)
    return res[0].seo
}

export async function getResume() {
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

export async function getTechData() {
    const query = groq`*[_type == "tech"] {name, category, link, show} | order(lower(name) asc)`

    const res = await fetchSanity(query)
    return res
}

export async function getImage() {
    const query = groq`*[_type == 'settings'] {
        bio {
            "chrisnowicki": profilePicture.asset._ref
        }
    }`

    const res = await fetchSanity(query)
    const image = res[0].bio.chrisnowicki
    return urlFor(image).url()
}

export async function getContactInfo() {
    const query = groq`*[_type == "resume"] {
    name,
    email,
    location
    }`

    const res = await fetchSanity(query)
    return res[0]
}

export async function getSocialLinks() {
    const query = groq`*[_type == "settings"] {
        "linkedin": socialLinks.linkedin,
        "github": socialLinks.github,
        "twitter": socialLinks.twitter,
        "instagram": socialLinks.instagram,
    }`

    const res = await fetchSanity(query)
    return res[0]
}

export async function getProjects() {
    const query = groq`*[_type == "settings"] {
        "featuredProjects": featuredProjects.featured[]->{
            _id,  
            "name": projectName,
            excerpt,
            gitHubUrl,
            liveSiteUrl,
            "image": image.asset._ref,
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

export async function getAboutMe() {
    const query = groq`*[_type == 'settings'] {
        'about': bio.about,
        'bio': bio.bio,
        'profilePicture': bio.profilePicture.asset._ref,
    }`

    const res = await fetchSanity(query)
    const profilePicture = urlFor(res[0].profilePicture).url()
    return {
        about: res[0].about,
        bio: res[0].bio,
        profilePicture: profilePicture,
    }
}
