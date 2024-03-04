'use client'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Icon from './Icon'

export default function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { scrollY } = useScroll()

  // show up button when scrollY > 200
  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 200) {
      setShowScrollTop(true)
    } else {
      setShowScrollTop(false)
    }
  })

  // on page load, if returning to a point > 200, show scroll to top button
  useEffect(() => {
    scrollY.get() > 200 ? setShowScrollTop(true) : setShowScrollTop(false)
  }, [])
  return (
    <>
      {' '}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: 'easeInOut' }}
          className="group fixed bottom-10 right-12 hidden rounded-full border bg-primary p-2 text-white shadow-lg transition-all duration-150 ease-in-out hover:scale-105 md:block"
          onClick={() => {
            document.body.scrollTop = 0 // For Safari
            document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
          }}
          aria-label="scroll to top"
        >
          <Icon id="arrow-up" size={32} />
        </motion.button>
      )}
    </>
  )
}
