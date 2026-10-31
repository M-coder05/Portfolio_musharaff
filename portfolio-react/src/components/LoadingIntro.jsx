import { useEffect, useState } from 'react'
import portfolioData from '../data/portfolioData'

const SESSION_KEY = 'portfolio-press-intro-seen'

export default function LoadingIntro() {
  const [visible, setVisible] = useState(false)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    try {
      if (sessionStorage.getItem(SESSION_KEY)) return undefined
    } catch (error) {
      console.warn('Session storage is unavailable; the press intro will be skipped.', error)
      return undefined
    }

    let hideTimer
    let exitTimer
    const show = () => {
      try {
        sessionStorage.setItem(SESSION_KEY, '1')
      } catch (error) {
        console.warn('Unable to remember the press intro for this session.', error)
      }
      setVisible(true)
      exitTimer = window.setTimeout(() => setExiting(true), 700)
      hideTimer = window.setTimeout(() => setVisible(false), 950)
    }

    if (document.readyState === 'complete') {
      window.setTimeout(show, 0)
    } else {
      window.addEventListener('load', show, { once: true })
    }
    return () => {
      window.removeEventListener('load', show)
      window.clearTimeout(exitTimer)
      window.clearTimeout(hideTimer)
    }
  }, [])

  useEffect(() => {
    if (!visible) return undefined
    const skip = () => setVisible(false)
    window.addEventListener('keydown', skip, { once: true })
    return () => window.removeEventListener('keydown', skip)
  }, [visible])

  if (!visible) return null
  return (
    <button type="button" className={`loading-intro ${exiting ? 'is-exiting' : ''}`} onClick={() => setVisible(false)} aria-label={portfolioData.intro.prompt}>
      <span>{portfolioData.intro.kicker}</span>
      <strong>{portfolioData.intro.title}</strong>
      <small>{portfolioData.intro.prompt}</small>
    </button>
  )
}
