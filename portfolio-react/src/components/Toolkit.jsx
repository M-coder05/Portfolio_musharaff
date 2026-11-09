import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import portfolioData from '../data/portfolioData'
import PlateHeader from './PlateHeader'
import { animateCardBatch, gsap, refreshAfterImages } from '../utils/gsap'

export default function Toolkit() {
  const scopeRef = useRef(null)
  const animatedCardsRef = useRef(new Set())

  useGSAP(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      animateCardBatch(scopeRef.current, animatedCardsRef.current)
      return refreshAfterImages(scopeRef.current)
    })
    return () => media.revert()
  }, { scope: scopeRef })

  return (
    <section className="plate-section" id="toolkit" aria-labelledby="toolkitTitle" ref={scopeRef}>
      <PlateHeader
        number="PLATE NO. 03"
        classification="TECHNICAL INDEX"
        title="Toolkit"
        titleId="toolkitTitle"
        caption="CORE LANGUAGES, FRAMEWORKS & WORKFLOWS"
      />

      <div className="toolkit-index" id="toolkitContainer" role="region" aria-label="Skills by Category">
        {portfolioData.skills.map((group) => (
          <article
            className="toolkit-category-card"
            data-gsap-card
            data-card-id={`skill-${group.category}`}
            key={group.category}
          >
            <div className="toolkit-cat-header">
              <span className="toolkit-cat-name">{group.category}</span>
              <span className="toolkit-cat-lead">{group.lead}</span>
            </div>
            <table className="toolkit-items-table" role="table">
              <tbody>
                {group.items.map((item) => (
                  <tr key={item.name}>
                    <td className="toolkit-skill-name">{item.name}</td>
                    <td className="toolkit-skill-detail">{item.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>
        ))}
      </div>
    </section>
  )
}
