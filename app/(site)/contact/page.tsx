'use client'
import { sendEmail } from '@/actions/send-email'
import toast from 'react-hot-toast'
import SubmitBtn from './SubmitButton'
import SectionHeading from '@/components/SectionHeading'

export default function Contact() {
  return (
    <section className="flex w-full flex-col items-center gap-2 px-4 md:px-0">
      <SectionHeading>Contact</SectionHeading>
      <p className="-mt-2 md:text-center text-gray-700 dark:text-white/80 text-left md:text-lg">
        Please contact me directly at{' '}
        <a
          className="underline hover:text-purple-light dark:hover:text-purple-dark"
          href="mailto:chris@chrisnowicki.io"
        >
          chris@chrisnowicki.io
        </a>{' '}
        or through this form.
      </p>
      <div className="flex w-full flex-col justify-center rounded-lg bg-background-light p-8 text-foreground shadow-xl dark:bg-background-dark dark:shadow-background-dark">
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
          <input
            name="email"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
            className="h-14 rounded-lg border-none bg-gray-50 px-4 text-lg text-purple-600 focus:outline-double focus:outline-4  focus:outline-purple-600"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            maxLength={5000}
            className="my-3 h-52 rounded-lg bg-gray-50 p-4 text-lg text-purple-600 focus:outline-double focus:outline-4  focus:outline-purple-600"
          />
          <SubmitBtn />
        </form>
      </div>
    </section>
  )
}
