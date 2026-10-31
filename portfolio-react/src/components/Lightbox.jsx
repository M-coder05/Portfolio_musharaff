import { useCallback, useEffect, useRef, useState } from 'react'

export default function Lightbox({ records, index, isOpen, onClose, onChange, returnFocus }) {
  const overlayRef = useRef(null)
  const closeButtonRef = useRef(null)
  const currentIndexRef = useRef(index)
  const touchStartRef = useRef(null)
  const [slideDirection, setSlideDirection] = useState('next')
  const item = index === null ? null : records[index]

  const navigateTo = useCallback((nextIndex) => {
    if (nextIndex < 0 || nextIndex >= records.length) return
    setSlideDirection(nextIndex > currentIndexRef.current ? 'next' : 'previous')
    currentIndexRef.current = nextIndex
    onChange(nextIndex)
  }, [onChange, records.length])

  useEffect(() => {
    currentIndexRef.current = index
  }, [index])

  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      returnFocus?.focus()
    }
  }, [isOpen, returnFocus])

  useEffect(() => {
    if (!isOpen) return undefined

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        if (currentIndexRef.current < records.length - 1) {
          navigateTo(currentIndexRef.current + 1)
        }
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault()
        if (currentIndexRef.current > 0) navigateTo(currentIndexRef.current - 1)
      } else if (event.key === 'Tab') {
        const focusable = Array.from(
          overlayRef.current.querySelectorAll('button:not([disabled]), [tabindex="0"]'),
        )
        if (focusable.length === 0) return

        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        } else if (!overlayRef.current.contains(document.activeElement)) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, navigateTo, onClose, records.length])

  if (!item) return null

  return (
    <div
      className={`lightbox-overlay ${isOpen ? 'active' : ''}`}
      id="lightboxOverlay"
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Certificate Inspector: ${item.title}`}
      aria-hidden={!isOpen}
      inert={!isOpen}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      {item && (
        <div className="lightbox-dialog" role="document">
          <div className="lightbox-topbar">
            <span className="lightbox-counter" id="lightboxCounter">
              PROOF {index + 1} OF {records.length}
            </span>
            <button
              type="button"
              className="lightbox-close-btn"
              id="lightboxClose"
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Close dialog (Esc)"
            >
              [ CLOSE ESC ]
            </button>
          </div>
          <div
            className={`lightbox-stage lightbox-stage-${slideDirection}`}
            key={item.id}
            onTouchStart={(event) => {
              touchStartRef.current = event.changedTouches[0].clientX
            }}
            onTouchEnd={(event) => {
              if (touchStartRef.current === null) return
              const distance = event.changedTouches[0].clientX - touchStartRef.current
              if (Math.abs(distance) > 48) {
                if (distance < 0 && index < records.length - 1) navigateTo(index + 1)
                if (distance > 0 && index > 0) navigateTo(index - 1)
              }
              touchStartRef.current = null
            }}
          >
            <div className="lightbox-image-wrap">
              <img src={item.image} alt={item.alt} width={item.width} height={item.height} loading="lazy" decoding="async" />
            </div>
            <div className="lightbox-info-wrap">
              <div className="lightbox-plate-stamp" id="lightboxPlate">{item.plateNumber} / {item.categoryLabel}</div>
              <h3 className="lightbox-title" id="lightboxTitle">{item.title}</h3>
              <table className="lightbox-detail-table">
                <tbody>
                  {item.issuer && <tr><td className="lbl">ISSUER</td><td className="val" id="lightboxIssuer">{item.issuer}</td></tr>}
                  {item.date && <tr><td className="lbl">DATE</td><td className="val" id="lightboxDate">{item.date}</td></tr>}
                  {item.event && <tr><td className="lbl">EVENT</td><td className="val" id="lightboxEvent">{item.event}</td></tr>}
                  {item.link && <tr><td className="lbl">VERIFY</td><td className="val"><a href={item.link} target="_blank" rel="noreferrer">View credential</a></td></tr>}
                </tbody>
              </table>
              {item.highlight && <div className="lightbox-highlight" id="lightboxHighlight">{item.highlight}</div>}
            </div>
          </div>
          <div className="lightbox-nav-footer">
            <button
              type="button"
              className="lightbox-nav-btn"
              id="lightboxPrev"
              aria-label="Previous Proof (Left Arrow)"
              disabled={index === 0}
              onClick={() => navigateTo(index - 1)}
            >
              &larr; PREVIOUS PROOF
            </button>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--ink-tertiary)' }}>
              USE ARROW KEYS OR SWIPE
            </span>
            <button
              type="button"
              className="lightbox-nav-btn"
              id="lightboxNext"
              aria-label="Next Proof (Right Arrow)"
              disabled={index === records.length - 1}
              onClick={() => navigateTo(index + 1)}
            >
              NEXT PROOF &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
