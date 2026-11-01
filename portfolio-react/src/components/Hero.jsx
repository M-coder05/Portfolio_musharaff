import portfolioData from '../data/portfolioData'
import Reveal from './Reveal'
import { buildWhatsAppLink } from '../utils/whatsapp'

const { personal, projects } = portfolioData
const featuredProject = projects.find((project) => project.featured)

export default function Hero() {
  const specRows = [
    ['Candidate', personal.name],
    ['Discipline', "B.E. Computer Science & Eng. ('27)"],
    ['Station', personal.location],
    ['Institution', personal.education.institution],
    ['Academic Mark', `CGPA ${personal.education.cgpa}`],
  ]

  return (
    <section className="plate-section" id="hero" aria-labelledby="heroName">
      <div className="plate-header">
        <div className="plate-marker">
          <span className="plate-marker-num">PLATE NO. 01</span>
          <span className="plate-marker-class">DOC ID: MMS-BE-2027-PROOF</span>
        </div>
        <div className="plate-title-row">
          <p className="plate-title hero-load-item" id="heroTitle">Front Matter</p>
          <span className="plate-caption">EDITION 2026 • REVISED OCTOBER</span>
        </div>
      </div>

      <div className="hero-grid">
        <div className="hero-editorial">
          <div className="hero-folio-tag">
            <span>● TECHNICAL PRESS PROOF</span>
            <span>/</span>
            <span>UNDERGRADUATE FOLIO</span>
          </div>
          <h1 className="hero-headline hero-load-item" id="heroName">{personal.name}</h1>
          <p className="hero-statement hero-load-item" id="heroFocus">{personal.title}</p>
          <p className="hero-statement">{personal.focus}</p>
          <div className="hero-availability-bar hero-load-item" id="heroAvailability">
            <span className="pulse-led" aria-hidden="true" />
            {personal.availability}
          </div>
          <div className="hero-actions">
            <a href="#proofs" className="press-btn press-btn-solid">
              View Projects ↓
            </a>
            <a
              href={buildWhatsAppLink(personal.whatsapp)}
              className="press-btn press-btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              WHATSAPP CHAT ↗
            </a>
            <a href={personal.resumePath} className="press-btn press-btn-outline" download>
              {personal.resumeLabel} ↓
            </a>
            <a href="#contact" className="press-btn press-btn-outline">
              Contact Me ↓
            </a>
          </div>
        </div>

        <aside className="hero-stamp-col" aria-label="Candidate Specifications">
          <svg className="press-target-svg" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1" />
            <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1" />
            <line x1="16" y1="0" x2="16" y2="32" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="16" x2="32" y2="16" stroke="currentColor" strokeWidth="1" />
          </svg>

          <figure className="hero-portrait-frame">
            <img
              src={personal.avatar}
              alt={`Portrait of ${personal.name}`}
              width="807"
              height="1024"
              className="hero-portrait-img"
              loading="eager"
              decoding="async"
            />
            <figcaption className="portrait-caption-bar">
              <span>FIG. 00 / SUBJECT PORTRAIT</span>
              <span className="portrait-coordinates">MMS • TIRUCHIRAPPALLI</span>
            </figcaption>
          </figure>

          <Reveal delay={400}>
            <table className="stamp-spec-table hero-load-item" id="heroSpecTable" role="table">
            <tbody>
              {specRows.map(([label, value]) => (
                <tr key={label}>
                  <td className="spec-key">{label}</td>
                  <td className="spec-val">{value}</td>
                </tr>
              ))}
              <tr>
                <td className="spec-key">Featured Project</td>
                <td className="spec-val">
                  <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--vermilion)', textDecoration: 'underline' }}>
                    {featuredProject.title} ↗
                  </a>
                </td>
              </tr>
            </tbody>
            </table>
          </Reveal>
        </aside>
      </div>
    </section>
  )
}
