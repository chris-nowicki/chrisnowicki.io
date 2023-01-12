export type Meta = {
    title: string
    description: string
    image: string
    type: string
}

export type ProjectCardProps = {
    name: string
    excerpt: string
    image: string
    tags: string[]
    gitHubUrl: string
    liveSiteUrl: string
    slug: string
}
