import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import portfolioData from '../data/portfolioData'
import { gsap, ScrollTrigger } from '../utils/gsap'

export default function StatsStrip() {
  const scopeRef = useRef(null)

  useGSAP(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const counters = [...scopeRef.current.querySelectorAll('[data-count-target]')]
      counters.forEach((element) => {
        const value = element.dataset.countTarget
        const target = Number(value)
        const decimals = value.includes('.') ? value.split('.')[1].length : 0
        const counter = { value: 0 }

        element.textContent = decimals ? counter.value.toFixed(decimals) : '0'.padStart(value.length, '0')
        gsap.to(counter, {
          value: target,
          duration: 1.15,
          ease: 'power3.out',
          onUpdate: () => {
            const display = counter.value.toFixed(decimals)
            element.textContent = decimals ? display : display.padStart(value.length, '0')
          },
          scrollTrigger: {
            trigger: element,
            start: 'top 88%',
            once: true,
          },
        })
      })
      ScrollTrigger.refresh()
      return () => {
        counters.forEach((element) => {
          element.textContent = element.dataset.countTarget
        })
      }
    })
    return () => media.revert()
  }, { scope: scopeRef })

  return (
    <section className="stats-strip" ref={scopeRef} aria-label="Career Ledger Metrics">
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-number"><span data-count-target={String(portfolioData.experience.length).padStart(2, '0')}>{String(portfolioData.experience.length).padStart(2, '0')}</span><em>*</em></div>
          <div className="stat-label">Internship Records Listed</div>
        </div>
        <div className="stat-item">
          <div className="stat-number"><span data-count-target="01">01</span><em>*</em></div>
          <div className="stat-label">Live Commercial Site in Production</div>
        </div>
        <div className="stat-item">
          <div className="stat-number"><span data-count-target={String(portfolioData.achievements.length)}>{String(portfolioData.achievements.length)}</span><em>*</em></div>
          <div className="stat-label">Verified Honours &amp; Credentials</div>
        </div>
        <div className="stat-item">
          <div className="stat-number"><span data-count-target={portfolioData.personal.education.cgpa.split(' ')[0]}>{portfolioData.personal.education.cgpa.split(' ')[0]}</span></div>
          <div className="stat-label">Anna University Engineering CGPA</div>
        </div>
      </div>
    </section>
  )
}
