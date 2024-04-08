import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Post } from '#site/content'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sortPosts(posts: Array<Post>) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1
    if (a.date < b.date) return 1
    return 0
  })
}
