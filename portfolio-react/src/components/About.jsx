import portfolioData from '../data/portfolioData'
import Reveal from './Reveal'

const { personal, achievements } = portfolioData

export default function About() {
  return (
    <section className="plate-section" id="about" aria-labelledby="aboutTitle">
      <div className="plate-header">
        <div className="plate-marker">
          <span className="plate-marker-num">PLATE NO. 02</span>
          <span className="plate-marker-class">COLOPHON &amp; BIOGRAPHY</span>
        </div>
        <div className="plate-title-row">
          <Reveal><h2 className="plate-title" id="aboutTitle">Imprint</h2></Reveal>
          <span className="plate-caption">BACKGROUND, EDUCATION &amp; STANDING</span>
        </div>
      </div>

      <div className="imprint-grid">
        <div className="imprint-prose" id="imprintProse">
          <p className="imprint-lead">{personal.summaryParagraphs[0]}</p>
          <p>{personal.summaryParagraphs[1]}</p>
          <p>
            I am interested in building practical software solutions and continue to develop my frontend skills alongside my studies in AI/ML and Computer Vision.
          </p>
        </div>

        <Reveal><aside className="imprint-facts-panel" aria-label="Official Facts Column">
          <div className="facts-panel-head">REGISTER RECORD</div>
          <div className="facts-ledger" id="imprintFacts">
            <div className="fact-entry">
              <span className="fact-key">Current Academic Program</span>
              <span className="fact-value">{personal.education.degree}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ink-secondary)' }}>
                {personal.education.period} • CGPA {personal.education.cgpa}
              </span>
            </div>
            <div className="fact-entry">
              <span className="fact-key">Institution</span>
              <span className="fact-value">{personal.education.institution}</span>
            </div>
            <div className="fact-entry">
              <span className="fact-key">Location Base</span>
              <span className="fact-value">{personal.location}</span>
            </div>
            <div className="fact-entry">
              <span className="fact-key">Spoken &amp; Written Languages</span>
              <div className="lang-tags">
                {personal.languages.map((language) => <span className="lang-tag" key={language}>{language}</span>)}
              </div>
            </div>
            <div className="fact-entry">
              <span className="fact-key">Verified Honours &amp; Credentials</span>
              <span className="fact-value">{achievements.length} Verified Records on File</span>
            </div>
          </div>
        </aside></Reveal>
      </div>
    </section>
  )
}
