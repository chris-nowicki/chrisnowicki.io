import { useActiveSection } from '@/context/active-section'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import type { SectionName } from '@/types/types'
import { useScroll } from 'framer-motion'

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  })
  const { setActiveSection, timeOfLastClick } = useActiveSection()
  const { scrollY } = useScroll()

  useEffect(() => {
    if (
      inView &&
      Date.now() - timeOfLastClick > 1000 &&
      scrollY.get() > 0
    ) {
      setActiveSection(sectionName)
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName, scrollY])

  return {
    ref,
  }
}
