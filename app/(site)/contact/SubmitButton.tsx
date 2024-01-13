'use client'
import { PaperPlane } from '@/assets/Icons'
import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'

export default function SubmitBtn() {
  const { pending } = useFormStatus()

  return (
    <Button
      variant="outline"
      type="submit"
      className="group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-lg text-primary transition-all  hover:text-primary disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ?
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-primary"></div>
      : <>
          Submit{' '}
          <PaperPlane classProps="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 text-primary" />
        </>
      }
    </Button>
  )
}
