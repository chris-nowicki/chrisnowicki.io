import { env } from '@/types/env-private'

export default function ogImageURL(description: string) {
  const url =
    env.NODE_ENV === 'production'
      ? 'https://chrisnowicki.io'
      : 'http://localhost:3000'

  return {
    url: `${url}/api/og?description=${description}`,
  }
}
