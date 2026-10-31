import portfolioData from '../data/portfolioData'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section className="plate-section" id="experience" aria-labelledby="experienceTitle">
      <div className="plate-header">
        <div className="plate-marker">
          <span className="plate-marker-num">PLATE NO. 06</span>
          <span className="plate-marker-class">CHRONOLOGICAL LEDGER</span>
        </div>
        <div className="plate-title-row">
          <Reveal><h2 className="plate-title" id="experienceTitle">Trade Record</h2></Reveal>
          <span className="plate-caption">INTERNSHIPS &amp; INDUSTRY APPOINTMENTS</span>
        </div>
      </div>

      <div className="ledger-timeline" id="experienceLedger" role="feed" aria-label="Experience Timeline">
        {portfolioData.experience.map((experience, index) => (
          <Reveal delay={index * 60} key={experience.id}>
          <article className="ledger-row" id={experience.id}>
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
          </Reveal>
        ))}
      </div>
    </section>
  )
}
