'use client'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import type { SkillsType } from '@/types/types'
import { Badge } from './ui/badge'

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

export default function Skills({ skills }: { skills: SkillsType[] }) {
  return (
    <motion.section
      className="scroll-mt-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <SectionHeading>Skills</SectionHeading>

      {/* list of skills from sanity CMS */}
      <ul className="mt-6 flex flex-wrap justify-center gap-2 md:gap-4">
        {skills.map((skill, index) =>
          skill.link ? (
            <a
              key={index}
              href={skill.link}
              className="hover:text-purple-light dark:hover:text-purple-dark"
              target="_blank"
            >
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
                <Badge className="text-md rounded-full">{skill.name}</Badge>
              </motion.li>
            </a>
          ) : (
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
              <Badge className="text-md rounded-full">{skill.name}</Badge>
            </motion.li>
          )
        )}
      </ul>
    </motion.section>
  )
}
