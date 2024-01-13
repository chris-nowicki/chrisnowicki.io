'use client'
import { motion } from 'framer-motion'
import type { SkillsType } from '@/types/types'
import SectionHeading from '../SectionHeading'
import SkillBadge from './SkillBadge'

type SkillsProps = {
  skills: SkillsType[]
}

const fadeInAnimate = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.03 * index,
    },
  }),
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <motion.section
      className="scroll-mt-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <SectionHeading>Skills</SectionHeading>

      {/* list of skills from sanity CMS */}
      <ul className="mt-6 flex flex-wrap justify-center gap-2 md:gap-4">
        {skills.map((skill, index) => (
          <motion.li
            key={skill.name}
            custom={index}
            variants={fadeInAnimate}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            {skill.link ?
              <a key={index} href={skill.link} target="_blank">
                <SkillBadge skill={skill.name} />
              </a>
            : <SkillBadge skill={skill.name} />}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  )
}