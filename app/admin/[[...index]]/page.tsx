import { Studio } from './Studio'

// Nextjs route segment config
export const dynamic = 'force-dynamic' // Force dynamic (server) route instead of static page

// Set the right `viewport`, `robots` and `referer` meta tags
export { metadata } from 'next-sanity/studio/metadata'

export default function StudioPage() {
  return <Studio />
}
