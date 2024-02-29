'use client'
import { sendEmail } from '@/actions/send-email'
import Icon from '@/components/Icon'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useFormStatus } from 'react-dom'
import toast from 'react-hot-toast'

export default function EmailForm() {
  const { pending } = useFormStatus()

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
        <Button
          variant="outline"
          type="submit"
          className="group flex h-[3rem] w-full items-center justify-center gap-2 rounded-lg text-primary transition-all hover:text-primary  disabled:scale-100 disabled:bg-opacity-65 md:w-[8rem]"
          disabled={pending}
        >
          {pending ?
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-primary"></div>
          : <>
              Submit{' '}
              <Icon
                id="paper-plane"
                size={16}
                className="text-xs text-primary opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </>
          }
        </Button>
      </form>
    </div>
  )
}
