import { useState } from 'react'
import portfolioData from '../data/portfolioData'
import Reveal from './Reveal'

const { personal } = portfolioData
const formCopy = portfolioData.contactFormCopy
const MAX_MESSAGE_LENGTH = 1500

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
  const [copied, setCopied] = useState(false)
  const [messageCopyStatus, setMessageCopyStatus] = useState('')
  const messageLimit = Math.max(
    0,
    MAX_MESSAGE_LENGTH - buildMessage({ ...values, message: '' }).length
  )
  const characterCount = buildMessage(values).length

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
    const mailto = buildMailto(message)
    setSubmission({ message, mailto })
    setValues({ name: '', email: '', message: '' })
    setErrors({})
    setMessageCopyStatus('')
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
          <h3 className="contact-callout">Let’s discuss a frontend opportunity or a practical web project.</h3>
          <p className="contact-statement">{portfolioData.contactCopy.formIntro}</p>
          <div className="contact-channels">
            <a href={`mailto:${personal.email}`} className="contact-channel-item" aria-label={`Email Mohammed at ${personal.email}`}>
              <div className="contact-channel-info">
                <span className="channel-label">Direct Mail Transmission</span>
                <span className="channel-value">{personal.email}</span>
              </div>
              <span className="channel-arrow" aria-hidden="true">↗</span>
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="contact-channel-item" aria-label="GitHub profile (opens in a new tab)">
              <div className="contact-channel-info">
                <span className="channel-label">GitHub</span>
                <span className="channel-value">{personal.githubDisplay}</span>
              </div>
              <span className="channel-arrow" aria-hidden="true">↗</span>
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact-channel-item" aria-label="LinkedIn profile (opens in a new tab)">
              <div className="contact-channel-info">
                <span className="channel-label">LinkedIn</span>
                <span className="channel-value">{personal.linkedinDisplay}</span>
              </div>
              <span className="channel-arrow" aria-hidden="true">↗</span>
            </a>
            <a href={personal.portfolio} target="_blank" rel="noopener noreferrer" className="contact-channel-item" aria-label="Portfolio website (opens in a new tab)">
              <div className="contact-channel-info">
                <span className="channel-label">Portfolio</span>
                <span className="channel-value">mohammedmusharaffm.in</span>
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
            <button className="press-btn press-btn-solid" type="submit">
              PREPARE EMAIL DRAFT
            </button>
            <p className="contact-form-note">
              Review and send the prepared message from your email app.
            </p>
          </form>
          {submission && (
            <div className="submission-feedback">
              <p className="form-status" role="status" aria-live="polite" aria-atomic="true">
                Your email draft is ready. Select the button below to open it.
              </p>
              <a
                className="press-btn press-btn-outline contact-fallback-link"
                href={submission.mailto}
              >
                Open Email Draft
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
