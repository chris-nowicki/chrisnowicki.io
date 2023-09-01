import Intro from '@/components/Intro'
import TechStack from '@/components/TechStack'
import SectionDivider from '@/components/SectionDivider'
import FeaturedProjects from '@/components/FeaturedProjects/FeaturedProjects'
import Skills from '@/components/Skills'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import { SocialLinksType, HomePageType, Article } from '@/types'
import { PiCaretDoubleDownLight } from 'react-icons/pi'
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
    <div className="flex flex-col items-center">
      <Intro pageData={pageData} socialLink={socialLink} />
      <TechStack />
      <SectionDivider />
      <FeaturedProjects projects={pageData.featuredProjects} />
      <PiCaretDoubleDownLight size={98} className="my-24 text-gray-200" />
      <Skills />
      <PiCaretDoubleDownLight size={98} className="my-24 text-gray-200" />
      <Blog articles={articles} />
      <PiCaretDoubleDownLight size={98} className="my-16 text-gray-200" />
      <Contact />
      <Footer footerLinks={footerLinks} />
    </div>
  )
}
