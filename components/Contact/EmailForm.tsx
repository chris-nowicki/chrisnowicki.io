'use client'
import { sendEmail } from '@/actions/send-email'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import z from 'zod'
import SubmitButton from './SubmitButton'

export default function EmailForm() {
  const formSchema = z.object({
    email: z.string().email(),
    message: z.string().min(1).max(5000),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', message: '' },
  })

  return (
    <div className="flex w-full flex-col justify-center rounded-lg border p-8 text-primary shadow">
      <Form {...form}>
        <form
          className="flex flex-col"
          action={async (formData) => {
            const { error } = await sendEmail(formData)

            if (error) {
              toast.error(error)
              return
            }

            toast.success('Email sent successfully!')
            form.reset()
          }}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel hidden>Your Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="h-14 rounded-lg px-4 text-lg text-primary placeholder:text-primary"
                    maxLength={500}
                    required
                    {...field}
                  />
                </FormControl>
                <FormDescription hidden>
                  Please put your email here.
                </FormDescription>
                <FormMessage className="text-red-600" {...field} />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel hidden>Your Message</FormLabel>
                <FormControl>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    className="my-3 h-52 rounded-lg p-4 text-lg text-primary placeholder:text-primary"
                    maxLength={5000}
                    required
                    {...field}
                  />
                </FormControl>
                <FormDescription hidden>
                  Please input the message you would like to send to chris.
                </FormDescription>
                <FormMessage className="text-red-600" {...field} />
              </FormItem>
            )}
          />
          <SubmitButton />
        </form>
      </Form>
    </div>
  )
}
