import Icon from '@/components/Icon'
import SectionHeading from '@/components/SectionHeading'
import Image from 'next/image'
import { getArticles } from '@/lib/devto'
import { getStoredPostViews } from '@/lib/metrics'
import type { Article } from '@/types/types'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default async function Blog() {
  const articleData: Promise<Article[]> = getArticles()
  const postViewData = getStoredPostViews()

  const [articles, totalPostViews] = await Promise.all([
    articleData,
    postViewData,
  ])

  return (
    <section className="flex w-full flex-col gap-4 px-4 md:px-0">
      <SectionHeading className="-mb-6 text-left text-2xl md:text-4xl">
        Community & Speaking
      </SectionHeading>
      <p>
        I'm passionate about being involved in the coding community and sharing
        my passion for Web Development, ADHD / Neurodivervisity, and All Things
        Tech. This community is such a wonderful group of developers who support
        and uplift one another.
      </p>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="Community Involvement">
          <AccordionTrigger className="text-xl font-bold md:text-2xl">
            Community Involvement
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            {/* Virtual Coffee */}
            <div className="rounded-lg border p-4">
              <div className="-mb-2 flex items-center justify-between">
                <a
                  href="https://virtualcoffee.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/virtualCoffeeLogo.svg"
                    width={200}
                    height={200}
                    alt="Virtual Coffee Logo"
                  />
                </a>
                <span className="font-semibold">June 2023 - Present</span>
              </div>
              <p>
                Virtual Coffee is a community of 900+ wonderful humans where
                people connect with others who are in similar stages of their
                journey. Whether they are trying to break into tech for the
                first time, are career transitioners, or seasoned professionals,
                Virtual Coffee is a place where friends are made, and the
                community supports and uplifts each other.
              </p>
              <p>
                I've been volunteering with the bi-weekly coffee chats in the
                following roles:
              </p>
              <ul className="mt-1 list-outside list-disc space-y-2 pl-4 marker:text-primary">
                <li>
                  <span className="font-semibold">Room Leader - </span>The Room
                  Leaders are the conversation facilitators of the breakout
                  rooms. They give some instructions (handraise function), run
                  the introductions, and make sure everyone is being heard. If
                  no one has a topic, the room leader brings up the "backpocket"
                  topic of choice.
                </li>
                <li>
                  <span className="font-semibold">Note Taker - </span>Take notes
                  for breakout room conversations and post to the Slack
                  "General" channel.
                </li>
                <li>
                  <span className="font-semibold">MC -</span>Represents the
                  Virtual Coffee organization by giving opening announcements,
                  drops import links into chat, answers questions, and welcomes
                  new members.
                </li>
                <li>
                  <span className="font-semibold">Host -</span>The host controls
                  the role assignments and the breakout rooms. They monitor for
                  members who show up late, and control when the rooms are
                  opened and closed.
                </li>
              </ul>
            </div>

            {/* Discord */}
            <div className="flex flex-col items-center gap-6 rounded-lg border p-4 md:flex-row">
              <div>
                <Icon id="logo-discord" size={64} className="-mb-4" />
              </div>
              <div>
                <p className="text-center md:text-left">
                  My Favorite Discord Communities:
                </p>
                <ul className="mt-1 list-outside list-disc space-y-2 pl-4 marker:text-primary">
                  <li>
                    <span className="font-semibold">
                      Build in Public Live -{' '}
                    </span>
                    I am a part of a Build In Public Cohort / Community through{' '}
                    <a
                      href="https://x.com/TheCoppinger?s=20"
                      className="font-semibold italic hover:underline"
                      target="_blank"
                    >
                      Charlie Coppinger
                    </a>{' '}
                    where we support each others live streams and projects as we
                    build in public.
                  </li>
                  <li>
                    <span className="font-semibold">
                      THAT Accountability -{' '}
                    </span>
                    A newer community established after{' '}
                    <a
                      href="https://thatconference.com/"
                      target="_blank"
                      className="font-semibold hover:underline"
                    >
                      THAT Conference
                    </a>
                    , TX where we can stay connected with those we met at the
                    conference, support one another, and hold each other
                    accountable as we pursue our dreams / goals.
                  </li>
                </ul>
              </div>
            </div>

            {/* Github */}
            <div className="flex flex-col items-center gap-6 rounded-lg border p-4 md:flex-row">
              <div>
                <Icon id="logo-github" size={64} className="-mb-4" />
              </div>
              <div>
                <p className="text-center md:text-left">
                  I like to provide help in GitHub community discussions:
                </p>
                <ul className="mt-1 w-auto list-outside list-disc space-y-2 pl-4 marker:text-primary">
                  <li>
                    <span className="font-semibold">
                      <a
                        href="https://github.com/orgs/vercel/discussions/3903#discussioncomment-6926884"
                        target="_blank"
                        className="hover:underline"
                      >
                        Vercel CronJob Issue #3903
                      </a>{' '}
                      -{' '}
                    </span>
                    Someone posted on one of my technical articles that there
                    was a community issue with Vercel Cron Jobs. I was able to
                    help them troubleshoot and resolve the issue through my
                    experience where my answer is highlighted as the accepted
                    solution.
                  </li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Technical Writing">
          <AccordionTrigger className="text-xl font-bold md:text-2xl">
            Technical Writing{' '}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <span className="text-sm">
              Article Views:{' '}
              <span className="text-primary">
                {totalPostViews.toLocaleString()}
              </span>
            </span>
            <div className="flex w-full flex-col gap-2 md:px-0">
              {articles
                .sort(
                  (a: Article, b: Article) =>
                    b.page_views_count - a.page_views_count
                )
                .map((article: Article, index) => (
                  <a
                    key={article.id}
                    href={article.url}
                    className="text-md group flex items-center justify-between rounded-lg border bg-accent p-4 text-lg hover:bg-muted-foreground/20 dark:hover:bg-accent/75 sm:mx-4 md:mx-0"
                    target="_blank"
                  >
                    <div className="flex flex-col">
                      <span className="text-sm md:text-lg">
                        {article.title}
                      </span>
                      <span className="font-mono text-sm -tracking-[.05em] md:text-base">
                        {Number(article.page_views_count).toLocaleString()}{' '}
                        views / {article.reading_time_minutes} min read
                      </span>
                    </div>
                  </a>
                ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="OSS Contributions">
          <AccordionTrigger className="text-xl font-bold md:text-2xl">
            OSS Contributions
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <ul className="mt-1 list-outside list-disc space-y-2 pl-4 marker:text-primary">
              <li>
                <a
                  href="https://github.com/exercism/javascript/pull/1958"
                  className="font-semibold"
                  target="_blank"
                >
                  Exercism.io
                </a>
                {` - `}Updated documentation for an exercism exercise I was
                working on. I noticed an issue and submitted a PR to fix it.
              </li>
              <li>
                <a
                  href="https://github.com/Virtual-Coffee/VC-Contributors/issues/340"
                  className="font-semibold"
                  target="_blank"
                >
                  VirtualCoffee.io
                </a>
                {` - `}I am updating documentation to support volunteer roles
                and scripts used during the bi-weekly coffee chats.
              </li>
              <li>
                <a
                  href="https://github.com/open-sauced/intro/pull/83"
                  className="font-semibold"
                  target="_blank"
                >
                  OpenSauced
                </a>
                {` - `} I attended a how to contributed to open source workshop
                and participated in Hacktoberfest 2023. I updated Documentation
                for their Intro course.
              </li>
              <li>
                <a
                  href="https://github.com/rupali-codes/LinksHub/pull/1655"
                  className="font-semibold"
                  target="_blank"
                >
                  LinksHub
                </a>
                {` - `}This was a fun contribution! LinksHub needed pagination
                on their site, so I added that feature and it was merged into
                the main branch.
              </li>
              <li>
                <a
                  href="https://github.com/TheTechCommute/TheTechCommute/pull/2"
                  className="font-semibold"
                  target="_blank"
                >
                  Tech Commute
                </a>
                {` - `}This is a new repo that I am starting to contributed to.
                I contributed to the README.md file and added a section in the
                repo for the community to add new ideas.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Conferences">
          <AccordionTrigger className="text-xl font-bold md:text-2xl">
            Conferences
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <ul className="mt-1 list-outside list-disc space-y-2 pl-4 marker:text-primary">
              <li>
                <a
                  href="https://www.renderatl.com/"
                  className="font-bold hover:underline"
                  target="_blank"
                >
                  Render ATL
                </a>
              </li>
              <li>
                <a
                  href="https://thatconference.com/"
                  className="font-bold hover:underline"
                  target="_blank"
                >
                  THAT Conference
                </a>
                {` `}- Texas & Wisconsin
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Speaking">
          <AccordionTrigger className="text-xl font-bold md:text-2xl">
            Speaking
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <ul className="mt-1 list-outside list-disc space-y-2 pl-4 marker:text-primary">
              <li>
                <a
                  href="#"
                  className="font-bold text-primary hover:underline"
                  target="_blank"
                >
                  February 9th, 2024
                </a>
                {` - `}
                How to Improve Your Home WiFi Speeds (YouTube Link TBD)
              </li>
              <li>
                <a
                  href="https://youtu.be/P4aMxBWwLD0?si=g3xjNuqtQV6w8z7J"
                  className="font-bold text-primary hover:underline"
                  target="_blank"
                >
                  August 30th, 2023
                </a>
                {` - `}
                The Complexity of ADHD Treatment
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
