import { useState, useEffect } from 'react'

const useSectionVisibility = (sectionId) => {
  const [isSectionVisible, setIsSectionVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(sectionId)

      if (!section) return

      const sectionTop = section.offsetTop
      const sectionBottom = sectionTop + section.offsetHeight
      const windowBottom = window.scrollY + window.innerHeight

      if (windowBottom >= sectionTop && window.scrollY <= sectionBottom) {
        setIsSectionVisible(true)
      } else {
        setIsSectionVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Limpieza del evento cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sectionId])

  return isSectionVisible
}

export default useSectionVisibility
