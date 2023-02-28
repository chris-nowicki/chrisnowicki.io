import 'server-only'
import { createClient, groq } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { cache } from 'react'

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2023-02-28', // use current UTC date - see "specifying API version"!
    useCdn: false, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
})

// Wrap the cache function in a way that reuses the TypeScript definitions
const clientFetch = cache(client.fetch.bind(client))

// function to  query data from sanity CMS
export async function fetchSanity(query: string) {
    const data = await clientFetch(query)
    return data
}

// Image Builder
const builder = imageUrlBuilder(client)

export function urlFor(source: string) {
    return builder.image(source)
}

// GROQ Queries
export async function getSettings() {
    const query = groq`*[_type == "settings"] {
        "links": navigation.links,
    }`

    const res = await fetchSanity(query)
    return res[0]
}

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
            role,
            "liveSiteURL": liveSiteUrl,
            "gitHubURL": gitHubUrl,
            "tags": tags[]->{
                name
            },
        },
    }`

    const res = await fetchSanity(query)
    return res[0]
}