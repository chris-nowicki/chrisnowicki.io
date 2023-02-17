import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: import.meta.env.PUBLIC_SANITY_DATASET,
    apiVersion: '2023-02-04', // use current UTC date - see "specifying API version"!
    token: import.meta.env.PUBLIC_SANITY_TOKEN, // or leave blank for unauthenticated usage
    useCdn: false, // `false` if you want to ensure fresh data
    ignoreBrowserTokenWarning: true,
})

// Sanity CMS Queries
export const siteSettings: string = `*[_type == "settings"] {
    "profilePicture": profilePicture.asset._ref,
    "showProjects": featuredProjects.showProjects
}`

export const tech: string = '*[_type == "tech"] {name, category, link, show}'

export const featuredProjects: string = `*[_type == "settings"] {
        "projects": featuredProjects.featured[]->{
        "name": projectName,
        "slug": slug.current,
        excerpt,
        gitHubUrl,
        liveSiteUrl,
        "image": image.asset._ref,
        "tags": tags[]->{
            name
        },
    },
}`

export const projects: string = `*[_type == "projects"] {
    projectName,
    dateCreated,
    "tags": tags[]->{
        name
    },
    gitHubUrl,
    liveSiteUrl
}`

export const links = `*[_type == "settings"] {
    "links": navigation.links,
    "showResume": navigation.showResume,
}`

export const resume = `*[_type == "resume"] {
    name,
    email,
    github,
    linkedin,
    "resumeURL": resume.asset->url,
}`

export const technicalProjects = `*[_type == "resume"] {
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

export const professionalExperience = `*[_type == 'resume'] {
    professionalExperience[]->{
        company,
        companyURL,
        position,
        startDate,
        endDate,
        "accomplishments": accomplishments[].children[].text
    }
}`

export const education = `*[_type == "resume"] {
    education[]->{
        school,
        schoolURL,
        degree,
        dateEarned,
        displayDate,
        "details": details[].children[].text
    }
}`

export const picture = `*[_type == "settings"] {
    "chrisnowicki": profilePicture.asset._ref
}`

export const seo = `*[_type == "settings"] {
    seo {
        name,
        url,
        description,
        type,
        "image": image.asset._ref,
        twitter
    }
}`
