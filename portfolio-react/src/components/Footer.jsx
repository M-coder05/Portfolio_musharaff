import portfolioData from '../data/portfolioData'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-colophon" role="contentinfo">
      <div className="colophon-grid">
        <div className="colophon-left">
          <div className="colophon-note">
            © <span id="currentYear">{currentYear}</span> {portfolioData.personal.name}. Set in <em>Newsreader</em>, <em>Plus Jakarta Sans</em>, and <em>JetBrains Mono</em>.
          </div>
          <div className="colophon-specs">
            An archival editorial press proof, rendered as a static frontend.
          </div>
        </div>
        <div className="colophon-right">
          <a href="#hero" className="back-to-top-btn" aria-label="Return to top of page">
            <span>TOP OF FOLIO</span>
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
