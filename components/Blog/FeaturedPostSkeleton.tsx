import { Skeleton } from '../ui/skeleton'
import Icon from '../Icon'

export default function FeaturedPostSkeleton() {
  return (
    <Skeleton className="flex h-[272px] w-[383px] items-center justify-center rounded-bl-xl rounded-tr-xl bg-foreground/10 md:rounded-tl-xl md:rounded-tr-none">
      <Icon id="image" className="h-12 w-12 text-muted-foreground" />
    </Skeleton>
  )
}
