import { useEffect, useRef, useState } from 'react'
import portfolioData from '../data/portfolioData'
import Reveal from './Reveal'

const { personal } = portfolioData
const formCopy = portfolioData.contactFormCopy
const MAX_MESSAGE_LENGTH = 1500
const whatsappNumber = (
  personal.whatsapp?.match(/wa\.me\/([^/?#]+)/i)?.[1] || personal.phone
).replace(/\D/g, '')

function buildMessage({ name, email, message }) {
  return `Hi Mohammed, I found your portfolio.\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
}

function buildMailto(message) {
  const subject = encodeURIComponent('Portfolio inquiry')
  return `mailto:${personal.email}?subject=${subject}&body=${encodeURIComponent(message)}`
}

async function copyTextToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      return
    } catch {
      // Fall back to the selection-based copy path when clipboard permission is unavailable.
    }
  }

  const field = document.createElement('textarea')
  field.value = text
  field.setAttribute('readonly', '')
  field.style.position = 'fixed'
  field.style.left = '-9999px'
  document.body.appendChild(field)
  field.select()
  let copiedSuccessfully = false
  try {
    copiedSuccessfully = document.execCommand('copy')
  } finally {
    document.body.removeChild(field)
  }
  if (!copiedSuccessfully) throw new Error('Clipboard access is unavailable.')
}

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submission, setSubmission] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [copied, setCopied] = useState(false)
  const [messageCopyStatus, setMessageCopyStatus] = useState('')
  const honeypotRef = useRef(null)
  const messageLimit = Math.max(
    0,
    MAX_MESSAGE_LENGTH - buildMessage({ ...values, message: '' }).length
  )
  const characterCount = buildMessage(values).length

  useEffect(() => {
    if (!submission) return undefined

    const timeoutId = window.setTimeout(() => {
      setSubmission(null)
      setMessageCopyStatus('')
    }, 8000)

    return () => window.clearTimeout(timeoutId)
  }, [submission])

  function handleChange(event) {
    const { name, value } = event.target
    const nextValues = { ...values, [name]: value }
    const nextMessageLimit = Math.max(
      0,
      MAX_MESSAGE_LENGTH - buildMessage({ ...nextValues, message: '' }).length
    )
    nextValues.message = nextValues.message.slice(0, nextMessageLimit)
    setValues(nextValues)
    setErrors((current) => ({ ...current, [name]: '' }))
    setSubmission(null)
    setMessageCopyStatus('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (honeypotRef.current?.value || isSubmitting) return

    const nextErrors = {
      name: values.name.trim() ? '' : 'Please enter your name.',
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())
        ? ''
        : 'Enter a valid email address.',
      message: values.message.trim().length >= 10
        ? ''
        : 'Please enter a message of at least 10 characters.'
    }
    setErrors(nextErrors)
    if (Object.values(nextErrors).some(Boolean)) return

    const submissionValues = {
      name: values.name.trim(),
      email: values.email.trim(),
      message: values.message
    }
    const message = buildMessage(submissionValues).slice(0, MAX_MESSAGE_LENGTH)
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    try {
      window.open(url, '_blank', 'noopener,noreferrer')
    } catch (error) {
      console.error('Unable to open WhatsApp automatically; the fallback link is available.', error)
    }
    setSubmission({ message, url, mailto: buildMailto(message) })
    setValues({ name: '', email: '', message: '' })
    setErrors({})
    setMessageCopyStatus('')
    if (honeypotRef.current) honeypotRef.current.value = ''
    setIsSubmitting(true)
    window.setTimeout(() => setIsSubmitting(false), 2000)
  }

  async function copyMessage() {
    if (!submission) return
    try {
      await copyTextToClipboard(submission.message)
      setMessageCopyStatus('Copied')
    } catch (error) {
      setMessageCopyStatus(
        error instanceof Error ? error.message : 'Unable to copy the message.'
      )
    }
  }

  async function copyEmail() {
    try {
      await copyTextToClipboard(personal.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch (error) {
      setCopied(false)
      console.error(
        error instanceof Error ? error.message : formCopy.copyFailed,
        error
      )
    }
  }

  return (
    <section className="plate-section" id="contact" aria-labelledby="contactTitle">
      <div className="plate-header">
        <div className="plate-marker">
          <span className="plate-marker-num">PLATE NO. 08</span>
          <span className="plate-marker-class">COMMUNICATIONS</span>
        </div>
        <div className="plate-title-row">
          <Reveal><h2 className="plate-title" id="contactTitle">Dispatch</h2></Reveal>
          <span className="plate-caption">DIRECT INQUIRIES &amp; PROFESSIONAL CHANNELS</span>
        </div>
      </div>

      <div className="contact-grid">
        <div className="contact-details">
          <h3 className="contact-callout">Let’s discuss an engineering role, frontend contract, or web project.</h3>
          <p className="contact-statement">{portfolioData.contactCopy.formIntro}</p>
          <div className="contact-channels">
            <a href={`mailto:${personal.email}`} className="contact-channel-item">
              <div className="contact-channel-info">
                <span className="channel-label">Direct Mail Transmission</span>
                <span className="channel-value">{personal.email}</span>
              </div>
              <span className="channel-arrow" aria-hidden="true">↗</span>
            </a>
            <a href={personal.whatsapp} target="_blank" rel="noopener noreferrer" className="contact-channel-item">
              <div className="contact-channel-info">
                <span className="channel-label">Instant WhatsApp Chat</span>
                <span className="channel-value">{personal.phone}</span>
              </div>
              <span className="channel-arrow" aria-hidden="true">↗</span>
            </a>
            <a href={personal.resumePath} download className="contact-channel-item">
              <div className="contact-channel-info">
                <span className="channel-label">Curriculum Vitae</span>
                <span className="channel-value">Download Mohammed_Musharaff_Resume.pdf</span>
              </div>
              <span className="channel-arrow" aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="contact-tools">
            <button type="button" className="press-btn press-btn-outline" onClick={copyEmail}>
                    {formCopy.copyEmail}
            </button>
                  <span className="copy-status" role="status" aria-live="polite">{copied ? formCopy.copied : ''}</span>
          </div>
        </div>

        <div className="contact-form-column">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-field">
              <label htmlFor="contact-name">{formCopy.name}</label>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                maxLength={120}
                value={values.name}
                onChange={handleChange}
                aria-describedby="contact-name-error"
                aria-invalid={Boolean(errors.name)}
              />
              <p className="field-error" id="contact-name-error">{errors.name}</p>
            </div>
            <div className="contact-field">
              <label htmlFor="contact-email">{formCopy.email}</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                maxLength={254}
                value={values.email}
                onChange={handleChange}
                aria-describedby="contact-email-error"
                aria-invalid={Boolean(errors.email)}
              />
              <p className="field-error" id="contact-email-error">{errors.email}</p>
            </div>
            <div className="contact-field">
              <label htmlFor="contact-message">{formCopy.message}</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                maxLength={messageLimit}
                value={values.message}
                onChange={handleChange}
                aria-describedby="contact-message-error contact-message-counter"
                aria-invalid={Boolean(errors.message)}
              />
              <p className="field-error" id="contact-message-error">{errors.message}</p>
              <p className="message-counter" id="contact-message-counter" aria-live="polite">
                {characterCount} / {MAX_MESSAGE_LENGTH} characters
              </p>
            </div>
            <div className="contact-honeypot" aria-hidden="true">
              <label htmlFor="contact-website">{formCopy.honeypot}</label>
              <input
                ref={honeypotRef}
                id="contact-website"
                type="text"
                name="website"
                tabIndex="-1"
                autoComplete="off"
              />
            </div>
            <button className="press-btn press-btn-solid" type="submit" disabled={isSubmitting}>
              SEND VIA WHATSAPP
            </button>
            <p className="contact-form-note">
              This opens WhatsApp with your message ready to send.
            </p>
          </form>
          {submission && (
            <div className="submission-feedback">
              <p className="form-status" role="status" aria-live="polite" aria-atomic="true">
                Opening WhatsApp… If nothing opens, use the button below.
              </p>
              <a
                className="press-btn press-btn-outline contact-fallback-link"
                href={submission.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open WhatsApp
              </a>
              <div className="message-backup">
                <button className="press-btn press-btn-outline" type="button" onClick={copyMessage}>
                  Copy message
                </button>
                <span className="copy-status" role="status" aria-live="polite">
                  {messageCopyStatus}
                </span>
              </div>
            </div>
          )}
          <a
            className="contact-email-fallback"
            href={submission?.mailto || buildMailto(buildMessage(values))}
          >
            Send by email instead
          </a>
        </div>
      </div>
    </section>
  )
}
