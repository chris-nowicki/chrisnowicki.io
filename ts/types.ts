export type Meta = {
    description: string
    image: string
    type: string
}

export interface Settings {
    navigation: string[]
    profilePicture: string
    showProjects: boolean
}

export interface Projects {
    projectName: string
    dateCreated: string
    tags: string[]
    gitHubUrl: string
    liveSiteUrl: string
}

export interface FeaturedProjects {
    name: string
    excerpt: string
    image: string
    tags: string[]
    gitHubUrl: string
    liveSiteUrl: string
}

export interface Technologies {
    name: string
    category: string
    link?: string
    show: boolean
}

export interface Links {
    title: string
    reference: string
    show: boolean
}

export type Icon = {
    size?: number
    classProps?: string
}

export type Resume = {
    name: string
    email: string
    resumeURL: string
    github: string
    linkedin: string
    projects: string[]
    location: string
}

export type Experience = {
    company: string
    companyURL: string
    position: string
    startDate?: string
    endDate?: string
    accomplishments: string[]
}

export type Education = {
    school: string
    shoolURL: string
    degree: string
    dateEarned?: string
    displayDate?: boolean
    details: string[]
}

export type TechnicalProjects = {
    projects: any
}

export type SEO = {
    name: string
    url: string
    description: string
    type: string
    image: string
    twitter: string
}

export type SocialLinks = {
    arrowPlacement?: string
    arrowSize?: number
    icon: string
    content: any
    width?: string
    paddingX?: number
    paddingY?: number
    padding?: number
    fontSize?: string
    url: string
}

export interface ProjectCardProps {
    name: string
    excerpt: string
    image: string
    tags: string[]
    gitHubUrl: string
    liveSiteUrl: string
    isSelected: boolean
    direction: any
    page: any
}
