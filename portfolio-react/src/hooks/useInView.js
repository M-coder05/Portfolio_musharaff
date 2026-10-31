import { useEffect, useRef, useState } from 'react'

export default function useInView({ root = null, rootMargin = '0px', threshold = 0.12 } = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(() => (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
    || !('IntersectionObserver' in window)
  ))

  useEffect(() => {
    const element = ref.current
    if (!element || isInView) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        observer.unobserve(entry.target)
      }
    }, {
      root,
      rootMargin,
      threshold,
    })

    observer.observe(element)
    return () => observer.disconnect()
  }, [isInView, root, rootMargin, threshold])

  return [ref, isInView]
}
