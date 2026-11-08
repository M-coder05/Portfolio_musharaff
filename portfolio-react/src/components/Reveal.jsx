import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, refreshAfterImages } from '../utils/gsap'

export default function Reveal({ children, delay = 0 }) {
  const scopeRef = useRef(null)
  useGSAP(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const element = scopeRef.current.firstElementChild
      gsap.fromTo(element, {
        autoAlpha: 0,
        y: 18,
      }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.72,
        delay: delay / 1000,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 88%',
          once: true,
        },
      })
      return refreshAfterImages(scopeRef.current)
    })
    return () => media.revert()
  }, { scope: scopeRef, dependencies: [delay], revertOnUpdate: true })

  return <div className="reveal-scope" ref={scopeRef}>{children}</div>
}
