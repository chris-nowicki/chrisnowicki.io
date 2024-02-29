import type { SkillsType } from '@/types/types'
import SectionHeading from '../SectionHeading'
import { getSkills } from '@/sanity/sanity-queries'
import SkillsList from './SkillsList'

export default async function Skills() {
  const skills: SkillsType[] = await getSkills()

  return (
    <>
      <SectionHeading>Skills</SectionHeading>
      <SkillsList skills={skills} />
    </>
  )
}
