import { useCallback, useEffect, useRef, useState } from 'react'
import portfolioData from '../data/portfolioData'

const SESSION_KEY = 'portfolio-press-intro-seen'

export default function LoadingIntro({ onFinished }) {
  const [visible, setVisible] = useState(false)
  const [exiting, setExiting] = useState(false)
  const finishedRef = useRef(false)
  const notifyFinished = useCallback(() => {
    if (!finishedRef.current) {
      finishedRef.current = true
      onFinished()
    }
  }, [onFinished])
  const finish = useCallback(() => {
    setVisible(false)
    notifyFinished()
  }, [notifyFinished])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      notifyFinished()
      return undefined
    }

    try {
      if (sessionStorage.getItem(SESSION_KEY)) {
        notifyFinished()
        return undefined
      }
    } catch (error) {
      console.warn('Session storage is unavailable; the press intro will be skipped.', error)
      notifyFinished()
      return undefined
    }

    let hideTimer
    let exitTimer
    let showTimer
    const show = () => {
      try {
        sessionStorage.setItem(SESSION_KEY, '1')
      } catch (error) {
        console.warn('Unable to remember the press intro for this session.', error)
      }
      setVisible(true)
      exitTimer = window.setTimeout(() => setExiting(true), 700)
      hideTimer = window.setTimeout(finish, 950)
    }

    if (document.readyState === 'complete') {
      showTimer = window.setTimeout(show, 0)
    } else {
      window.addEventListener('load', show, { once: true })
    }
    return () => {
      window.removeEventListener('load', show)
      window.clearTimeout(showTimer)
      window.clearTimeout(exitTimer)
      window.clearTimeout(hideTimer)
    }
  }, [finish, notifyFinished])

  useEffect(() => {
    if (!visible) return undefined
    window.addEventListener('keydown', finish, { once: true })
    return () => window.removeEventListener('keydown', finish)
  }, [finish, visible])

  if (!visible) return null
  return (
    <button type="button" className={`loading-intro ${exiting ? 'is-exiting' : ''}`} onClick={finish} aria-label={portfolioData.intro.prompt}>
      <span>{portfolioData.intro.kicker}</span>
      <strong>{portfolioData.intro.title}</strong>
      <small>{portfolioData.intro.prompt}</small>
    </button>
  )
}
