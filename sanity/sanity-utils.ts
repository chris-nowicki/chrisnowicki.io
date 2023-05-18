import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { cache } from 'react'

// zod env type checking
import { env } from '../types/env-public'

// sanity create client and fetch functions
const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-04-27', // use current UTC date - see "specifying API version"!
  useCdn: false, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
})

const clientFetch = cache(client.fetch.bind(client))

export async function fetchSanity(query: string): Promise<any> {
  const data = await clientFetch(query)
  return data
}

// Image Builder Function
const builder = imageUrlBuilder(client)

export function urlFor(source: string) {
  return builder.image(source)
}
