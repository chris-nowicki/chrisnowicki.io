'use client'
import React from 'react'
import { skills } from '@/lib/data'
import { useSectionInView } from '@/hooks/useSectionInView'
import { motion } from 'framer-motion'


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

export default function Skills() {
  const { ref } = useSectionInView('Skills', 0.2)
  return (
    <motion.section
      ref={ref}
      id="skills"
      className="scroll-mt-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <h1 className="w-full  text-center text-4xl uppercase ">Skills</h1>
      <ul className="mt-6 flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            className="rounded-full bg-gray-300/20 px-4 py-2 text-lg md:text-xl text-purple-light dark:text-purple-dark"
            custom={index}
            variants={fadeInAnimate}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  )
}
