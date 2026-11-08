import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import portfolioData from '../data/portfolioData'
import Reveal from './Reveal'
import { animateCardBatch, gsap, refreshAfterImages } from '../utils/gsap'

const filters = [
  { id: 'all', label: 'All Records' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'data-ai', label: 'Data / AI' },
  { id: 'awards', label: 'Awards & Ranks' },
  { id: 'events', label: 'Events & Workshops' },
]
const highlightedAchievements = portfolioData.achievements.filter(({ id }) => (
  id === 'achieve-sankalpana-cert' || id === 'event-pragyan-mldl'
))

function matchesFilter(item, filterId) {
  return item.category === filterId || item.categories?.includes(filterId)
}

export default function Achievements({ onOpenProof }) {
  const scopeRef = useRef(null)
  const animatedCardsRef = useRef(new Set())
  const [activeFilter, setActiveFilter] = useState('all')
  const records = activeFilter === 'all'
    ? portfolioData.achievements
    : portfolioData.achievements.filter((item) => matchesFilter(item, activeFilter))

  useGSAP(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      animateCardBatch(scopeRef.current, animatedCardsRef.current)
      return refreshAfterImages(scopeRef.current)
    })
    return () => media.revert()
  }, { scope: scopeRef, dependencies: [activeFilter], revertOnUpdate: true })

  return (
    <section className="plate-section" id="achievements" aria-labelledby="achievementsTitle" ref={scopeRef}>
      <div className="plate-header">
        <div className="plate-marker">
          <span className="plate-marker-num">PLATE NO. 07</span>
          <span className="plate-marker-class">VERIFIED CREDENTIALS</span>
        </div>
        <div className="plate-title-row">
          <Reveal><h2 className="plate-title" id="achievementsTitle">Plates of Honour</h2></Reveal>
          <span className="plate-caption">AWARDS, CREDENTIALS &amp; SYMPOSIA ({portfolioData.achievements.length} VERIFIED RECORDS)</span>
        </div>
      </div>

      <div className="featured-credentials" aria-labelledby="featuredCredentialsTitle">
        <div className="featured-credentials-heading">
          <h3 id="featuredCredentialsTitle">Selected Highlights</h3>
          <span>AWARD &amp; HANDS-ON WORKSHOP</span>
        </div>
        <div className="recognition-grid">
          {highlightedAchievements.map((achievement) => (
            <article
              className="recognition-record"
              data-gsap-card
              data-card-id={`highlight-${achievement.id}`}
              key={achievement.id}
            >
              <span className="recognition-record-meta">{achievement.categoryLabel} · {achievement.date}</span>
              <h4>{achievement.title}</h4>
              <p>{achievement.event}</p>
              <p className="recognition-record-issuer">{achievement.issuer}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="achievements-filter-bar" role="tablist" aria-label="Filter credentials by category">
        {filters.map((filter) => {
          const count = filter.id === 'all'
            ? portfolioData.achievements.length
            : portfolioData.achievements.filter((item) => matchesFilter(item, filter.id)).length
          return (
            <button
              type="button"
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              data-filter={filter.id}
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              role="tab"
              aria-selected={activeFilter === filter.id}
            >
              {filter.label} <span className="count">({count})</span>
            </button>
          )
        })}
      </div>

      <div className="contact-sheet-grid" id="achievementsGrid" role="region" aria-label="Credentials contact sheet">
        {records.map((item) => (
          <article
            className="proof-card"
            data-gsap-card
            data-card-id={`certificate-${item.id}`}
            key={item.id}
            tabIndex="0"
            role="button"
            aria-label={`Enlarge ${item.title}`}
            onClick={(event) => onOpenProof(records, index, event.currentTarget)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                onOpenProof(records, index, event.currentTarget)
              }
            }}
          >
            <div className="proof-card-media">
              <img
                src={item.image}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
                decoding="async"
              />
              <span className="proof-card-badge">{item.categoryLabel}</span>
            </div>
            <div className="proof-card-body">
              <div className="proof-card-folio">
                {item.plateNumber && <span>{item.plateNumber}</span>}
                {item.date && <span>{item.date}</span>}
              </div>
              <h4 className="proof-card-title">{item.title}</h4>
              <div className="proof-card-issuer">{item.issuer}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
