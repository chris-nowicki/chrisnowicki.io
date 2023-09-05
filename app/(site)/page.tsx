import Intro from '@/components/Intro'
import TechStack from '@/components/TechStack'
import SectionDivider from '@/components/SectionDivider'
import FeaturedProjects from '@/components/FeaturedProjects/FeaturedProjects'
import Skills from '@/components/Skills'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import { SocialLinksType, HomePageType, Article } from '@/types'
import { getArticles } from '@/lib/devto-api'

// sanity cms queries
import { getSocialLinks, getHomePage } from '@/sanity/sanity-queries'

export default async function Home() {
  const socialLinkData: Promise<SocialLinksType> = getSocialLinks()
  const homePageData: Promise<HomePageType> = getHomePage()
  const devtoData: Promise<Article[]> = getArticles()

  const [socialLink, pageData, articles] = await Promise.all([
    socialLinkData,
    homePageData,
    devtoData,
  ])

  const footerLinks = [
    { name: 'pdf', url: pageData.resumeURL },
    { name: 'Linkedin', url: socialLink.linkedin },
    { name: 'GitHub', url: socialLink.github },
    { name: 'Twitter', url: socialLink.twitter },
  ] as const

  return (
    <div className="flex flex-col items-center w-full">
      <Intro pageData={pageData} socialLink={socialLink} />
      <TechStack />
      <SectionDivider type="line" />
      <FeaturedProjects projects={pageData.featuredProjects} />
      <SectionDivider type="chevron" />
      <Skills />
      <SectionDivider type="chevron" />
      <Blog articles={articles} />
      <SectionDivider type="chevron" />
      <Contact />
      <Footer footerLinks={footerLinks} />
    </div>
  )
}
