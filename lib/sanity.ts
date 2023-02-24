import { createClient, groq } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { cache } from 'react'

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2023-02-04', // use current UTC date - see "specifying API version"!
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
export async function getFeaturedProjects() {
    const query = groq`*[_type == "settings"] {
        "showProjects": featuredProjects.showProjects,
        "projects": featuredProjects.featured[]->{
            "name": projectName,
            excerpt,
            gitHubUrl,
            liveSiteUrl,
            "image": image.asset._ref,
            "tags": tags[]->{
                name
            },
        },
    }`

    const res = await fetchSanity(query)
    return res[0]
}

export const projects: string = groq`*[_type == "projects"] {
    projectName,
    dateCreated,
    "tags": tags[]->{
        name
    },
    gitHubUrl,
    liveSiteUrl
}`

export async function getSettings() {
    const query = groq`*[_type == "settings"] {
        "links": navigation.links,
        "showResume": navigation.showResume,
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
            twitter
        }
    }`

    const res = await fetchSanity(query)
    return res[0].seo
}

export async function getResume() {
    const query = groq`*[_type == "resume"] {
    name,
    email,
    github,
    linkedin,
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
    const query = groq`*[_type == "settings"] {
        "chrisnowicki": profilePicture.asset._ref
    }`
    const res = await fetchSanity(query)
    const image = res[0].chrisnowicki
    return urlFor(image).url()
}
