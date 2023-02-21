import {createClient} from '@sanity/client'
import groq from 'groq'

export const client = createClient({
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: import.meta.env.PUBLIC_SANITY_DATASET,
    apiVersion: '2023-02-04', // use current UTC date - see "specifying API version"!
    token: import.meta.env.PUBLIC_SANITY_TOKEN, // or leave blank for unauthenticated usage
    useCdn: false, // `false` if you want to ensure fresh data
    ignoreBrowserTokenWarning: true,
})

// Sanity CMS Queries
export const siteSettings: string = groq`*[_type == "settings"] {
    "profilePicture": profilePicture.asset._ref,
    "showProjects": featuredProjects.showProjects
}`

export const tech: string = groq`*[_type == "tech"] {name, category, link, show}`

export const featuredProjects: string = groq`*[_type == "settings"] {
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

export const projects: string = groq`*[_type == "projects"] {
    projectName,
    dateCreated,
    "tags": tags[]->{
        name
    },
    gitHubUrl,
    liveSiteUrl
}`

export const links = groq`*[_type == "settings"] {
    "links": navigation.links,
    "showResume": navigation.showResume,
}`

export const resume = groq`*[_type == "resume"] {
    name,
    email,
    github,
    linkedin,
    location,
    "resumeURL": resume.asset->url,
}`

export const technicalProjects = groq`*[_type == "resume"] {
    "projects": technicalProjects[]->{
        projectName,
        role,
        "liveSiteURL": liveSiteUrl,
        "gitHubURL": gitHubUrl,
        "tags": tags[]->{
            name
        },
        "projectDetails": projectDetails[].children[].text
    }
}`

export const professionalExperience = groq`*[_type == 'resume'] {
    professionalExperience[]->{
        company,
        companyURL,
        position,
        startDate,
        endDate,
        "accomplishments": accomplishments[].children[].text
    }
}`

export const education = groq`*[_type == "resume"] {
    education[]->{
        school,
        schoolURL,
        degree,
        dateEarned,
        displayDate,
        "details": details[].children[].text
    }
}`

export const picture = groq`*[_type == "settings"] {
    "chrisnowicki": profilePicture.asset._ref
}`

export const seo = groq`*[_type == "settings"] {
    seo {
        name,
        url,
        description,
        type,
        "image": image.asset._ref,
        twitter
    }
}`
