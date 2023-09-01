import React from 'react'
import { skills } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-28">
      <h1 className="w-full  text-center text-4xl uppercase ">Skills</h1>
      <ul className="mt-6 flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <li key={index} className="rounded-full bg-gray-300/20 px-4 py-2 text-xl text-purple-light dark:text-purple-dark">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
