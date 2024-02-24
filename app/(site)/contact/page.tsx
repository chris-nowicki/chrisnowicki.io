'use client'
import { sendEmail } from '@/actions/send-email'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import SubmitBtn from './SubmitButton'
import SectionHeading from '@/components/SectionHeading'
import toast from 'react-hot-toast'
import { Button } from '@/components/ui/button'

export default function Contact() {
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
      <div className="flex w-full flex-col justify-center rounded-lg border p-8 text-primary shadow">
        <form
          id="contact-form"
          className="flex flex-col"
          action={async (formData) => {
            const { error } = await sendEmail(formData)

            if (error) {
              toast.error(error)
              return
            }

            toast.success('Email sent successfully!')

            const form = document.getElementById(
              'contact-form'
            ) as HTMLFormElement
            form.reset()
          }}
        >
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            className="h-14 rounded-lg px-4 text-lg text-primary placeholder:text-primary"
            maxLength={500}
            required
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            required
            maxLength={5000}
            className="my-3 h-52 rounded-lg p-4 text-lg text-primary placeholder:text-primary"
          />
          <SubmitBtn />
        </form>
      </div>
    </section>
  )
}
