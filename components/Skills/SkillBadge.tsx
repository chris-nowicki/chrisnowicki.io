import { Badge } from '../ui/badge'

export default function SkillBadge({ skill }: { skill: string }) {
  return (
    <Badge className="'text-md hover:scale-105' rounded-full bg-primary-foreground px-6 py-2  text-primary transition-all hover:bg-primary-foreground">
      {skill}
    </Badge>
  )
}
