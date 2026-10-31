import { useEffect, useRef, useState } from 'react'
import portfolioData from '../data/portfolioData'

function isEditable(target) {
  return target instanceof HTMLElement
    && (target.isContentEditable || target.matches('input, textarea, select, [role="textbox"]'))
}

export default function KeyboardShortcuts() {
  const [open, setOpen] = useState(false)
  const openRef = useRef(open)
  const pendingRef = useRef(false)
  const timerRef = useRef(null)
  const dialogRef = useRef(null)
  const previousFocusRef = useRef(null)

  function changeOpen(nextOpen) {
    openRef.current = nextOpen
    setOpen(nextOpen)
  }

  useEffect(() => {
    function onKeyDown(event) {
      if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return

      if (openRef.current) {
        if (event.key === 'Escape') {
          changeOpen(false)
          event.preventDefault()
          return
        }
        if (event.key === 'Tab' && dialogRef.current) {
          const items = [...dialogRef.current.querySelectorAll('button, a[href]')]
          const first = items[0]
          const last = items[items.length - 1]
          if (event.shiftKey && document.activeElement === first) {
            last.focus()
            event.preventDefault()
          } else if (!event.shiftKey && document.activeElement === last) {
            first.focus()
            event.preventDefault()
          }
        }
        return
      }
      if (isEditable(event.target)) return

      if (event.key === '?') {
        previousFocusRef.current = document.activeElement
        changeOpen(true)
        event.preventDefault()
        return
      }
      const key = event.key.toLowerCase()
      if (pendingRef.current) {
        pendingRef.current = false
        window.clearTimeout(timerRef.current)
        const shortcut = portfolioData.shortcuts.find((item) => item.key.endsWith(key.toUpperCase()))
        if (shortcut && shortcut.destination !== 'help') {
          document.getElementById(shortcut.destination)?.scrollIntoView({
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
            block: 'start'
          })
        }
        return
      }
      if (key === 'g') {
        pendingRef.current = true
        timerRef.current = window.setTimeout(() => { pendingRef.current = false }, 900)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.clearTimeout(timerRef.current)
    }
  }, [])

  useEffect(() => {
    if (open) {
      dialogRef.current?.querySelector('button')?.focus()
    } else if (previousFocusRef.current instanceof HTMLElement) {
      previousFocusRef.current.focus()
    }
  }, [open])

  if (!open) return null
  return (
    <div className="shortcuts-backdrop" onMouseDown={(event) => {
      if (event.target === event.currentTarget) changeOpen(false)
    }}>
      <section
        className="shortcuts-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="shortcuts-title"
        ref={dialogRef}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            event.preventDefault()
            changeOpen(false)
          }
        }}
      >
        <button type="button" className="shortcuts-close" onClick={() => changeOpen(false)} aria-label={portfolioData.shortcutsCopy.close}>×</button>
        <p className="plate-marker-class">{portfolioData.shortcutsCopy.heading}</p>
        <h2 id="shortcuts-title">{portfolioData.shortcutsCopy.title}</h2>
        <dl>
          {portfolioData.shortcuts.map(({ key, label }) => (
            <div key={key}><dt>{key}</dt><dd>{label}</dd></div>
          ))}
        </dl>
      </section>
    </div>
  )
}
