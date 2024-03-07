import { IntroType, ProjectType, SeoType, SkillsType } from '@/types/types'
import { groq } from 'next-sanity'
import { sanityFetch } from './sanity-utils'

// GROQ Queries
export async function getSEO(): Promise<SeoType> {
  const query = groq`*[_type == "seo"] { 
            name,
            siteName,
            url,
            description,
            "image": image.asset->url,
    }[0]`

  const res: SeoType = await sanityFetch({ query, tags: ['settings'] })
  return res
}

export async function getIntro(): Promise<IntroType> {
  const query = groq`*[_type == 'intro'] {
    'profilePicture': profilePicture.asset->url,
    content,
  }[0]`

  const res: IntroType = await sanityFetch({
    query,
    tags: ['intro'],
  })
  return res
}

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

export async function getSkills(): Promise<SkillsType[]> {
  const query = groq`*[_type == 'tech'] {
  name,
  link
} | order(lower(name) asc)`

  const res: SkillsType[] = await sanityFetch({ query, tags: ['tech'] })
  return res
}
