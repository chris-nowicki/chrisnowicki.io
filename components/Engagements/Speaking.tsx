import YouTubeEmbed from '@/components/YouTubeEmbed'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'

export default function Speaking() {
  return (
    <AccordionItem value="Speaking">
      <AccordionTrigger className="text-xl font-bold md:text-2xl">
        Speaking
      </AccordionTrigger>
      <AccordionContent className="flex flex-wrap gap-4">
        <Card className="w-full transition-all duration-100 ease-in-out hover:border-primary md:w-[375px]">
          <CardHeader>
            <CardTitle>How to Improve Your Home WiFi Speeds ⚡️</CardTitle>
            <CardDescription>February 9th, 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <YouTubeEmbed embedId="ZSMU5Avf-T0?si=8XR7aRmDw_0hSChK" />
          </CardContent>
        </Card>

        <Card className="w-full transition-all duration-100 ease-in-out hover:border-primary md:w-[375px]">
          <CardHeader>
            <CardTitle>The Complexity of ADHD Treatment 🧠</CardTitle>
            <CardDescription>August 30th, 2023</CardDescription>
          </CardHeader>
          <CardContent>
            <YouTubeEmbed embedId="P4aMxBWwLD0?si=AJbMu8fqJ-U9EQNN" />
          </CardContent>
        </Card>
      </AccordionContent>
    </AccordionItem>
  )
}
