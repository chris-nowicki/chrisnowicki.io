import Icon from '../Icon'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'
import Image from 'next/image'

export default function Community() {
  return (
    <AccordionItem value="Community Involvement">
      <AccordionTrigger className="text-xl font-bold md:text-2xl">
        Community Involvement
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4">
        {/* Virtual Coffee */}
        <div className="rounded-lg border p-4">
          <div className="-mb-2 flex flex-col items-center md:flex-row md:justify-between">
            <a
              href="https://virtualcoffee.io"
              target="_blank"
              rel="noreferrer"
              className="mb-1 md:mb-0"
              aria-label="Link to Virtual Coffee website. Click to open in a new tab."
            >
              <Image
                src="/images/logos/virtualCoffee.svg"
                alt="Virtual Coffee Logo"
                width={200}
                height={200}
              />
            </a>
            <span className="font-semibold">June 2023 - Present</span>
          </div>
          <p className="-mb-4 leading-6">
            Virtual Coffee is a community of 900+ wonderful humans where people
            connect with others who are in similar stages of their journey.
            Whether they are trying to break into tech for the first time, are
            career transitioners, or seasoned professionals, Virtual Coffee is a
            place where friends are made, and the community supports and uplifts
            each other.
          </p>
          <p>
            I've been volunteering with the bi-weekly coffee chats in the
            following roles:
          </p>
          <ul className="mt-1 list-outside list-disc space-y-2 pl-4 marker:text-primary">
            <li>
              <span className="font-semibold">Room Leader - </span>The Room
              Leaders are the conversation facilitators of the breakout rooms.
              They give some instructions (handraise function), run the
              introductions, and make sure everyone is being heard. If no one
              has a topic, the room leader brings up the "backpocket" topic of
              choice.
            </li>
            <li>
              <span className="font-semibold">Note Taker - </span>Take notes for
              breakout room conversations and post to the Slack "General"
              channel.
            </li>
            <li>
              <span className="font-semibold">MC -</span>Represents the Virtual
              Coffee organization by giving opening announcements, drops import
              links into chat, answers questions, and welcomes new members.
            </li>
            <li>
              <span className="font-semibold">Host -</span>The host controls the
              role assignments and the breakout rooms. They monitor for members
              who show up late, and control when the rooms are opened and
              closed.
            </li>
          </ul>
        </div>

        {/* Discord */}
        <div className="flex flex-col items-center gap-6 rounded-lg border p-4 md:flex-row">
          <div>
            <Icon
              id="discord"
              size={64}
              className="-mb-4 text-[#5865F2]"
              focusable={false}
            />
          </div>
          <div>
            <p className="text-center md:text-left">
              My Favorite Discord Communities:
            </p>
            <ul className="mt-1 list-outside list-disc space-y-2 pl-4 marker:text-primary">
              <li>
                <span className="font-semibold">Build in Public Live - </span>I
                am a part of a Build In Public Cohort / Community through{' '}
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
                <span className="font-semibold">THAT Accountability - </span>A
                newer community established after{' '}
                <a
                  href="https://thatconference.com/"
                  target="_blank"
                  className="font-semibold hover:underline"
                >
                  THAT Conference
                </a>
                , TX where we can stay connected with those we met at the
                conference, support one another, and hold each other accountable
                as we pursue our dreams / goals.
              </li>
            </ul>
          </div>
        </div>

        {/* Github */}
        <div className="flex flex-col items-center gap-6 rounded-lg border p-4 md:flex-row">
          <div>
            <Icon id="github" size={64} className="-mb-4" focusable={false} />
          </div>
          <div>
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
                able to help them troubleshoot and resolve the issue through my
                experience where my answer is highlighted as the accepted
                solution.
              </li>
            </ul>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}
