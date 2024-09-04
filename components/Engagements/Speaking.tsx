import YouTubeLink from '../YouTubeLink'
import { speakingLinks } from '@/content/speaking'

export default function Speaking() {
  return (
    <div className="flex flex-wrap gap-4">
      {speakingLinks.map((item) => (
        <YouTubeLink key={item.id} {...item} />
      ))}
    </div>
  )
}
