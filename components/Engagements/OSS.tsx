import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'

export default function OSS() {
  return (
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
            {` - `}Updated documentation for an exercism exercise I was working
            on. I noticed an issue and submitted a PR to fix it.
          </li>
          <li>
            <a
              href="https://github.com/Virtual-Coffee/VC-Contributors/issues/340"
              className="font-semibold"
              target="_blank"
            >
              VirtualCoffee.io
            </a>
            {` - `}I am updating documentation to support volunteer roles and
            scripts used during the bi-weekly coffee chats.
          </li>
          <li>
            <a
              href="https://github.com/open-sauced/intro/pull/83"
              className="font-semibold"
              target="_blank"
            >
              OpenSauced
            </a>
            {` - `} I attended a how to contributed to open source workshop and
            participated in Hacktoberfest 2023. I updated Documentation for
            their Intro course.
          </li>
          <li>
            <a
              href="https://github.com/rupali-codes/LinksHub/pull/1655"
              className="font-semibold"
              target="_blank"
            >
              LinksHub
            </a>
            {` - `}This was a fun contribution! LinksHub needed pagination on
            their site, so I added that feature and it was merged into the main
            branch.
          </li>
          <li>
            <a
              href="https://github.com/TheTechCommute/TheTechCommute/pull/2"
              className="font-semibold"
              target="_blank"
            >
              Tech Commute
            </a>
            {` - `}This is a new repo that I am starting to contributed to. I
            contributed to the README.md file and added a section in the repo
            for the community to add new ideas.
          </li>
        </ul>
      </AccordionContent>
    </AccordionItem>
  )
}
