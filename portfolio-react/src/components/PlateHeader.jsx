import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../utils/gsap'

/**
 * Shared section masthead. Animates the plate marker, title and caption like a
 * sheet being pulled through the press: the rule wipes in, then the title sets.
 */
export default function PlateHeader({
  number,
  classification,
  title,
  titleId,
  caption,
  action,
  as: TitleTag = 'h2',
}) {
  const scopeRef = useRef(null)

  useGSAP(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const q = gsap.utils.selector(scopeRef)
      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: scopeRef.current,
          start: 'top 92%',
          once: true,
        },
        onComplete: () => {
          gsap.set(q('.plate-marker, .plate-title, [data-plate-caption], [data-plate-action]'), {
            clearProps: 'opacity,visibility,transform,clipPath',
          })
        },
      })

      timeline
        .fromTo(q('.plate-marker'), {
          autoAlpha: 0,
          clipPath: 'inset(0 100% 0 0)',
        }, {
          autoAlpha: 1,
          clipPath: 'inset(0 0% 0 0)',
          duration: 0.65,
        })
        .fromTo(q('.plate-title'), {
          autoAlpha: 0,
          y: 22,
          clipPath: 'inset(0 0 100% 0)',
        }, {
          autoAlpha: 1,
          y: 0,
          clipPath: 'inset(0 0 0% 0)',
          duration: 0.8,
        }, '-=0.3')
        .fromTo(q('[data-plate-caption], [data-plate-action]'), {
          autoAlpha: 0,
          y: 10,
        }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
        }, '-=0.5')

      return () => timeline.kill()
    })
    return () => media.revert()
  }, { scope: scopeRef })

  return (
    <div className="plate-header" ref={scopeRef}>
      <div className="plate-marker">
        <span className="plate-marker-num">{number}</span>
        <span className="plate-marker-class">{classification}</span>
      </div>
      <div className="plate-title-row">
        <TitleTag className="plate-title" id={titleId}>{title}</TitleTag>
        {action}
        {caption && <span className="plate-caption" data-plate-caption>{caption}</span>}
      </div>
    </div>
  )
}
