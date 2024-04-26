import { ProjectType } from '@/types/types'
import { groq } from 'next-sanity'
import { sanityFetch } from './sanity-utils'

// GROQ Queries
export async function getResume(): Promise<string> {
  const query = groq`*[_type == 'resume'] {
    "resumeURL": resume.asset->url,
  }[0].resumeURL`

  const res: string = await sanityFetch({
    query,
    tags: ['resume'],
  })
  return res
}

export async function getFeaturedProjects(): Promise<ProjectType[]> {
  const query = groq`*[_type == 'featuredProjects'] {
    featuredProjects[]->{
      "name": projectName,
      excerpt,
      gitHubUrl,
      liveSiteUrl,
      "image": image.asset->url,
      "tags": tags[]->{
        name
      },
    },
  }[0].featuredProjects`

  const res: ProjectType[] = await sanityFetch({
    query,
    tags: ['featuredProjects'],
  })
  return res
}
