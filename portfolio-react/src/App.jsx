import { lazy, Suspense, useCallback, useState } from 'react'
import About from './components/About'
import Achievements from './components/Achievements'
import Analytics from './components/Analytics'
import Contact from './components/Contact'
import Currently from './components/Currently'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import KeyboardShortcuts from './components/KeyboardShortcuts'
import LoadingIntro from './components/LoadingIntro'
import Projects from './components/Projects'
import Repositories from './components/Repositories'
import StatsStrip from './components/StatsStrip'
import Toolkit from './components/Toolkit'
import portfolioData from './data/portfolioData'

const Lightbox = lazy(() => import('./components/Lightbox'))

function App() {
  const [lightboxRecords, setLightboxRecords] = useState(portfolioData.achievements)
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lastFocus, setLastFocus] = useState(null)

  const closeLightbox = useCallback(() => setIsLightboxOpen(false), [])

  return (
    <>
      <div className="sheet-wrapper">
        <div className="crop-mark crop-tl" aria-hidden="true" />
        <div className="crop-mark crop-tr" aria-hidden="true" />
        <div className="crop-mark crop-bl" aria-hidden="true" />
        <div className="crop-mark crop-br" aria-hidden="true" />

        <a className="skip-link" href="#mainContent">Skip to content</a>
        <Header />
        <main id="mainContent">
          <Hero />
          <StatsStrip />
          <Currently />
          <About />
          <Toolkit />
          <Projects />
          <Experience />
          <Repositories />
          <Achievements
            onOpenProof={(records, index, trigger) => {
              setLightboxRecords(records)
              setLastFocus(trigger)
              setLightboxIndex(index)
              setIsLightboxOpen(true)
            }}
          />
          <Contact />
        </main>
        <Footer />
      </div>

      {lightboxIndex !== null && (
        <Suspense fallback={null}>
          <Lightbox
            records={lightboxRecords}
            index={lightboxIndex}
            isOpen={isLightboxOpen}
            onClose={closeLightbox}
            onChange={setLightboxIndex}
            returnFocus={lastFocus}
          />
        </Suspense>
      )}
      <LoadingIntro />
      <KeyboardShortcuts />
      <Analytics />
    </>
  )
}

export default App
