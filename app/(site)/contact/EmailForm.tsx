'use client'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { sendEmail } from '@/actions/send-email'
import SubmitBtn from './SubmitButton'
import toast from 'react-hot-toast'

export default function EmailForm() {
  return (
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
  )
}
