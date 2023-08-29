import Header from './Header'
import TechSkills from './TechSkills/TechSkills'
import TechnicalProjects from './TechnicalProjects/TechnicalProjects'
import ProfessionalExperience from './ProfessionalExperience'
import Education from './Education'
import SocialLink from '@/components/SocialLink'
import ogImageURL from '@/lib/og-image-url'

// types
import type { Metadata } from 'next'
import { ResumeType } from '@/types/resume'
import { OGImageType, SocialLinksType, TechDataType } from 'types'

// metadata
const title: string = 'Resumé'
const description: string = `Review my skills, projects, work history, and education.`
const ogImage: OGImageType = ogImageURL(description)

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: 'https://chrisnowicki.io/about',
    images: [ogImage],
  },
  twitter: {
    title: title,
    card: 'summary_large_image',
  },
}

// sanity cms queries
import { getTechData, getResume, getSocialLinks } from '@/sanity/sanity-queries'

export default async function Resume() {
  const techData: Promise<TechDataType[]> = getTechData()
  const resumeData: Promise<ResumeType> = getResume()
  const socialLinkData: Promise<SocialLinksType> = getSocialLinks()

  const [tech, resume, socialLink] = await Promise.all([
    techData,
    resumeData,
    socialLinkData,
  ])

  const contactInfo = {
    name: resume.name,
    email: resume.email,
    location: resume.location,
  }

  const links = [
    { name: 'pdf', url: resume.resumeURL },
    { name: 'Linkedin', url: socialLink.linkedin },
    { name: 'GitHub', url: socialLink.github },
  ]

  return (
    <div className="px-5 lg:px-0">
      <Header image={resume.picture} data={contactInfo} />

      {/* resume and social links */}
      <div className="mb-12 flex w-full flex-col items-center gap-4 md:flex-row">
        {links.map((link, index) => (
          <SocialLink
            key={index + link.name}
            content={link.name}
            icon={link.name.toLowerCase()}
            url={link.url}
            padding={4}
            fontSize={'md'}
          />
        ))}
      </div>

      <TechSkills tech={tech} />
      <TechnicalProjects projects={resume.projects} />
      <ProfessionalExperience experience={resume.professionalExperience[0]} />
      <Education education={resume.education} />
    </div>
  )
}
