import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://chrisnowicki.io',
      lastModified: new Date(),
    },
    {
      url: 'https://chrisnowicki.io/about',
      lastModified: new Date(),
    },
    {
      url: 'https://chrisnowicki.io/blog',
      lastModified: new Date(),
    },
    {
      url: 'https://chrisnowicki.io/resume',
      lastModified: new Date(),
    },
  ]
}
