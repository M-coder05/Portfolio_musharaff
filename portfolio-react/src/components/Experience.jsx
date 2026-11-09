import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import portfolioData from '../data/portfolioData'
import PlateHeader from './PlateHeader'
import { animateCardBatch, gsap, refreshAfterImages } from '../utils/gsap'

export default function Experience() {
  const scopeRef = useRef(null)
  const animatedCardsRef = useRef(new Set())

  useGSAP(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      animateCardBatch(scopeRef.current, animatedCardsRef.current)

      gsap.fromTo('[data-ledger-rule]', {
        scaleX: 0,
        transformOrigin: 'left center',
      }, {
        scaleX: 1,
        duration: 1.5,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '#experienceLedger',
          start: 'top 82%',
        },
      })

      return refreshAfterImages(scopeRef.current)
    })
    return () => media.revert()
  }, { scope: scopeRef })

  return (
    <section className="plate-section" id="experience" aria-labelledby="experienceTitle" ref={scopeRef}>
      <PlateHeader
        number="PLATE NO. 06"
        classification="CHRONOLOGICAL LEDGER"
        title="Trade Record"
        titleId="experienceTitle"
        caption="INTERNSHIPS & INDUSTRY APPOINTMENTS"
      />

      <div className="ledger-timeline" id="experienceLedger" role="feed" aria-label="Experience Timeline">
        <span className="ledger-rule" data-ledger-rule aria-hidden="true" />
        {portfolioData.experience.map((experience) => (
          <article
            className="ledger-row"
            id={experience.id}
            data-gsap-card
            data-card-id={`experience-${experience.id}`}
            key={experience.id}
          >
            <div className="ledger-margin">
              <span className="ledger-plate-id">{experience.plateNumber}</span>
              <div className="ledger-period">{experience.period}</div>
              <div className="ledger-duration">{experience.duration}</div>
              <div className="ledger-location">{experience.location} • {experience.type}</div>
            </div>
            <div className="ledger-content">
              <h3 className="ledger-role-title">{experience.role}</h3>
              <div className="ledger-org">@ {experience.organization}</div>
              <ul className="ledger-bullets">
                {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
              <div className="ledger-tech-strip">
                {experience.technologies.map((technology) => <span className="ledger-tag" key={technology}>{technology}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
