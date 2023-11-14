'use client'
import React from 'react'
import { useSectionInView } from '@/hooks/useSectionInView'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const fadeInAnimate = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}

type SkillsProps = {
  data: {
    name: string
    link?: string
  }[]
}

export default function Skills({ data }: SkillsProps) {
  const { ref } = useSectionInView('Skills', 0.2)
  return (
    <motion.section
      ref={ref}
      id="skills"
      className="scroll-mt-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <SectionHeading>Skills</SectionHeading>

      {/* list of skills from sanity CMS */}
      <ul className="mt-6 flex flex-wrap justify-center gap-4">
        {data.map((skill, index) =>
          skill.link ? (
            <a
              key={index}
              href={skill.link}
              className="hover:text-purple-light dark:hover:text-purple-dark"
              target="_blank"
            >
              <motion.li
                key={skill.name}
                className="text-md rounded-full bg-gray-300/20 px-4 py-2 md:text-xl"
                custom={index}
                variants={fadeInAnimate}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
              >
                {skill.name}
              </motion.li>
            </a>
          ) : (
            <motion.li
              key={skill.name}
              className="text-md rounded-full bg-gray-300/20 px-4 py-2 dark:text-foreground  md:text-xl"
              custom={index}
              variants={fadeInAnimate}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
            >
              {skill.name}
            </motion.li>
          )
        )}
      </ul>
    </motion.section>
  )
}
