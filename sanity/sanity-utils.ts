import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import format from 'date-fns/format'

// sanity create client and fetch function
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: format(new Date(), 'yyyy-MM-dd'), // use current UTC date - see "specifying API version"!
  useCdn: false, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
})

export async function sanityFetch(query: string, params?: any) {
  const data = client.fetch(
    query,
    params,
    {
      next: {
        revalidate: 60,
      },
    }
  )
  return data
}

// Image Builder Function
const builder = imageUrlBuilder(client)

export function urlFor(source: string) {
  return builder.image(source)
}
