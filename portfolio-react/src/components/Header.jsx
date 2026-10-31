import { useEffect, useRef, useState } from 'react'
import useClock from '../hooks/useClock'
import portfolioData from '../data/portfolioData'

const navigation = [
  ['about', '02 / Imprint'],
  ['toolkit', '03 / Toolkit'],
  ['proofs', '04 / Proofs'],
  ['experience', '05 / Trade Record'],
  ['achievements', '06 / Honours'],
  ['contact', '07 / Dispatch'],
]

export default function Header() {
  const time = useClock()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMenuOpenRef = useRef(false)
  const [isCompact, setIsCompact] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  function updateMenuOpen(nextOpen) {
    isMenuOpenRef.current = nextOpen
    setIsMenuOpen(nextOpen)
  }

  useEffect(() => {
    function updateCompactState() {
      setIsCompact(window.scrollY > 24)
    }

    updateCompactState()
    window.addEventListener('scroll', updateCompactState, { passive: true })
    return () => window.removeEventListener('scroll', updateCompactState)
  }, [])

  useEffect(() => {
    const sections = navigation
      .map(([id]) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver((entries) => {
      const currentSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]
      if (currentSection) setActiveSection(currentSection.target.id)
    }, { rootMargin: '-18% 0px -68% 0px', threshold: [0, 0.1, 0.25, 0.5] })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === 'Escape' && isMenuOpenRef.current) updateMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header
      className={`folio-header ${isCompact ? 'is-compact' : ''} ${isMenuOpen ? 'menu-open' : ''}`}
      role="banner"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isMenuOpenRef.current) updateMenuOpen(false)
      }}
    >
      <div className="folio-inner">
        <div className="folio-meta-left">
          <span className="folio-brand">
            <span className="cmyk-strip" aria-hidden="true">
              <span className="cmyk-dot c" />
              <span className="cmyk-dot m" />
              <span className="cmyk-dot y" />
              <span className="cmyk-dot k" />
            </span>
            MOHAMMED MUSHARAFF S
          </span>
          <span id="liveStationTime" aria-live="polite">{time}</span>
        </div>

        <nav className="folio-nav" id="folioNavigation" aria-label="Folio Sections">
          {navigation.map(([id, label]) => (
            <a
              href={`#${id}`}
              className={activeSection === id ? 'active' : ''}
              aria-current={activeSection === id ? 'location' : undefined}
              key={id}
              onClick={() => updateMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href={portfolioData.personal.resumePath}
            className="header-resume-mobile press-btn press-btn-solid"
            download
            onClick={() => updateMenuOpen(false)}
          >
            {portfolioData.personal.resumeLabel}
          </a>
        </nav>

        <div className="folio-actions">
          <a
            href={portfolioData.personal.resumePath}
            className="header-resume-desktop press-btn press-btn-outline"
            download
          >
            {portfolioData.personal.resumeLabel}
          </a>
          <button
            type="button"
            className="menu-toggle-btn"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-controls="folioNavigation"
            aria-expanded={isMenuOpen}
            onClick={() => updateMenuOpen(!isMenuOpenRef.current)}
          >
            <span className="menu-toggle-lines" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}
