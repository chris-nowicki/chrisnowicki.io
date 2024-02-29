import SectionHeading from '@/components/SectionHeading'
import { Button } from '@/components/ui/button'
import EmailForm from './EmailForm'

export const dynamic = 'force-dynamic'

export default async function Contact() {
  return (
    <section className="flex w-full flex-col items-center gap-2 px-4 md:items-start md:px-0">
      <SectionHeading className="-mb-6">Contact</SectionHeading>

      {/* contact description */}
      <p className="-mt-2 text-center md:text-left md:text-lg">
        Please contact me directly at{' '}
        <a
          className="text-primary hover:underline"
          href="mailto:chris@chrisnowicki.io"
        >
          chris@chrisnowicki.io,
        </a>{' '}
        through the form below, or{' '}
        <a
          className="text-primary hover:underline"
          href="https://cal.com/chriswix"
          target="_blank"
        >
          schedule a call
        </a>{' '}
        with me via Cal.
      </p>

      {/* contact buttons */}
      <div className="my-4 flex gap-3">
        <Button variant="default" className="rounded-lg md:text-lg" size="lg">
          <a href="https://cal.com/chriswix" target="_blank">
            Chat With Me
          </a>
        </Button>
        <Button variant="outline" className="rounded-lg md:text-lg" size="lg">
          <a href="mailto:chris@chrisnowicki.io">Email Me</a>
        </Button>
      </div>

      {/* email form */}
      <EmailForm />
    </section>
  )
}
