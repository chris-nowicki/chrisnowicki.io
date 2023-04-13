//  This file contains all the types used throughout the project
export type Meta = {
    description: string
    image: string
    type: string
}

export interface Technologies {
    name: string
    category: string
    link?: string
    show: boolean
}

export type Icon = {
    size?: number
    classProps?: string
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
