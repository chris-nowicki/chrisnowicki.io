'use client'
import { sendEmail } from '@/actions/send-email'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import SubmitBtn from './SubmitButton'
import SectionHeading from '@/components/SectionHeading'
import toast from 'react-hot-toast'

export default function Contact() {
  return (
    <section className="flex w-full flex-col items-center gap-2 px-4 md:px-0">
      <SectionHeading className="-mb-6">Contact</SectionHeading>
      <p className="-mt-2 text-left md:text-center md:text-lg">
        Please contact me directly at{' '}
        <a
          className="hover:underline text-primary"
          href="mailto:chris@chrisnowicki.io"
        >
          chris@chrisnowicki.io
        </a>{' '}
        or through this form.
      </p>
      <div className="flex w-full flex-col justify-center rounded-lg border p-8 text-primary shadow">
        <form
          id="contact-form"
          className="flex flex-col"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData)

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
