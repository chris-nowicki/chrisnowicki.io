import React from 'react'
import Icon from '@/components/Icon'
import SectionHeading from '@/components/SectionHeading'
import Image from 'next/image'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'

import YouTubeEmbed from '@/components/YouTubeEmbed'
import { Badge } from '@/components/ui/badge'

export default function Engagements() {
  return (
    <section id='engagements' className="scroll-mt-8 border-1 flex w-full flex-col gap-4 rounded-xl px-4 md:px-0">
      <SectionHeading className='text-2xl md:text-3xl'>Community & Speaking</SectionHeading>

      <Accordion type="single" collapsible className="w-full">
        {/* Community Involvement */}
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
              <p className="-mb-4 leading-6">
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
                    There was a community issue with Vercel Cron Jobs, and I was
                    able to help them troubleshoot and resolve the issue through
                    my experience where my answer is highlighted as the accepted
                    solution.
                  </li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Conferences */}
        <AccordionItem value="Conferences">
          <AccordionTrigger className="text-xl font-bold md:text-2xl">
            Conferences
          </AccordionTrigger>
          <AccordionContent className="flex flex-wrap gap-4">
            {/* THAT Conference */}
            <a href="https://thatconference.com/" target="_blank">
              <Card className="w-full transition-all duration-100 ease-in-out hover:border-primary md:w-[350px]">
                <CardHeader>
                  <CardTitle className="flex justify-center">
                    <Image
                      src="/icons/ThatConferenceLogo.svg"
                      width={125}
                      height={125}
                      alt="THAT Conference Logo"
                    />
                  </CardTitle>
                </CardHeader>
                <CardFooter className="flex justify-center">
                  <div className="flex flex-wrap gap-1">
                    <Badge className="rounded-full" variant="secondary">
                      January 2024, TX
                    </Badge>
                  </div>
                </CardFooter>
              </Card>
            </a>

            {/* Render ATL */}
            <a href="https://renderatl.com/" target="_blank">
              <Card className="flex w-full flex-col justify-between transition-all duration-100 ease-in-out hover:border-primary md:w-[350px]">
                <CardHeader>
                  <CardTitle className=" flex flex-col items-center gap-1">
                    <Image
                      src="/icons/renderATL.svg"
                      width={75}
                      height={75}
                      alt="Render ATL Conference Logo"
                    />
                    Render ATL
                  </CardTitle>
                </CardHeader>
                <CardFooter className="flex justify-center">
                  <div className="flex flex-wrap gap-1">
                    <Badge className="rounded-full" variant="secondary">
                      June 2023
                    </Badge>
                  </div>
                </CardFooter>
              </Card>
            </a>
          </AccordionContent>
        </AccordionItem>

        {/* Speaking */}
        <AccordionItem value="Speaking">
          <AccordionTrigger className="text-xl font-bold md:text-2xl">
            Speaking
          </AccordionTrigger>
          <AccordionContent className="flex flex-wrap gap-4">
            <Card className="w-full transition-all duration-100 ease-in-out hover:border-primary md:w-[350px]">
              <CardHeader>
                <CardTitle>How to Improve Your Home WiFi Speeds ⚡️</CardTitle>
                <CardDescription>February 9th, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <YouTubeEmbed embedId="ZSMU5Avf-T0?si=8XR7aRmDw_0hSChK" />
              </CardContent>
            </Card>

            <Card className="w-full transition-all duration-100 ease-in-out hover:border-primary md:w-[350px]">
              <CardHeader>
                <CardTitle>The Complexity of ADHD Treatment 🧠</CardTitle>
                <CardDescription>August 30th, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <YouTubeEmbed embedId="P4aMxBWwLD0?si=AJbMu8fqJ-U9EQNN" />
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
