import portfolioData from '../data/portfolioData'
import PlateHeader from './PlateHeader'
import Reveal from './Reveal'

const { personal, achievements } = portfolioData

export default function About() {
  return (
    <section className="plate-section" id="about" aria-labelledby="aboutTitle">
      <PlateHeader
        number="PLATE NO. 02"
        classification="COLOPHON & BIOGRAPHY"
        title="Imprint"
        titleId="aboutTitle"
        caption="BACKGROUND, EDUCATION & STANDING"
      />

      <div className="imprint-grid">
        <Reveal selector="p" stagger={0.08} y={16}>
          <div className="imprint-prose" id="imprintProse">
            <p className="imprint-lead">{personal.summaryParagraphs[0]}</p>
            <p>{personal.summaryParagraphs[1]}</p>
            <p>
              I am interested in building practical software solutions and continue to develop my frontend skills alongside my studies in AI/ML and Computer Vision.
            </p>
          </div>
        </Reveal>

        <Reveal selector=".facts-panel-head, .fact-entry" stagger={0.05} y={12}>
          <aside className="imprint-facts-panel" aria-label="Official Facts Column">
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
          </aside>
        </Reveal>
      </div>
    </section>
  )
}
