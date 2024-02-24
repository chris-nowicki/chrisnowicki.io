'use client'
import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'
import Icon from '@/components/Icon'

export default function SubmitBtn() {
  const { pending } = useFormStatus()

  return (
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
  )
}
