import { env } from '@/env'

const createImageUrl = (location: string) => {
  if (location.startsWith('/')) {
    const imageUrl = createInternalImageUrl(location)
    return imageUrl
  }

  if (location.startsWith('http://') || location.startsWith('https://')) {
    const imageUrl = createExternalImageUrl(location)
    return imageUrl
  }

  throw new Error(
    `Image location is not an internal path or an external url: ${location}`
  )
}

const createInternalImageUrl = (path: string) => {
  const internalImageUrl = `https://res.cloudinary.com/${env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto/chrisnowicki.io/${path}`
  return internalImageUrl
}

const createExternalImageUrl = (url: string) => {
  const externalImageUrl = `https://res.cloudinary.com/${env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/fetch/f_auto,q_auto/${url}`
  return externalImageUrl
}

// const createYouTubeUrl = (id: string) => {
//   const url = `https://res.cloudinary.com/chriswix/image/youtube/f_auto,q_auto/${id}.jpg`
//   return url
// }

export { createExternalImageUrl, createImageUrl, createInternalImageUrl }
