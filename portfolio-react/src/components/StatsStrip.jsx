import { useEffect, useState } from 'react'
import useInView from '../hooks/useInView'
import portfolioData from '../data/portfolioData'

function CountUp({ value, isInView }) {
  const target = Number(value)
  const decimals = value.includes('.') ? value.split('.')[1].length : 0
  const [count, setCount] = useState(() => (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? target : 0
  ))

  useEffect(() => {
    if (!isInView) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const startTime = performance.now()
    let frameId
    function updateCount(now) {
      const progress = Math.min((now - startTime) / 650, 1)
      const easedProgress = 1 - ((1 - progress) ** 3)
      setCount(target * easedProgress)
      if (progress < 1) frameId = window.requestAnimationFrame(updateCount)
    }

    frameId = window.requestAnimationFrame(updateCount)
    return () => window.cancelAnimationFrame(frameId)
  }, [isInView, target])

  const display = count.toFixed(decimals)
  const number = decimals ? display : display.padStart(value.length, '0')

  return <span>{number}</span>
}

export default function StatsStrip() {
  const [ref, isInView] = useInView({ threshold: 0.15 })

  return (
    <section className="stats-strip" ref={ref} aria-label="Career Ledger Metrics">
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-number"><CountUp value={String(portfolioData.experience.length).padStart(2, '0')} isInView={isInView} /><em>*</em></div>
          <div className="stat-label">Internship Records Listed</div>
        </div>
        <div className="stat-item">
          <div className="stat-number"><CountUp value="01" isInView={isInView} /><em>*</em></div>
          <div className="stat-label">Live Commercial Site in Production</div>
        </div>
        <div className="stat-item">
          <div className="stat-number"><CountUp value={String(portfolioData.achievements.length)} isInView={isInView} /><em>*</em></div>
          <div className="stat-label">Verified Honours &amp; Credentials</div>
        </div>
        <div className="stat-item">
          <div className="stat-number"><CountUp value={portfolioData.personal.education.cgpa.split(' ')[0]} isInView={isInView} /></div>
          <div className="stat-label">Anna University Engineering CGPA</div>
        </div>
      </div>
    </section>
  )
}
