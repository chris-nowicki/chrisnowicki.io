import { socialLinks } from '@/lib/data'
import { getXMetrics, getGithubMetrics } from '@/lib/appwrite'
import Icon from '@/components/Icon'

export default async function Metrics() {
  const githubMetricsData = getGithubMetrics()
  const xData = getXMetrics()

  const [commits, tweetCount] = await Promise.all([githubMetricsData, xData])

  const githubLink = socialLinks.filter((link) => link.name === 'GitHub')[0]
  const twitterLink = socialLinks.filter((link) => link.name === 'Twitter')[0]

  return (
    <div className="border-borderColor-light hover:border-purple-light dark:hover:border-purple-dark flex w-full flex-col items-center justify-center gap-2 rounded-lg border p-4 dark:border-gray-300/20 md:w-1/2">
      <span className="flex items-center gap-2">
        <Icon
          id="arrow-trendingUp"
          size={20}
          className="animate-pulse text-primary transition-all"
        />
        <span>{tweetCount.toLocaleString()}</span> posts on{' '}
        <a
          href={twitterLink.URL}
          className="text-primary  hover:scale-110 hover:duration-75 hover:ease-in-out"
          target="_blank"
          aria-label="Twitter"
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
          {commits.toLocaleString()}
        </span>
        <a
          href={githubLink.URL}
          className=" text-primary hover:scale-110 hover:duration-75 hover:ease-in-out"
          target="_blank"
          aria-label="GitHub"
        >
          <Icon id="github" size={24} />
        </a>
        commits
      </span>
    </div>
  )
}
