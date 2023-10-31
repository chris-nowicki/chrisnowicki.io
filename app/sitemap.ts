import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://chrisnowicki.io',
      lastModified: new Date(),
    },
  ]
}
