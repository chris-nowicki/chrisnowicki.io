import { FC } from 'react'

import { socialLinks } from '@/lib/data'
import { getAllMetrics } from '@/lib/appwrite/queries'
import Icon from '@/components/Icon'

const Metrics: FC = async () => {
  try {
    const metrics = await getAllMetrics()

    const socialLinksMap = Object.fromEntries(
      socialLinks.map((link) => [link.name, link])
    )
    const githubLink = socialLinksMap['GitHub']
    const twitterLink = socialLinksMap['Twitter']

    return (
      <div className="border-borderColor-light hover:border-purple-light dark:hover:border-purple-dark flex w-full flex-col items-center justify-center gap-2 rounded-lg border p-4 dark:border-gray-300/20 md:w-1/2">
        <span className="flex items-center gap-2">
          <Icon
            id="arrow-trendingUp"
            size={20}
            className="animate-pulse text-primary transition-all"
          />
          <span>{metrics.tweetCount.toLocaleString()}</span> posts on
          <a
            href={twitterLink.URL}
            className="text-primary hover:scale-110 hover:duration-75 hover:ease-in-out"
            target="_blank"
            aria-label="Twitter"
            rel="noopener noreferrer"
          >
            <Icon id="twitter" size={24} />
          </a>
        </span>
        <span className="flex items-center gap-2">
          <Icon
            id="arrow-trendingUp"
            size={20}
            className="animate-pulse text-primary transition-all"
          />
          <span className="text-purple-light dark:text-purple-dark">
            {metrics.commitCount.toLocaleString()}
          </span>
          <a
            href={githubLink.URL}
            className="text-primary hover:scale-110 hover:duration-75 hover:ease-in-out"
            target="_blank"
            aria-label="GitHub"
            rel="noopener noreferrer"
          >
            <Icon id="github" size={24} />
          </a>
          commits
        </span>
      </div>
    )
  } catch (error) {
    console.error('Error fetching metrics:', error)
    return (
      <div className="flex w-full items-center justify-center text-red-500 md:w-1/2">
        Error loading metrics!
      </div>
    )
  }
}

export default Metrics
