import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, refreshAfterImages } from '../utils/gsap'

/**
 * Scroll-triggered editorial reveal.
 *
 * By default it animates its first child. Pass `selector` to reveal a group of
 * descendants with a stagger (the wrapper uses `display: contents`, so layout
 * is untouched).
 */
export default function Reveal({
  children,
  delay = 0,
  selector,
  stagger = 0.08,
  y = 18,
  duration = 0.72,
  start = 'top 88%',
}) {
  const scopeRef = useRef(null)

  useGSAP(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const scope = scopeRef.current
      const targets = selector
        ? [...scope.querySelectorAll(selector)]
        : [scope.firstElementChild].filter(Boolean)

      if (!targets.length) return undefined

      gsap.fromTo(targets, {
        autoAlpha: 0,
        y,
      }, {
        autoAlpha: 1,
        y: 0,
        duration,
        delay: delay / 1000,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: targets[0],
          start,
          once: true,
        },
        onComplete: () => gsap.set(targets, { clearProps: 'opacity,visibility,transform' }),
      })

      return refreshAfterImages(scope)
    })
    return () => media.revert()
  }, {
    scope: scopeRef,
    dependencies: [delay, selector, stagger, y, duration, start],
    revertOnUpdate: true,
  })

  return <div className="reveal-scope" ref={scopeRef}>{children}</div>
}
