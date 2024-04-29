import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import YouTubeLink from '../YouTubeLink'

export default function Speaking() {
  return (
    <div className="flex flex-wrap gap-4">
      <Card className="w-full transition-all duration-100 ease-in-out hover:border-primary md:w-[375px]">
        <CardHeader>
          <CardTitle>How to Improve Your Home WiFi Speeds ⚡️</CardTitle>
        </CardHeader>
        <CardContent>
          <YouTubeLink
            id="ZSMU5Avf-T0"
            alt="How to Improve Your Home WiFi Speeds"
          />
        </CardContent>
      </Card>

      <Card className="w-full transition-all duration-100 ease-in-out hover:border-primary md:w-[375px]">
        <CardHeader>
          <CardTitle>The Complexity of ADHD Treatment 🧠</CardTitle>
        </CardHeader>
        <CardContent>
          <YouTubeLink
            id="P4aMxBWwLD0"
            alt="The Complexity of ADHD Treatment"
          />
        </CardContent>
      </Card>
    </div>
  )
}
