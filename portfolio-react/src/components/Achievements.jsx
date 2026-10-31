import { useState } from 'react'
import portfolioData from '../data/portfolioData'
import Reveal from './Reveal'

const filters = [
  { id: 'all', label: 'All Records' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'data-ai', label: 'Data / AI' },
  { id: 'awards', label: 'Awards & Ranks' },
  { id: 'events', label: 'Events & Workshops' },
]

function matchesFilter(item, filterId) {
  return item.category === filterId || item.categories?.includes(filterId)
}

export default function Achievements({ onOpenProof }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const records = activeFilter === 'all'
    ? portfolioData.achievements
    : portfolioData.achievements.filter((item) => matchesFilter(item, activeFilter))

  return (
    <section className="plate-section" id="achievements" aria-labelledby="achievementsTitle">
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
          <h3 id="featuredCredentialsTitle">Featured Credentials</h3>
          <span>SELECTED CLOUD &amp; DATA RECORDS</span>
        </div>
        <div className="featured-credentials-grid">
          {portfolioData.featuredCredentials.map((credential) => (
            <button
              type="button"
              className="featured-credential-card"
              key={credential.id}
              aria-label={`Open ${credential.title} from ${credential.issuer}`}
              onClick={(event) => {
                const index = portfolioData.achievements.findIndex((item) => item.id === credential.id)
                onOpenProof(portfolioData.achievements, index, event.currentTarget)
              }}
            >
              <span className="featured-credential-image-plate">
                <img
                  src={credential.image}
                  alt={credential.alt}
                  width={credential.width}
                  height={credential.height}
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="featured-credential-content">
                <span className="featured-credential-label">Featured</span>
                <span className="featured-credential-type">{credential.type}</span>
                <span className="featured-credential-title">{credential.title}</span>
                <span className="featured-credential-issuer">{credential.issuer}</span>
                {credential.skills?.length > 0 && (
                  <span className="featured-credential-skills">{credential.skills.join(', ')}</span>
                )}
              </span>
            </button>
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

      <div className="contact-sheet-grid" id="achievementsGrid" key={activeFilter} role="region" aria-label="Credentials contact sheet">
        {records.map((item, index) => (
          <Reveal delay={Math.min(index % 4, 3) * 35} key={item.id}>
          <article
            className="proof-card"
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
          </Reveal>
        ))}
      </div>
    </section>
  )
}
