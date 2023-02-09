import { client } from '../lib/sanity'
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)

// image url builder
export function urlFor(source: string) {
    return builder.image(source)
}