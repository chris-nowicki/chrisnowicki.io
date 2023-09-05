import Intro from '@/components/Intro'
import TechStack from '@/components/TechStack'
import SectionDivider from '@/components/SectionDivider'
import FeaturedProjects from '@/components/FeaturedProjects/FeaturedProjects'
import Skills from '@/components/Skills'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import { SocialLinksType, HomePageType, Article, SkillsType } from '@/types'
import { getArticles } from '@/lib/devto-api'

// sanity cms queries
import { getSocialLinks, getHomePage, getSkills } from '@/sanity/sanity-queries'

export default async function Home() {
  const socialLinkData: Promise<SocialLinksType> = getSocialLinks()
  const homePageData: Promise<HomePageType> = getHomePage()
  const devtoData: Promise<Article[]> = getArticles()
  const skillsData: Promise<SkillsType[]> = getSkills()

  const [socialLink, pageData, articles, skills] = await Promise.all([
    socialLinkData,
    homePageData,
    devtoData,
    skillsData
  ])

  const footerLinks = [
    { name: 'pdf', url: pageData.resumeURL },
    { name: 'Linkedin', url: socialLink.linkedin },
    { name: 'GitHub', url: socialLink.github },
    { name: 'Twitter', url: socialLink.twitter },
    { name: 'DEV', url: socialLink.devto },
  ] as const

  return (
    <div className="flex w-full flex-col items-center px-4 md:px-0">
      <Intro pageData={pageData} socialLink={socialLink} />
      <TechStack />
      <SectionDivider type="line" />
      <FeaturedProjects projects={pageData.featuredProjects} />
      <SectionDivider type="chevron" />
      <Skills skills={skills} />
      <SectionDivider type="chevron" />
      <Blog articles={articles} />
      <SectionDivider type="chevron" />
      <Contact />
      <SectionDivider type="line" />
      <Footer footerLinks={footerLinks} />
    </div>
  )
}
