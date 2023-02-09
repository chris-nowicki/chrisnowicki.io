import { type } from 'os'

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
    slug: string
}

export interface Technologies {
    name: string
    link?: string
    show: boolean
}

export interface getLinks {
    links: string[]
    showResume: boolean
    resumeURL: string
}

export interface Links {
    title: string
    reference: string
    show: boolean
}

export type icon = {
    size: number
    classProps?: string
}
