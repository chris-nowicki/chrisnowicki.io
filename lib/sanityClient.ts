import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { cache } from 'react'

// zod env type checking
import { env } from '../ts/env'

const client = createClient({
    projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: env.NEXT_PUBLIC_SANITY_DATASET,
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
