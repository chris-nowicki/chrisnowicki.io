import YouTubeEmbed from '@/components/YouTubeEmbed'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export default function Speaking() {
  return (
    <div className="flex flex-wrap gap-4">
      <Card className="w-full transition-all duration-100 ease-in-out hover:border-primary md:w-[375px]">
        <CardHeader>
          <CardTitle>How to Improve Your Home WiFi Speeds ⚡️</CardTitle>
        </CardHeader>
        <CardContent>
          <YouTubeEmbed embedId="ZSMU5Avf-T0?si=8XR7aRmDw_0hSChK" />
        </CardContent>
      </Card>

      <Card className="w-full transition-all duration-100 ease-in-out hover:border-primary md:w-[375px]">
        <CardHeader>
          <CardTitle>The Complexity of ADHD Treatment 🧠</CardTitle>
        </CardHeader>
        <CardContent>
          <YouTubeEmbed embedId="P4aMxBWwLD0?si=AJbMu8fqJ-U9EQNN" />
        </CardContent>
      </Card>
    </div>
  )
}
