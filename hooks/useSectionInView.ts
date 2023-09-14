import { useActiveSection } from '@/context/active-section'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import type { SectionName } from '@/types'

export function useSectionInView(sectionName: SectionName, threshold = 0.75, initialInView = false) {
  const { ref, inView } = useInView({
    threshold,
    initialInView: initialInView,
  })
  const { setActiveSection, timeOfLastClick } = useActiveSection()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName])

  return {
    ref,
  }
}
