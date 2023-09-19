import Intro from '@/components/Intro/Intro'
import TechStack from '@/components/TechStack'
import SectionDivider from '@/components/SectionDivider'
import FeaturedProjects from '@/components/FeaturedProjects/FeaturedProjects'
import Skills from '@/components/Skills'
import Blog from '@/components/Blog/Blog'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer'
import type { HomePageType, MetricsType } from '@/types/types'
import { getMetrics } from '@/lib/planetscale'
import { cache } from 'react'

// sanity cms queries
import { getHomePage } from '@/sanity/sanity-queries'
import React from 'react'

const fetchMetrics = cache(getMetrics)

export default async function Home() {
  const homePageData: Promise<HomePageType> = getHomePage()
  const metricsData: Promise<MetricsType> = fetchMetrics()

  const [pageData, metrics] = await Promise.all([homePageData, metricsData])

  return (
    <div className="flex w-full flex-col items-center px-4 md:px-0">
      <Intro pageData={pageData} metrics={metrics} />
      <TechStack />
      <SectionDivider type="line" />
      <FeaturedProjects projects={pageData.featuredProjects} />
      <SectionDivider type="chevron" />
      <Skills skills={pageData.skills} />
      <SectionDivider type="chevron" />
      <Blog />
      <SectionDivider type="chevron" />
      <Contact />
      <SectionDivider type="line" />
      <Footer pdfLink={pageData.resumeURL} />
    </div>
  )
}
