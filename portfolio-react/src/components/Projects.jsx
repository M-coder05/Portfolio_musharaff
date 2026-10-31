import { useEffect, useMemo, useRef, useState } from 'react'
import portfolioData from '../data/portfolioData'
import Reveal from './Reveal'
import useInView from '../hooks/useInView'

function ProjectGallery({ project }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const lightboxRef = useRef(null)
  const mainImageButtonRef = useRef(null)
  const activeImage = project.gallery[activeIndex]

  return (
    <div className="project-gallery-box">
      <button
        type="button"
        className="gallery-main-frame"
        ref={mainImageButtonRef}
        id={`mainFrame-${project.id}`}
        aria-label={`View full-size image: ${activeImage.caption}`}
        onClick={() => lightboxRef.current?.showModal()}
      >
        <img
          id={`heroImg-${project.id}`}
          src={activeImage.src}
          alt={activeImage.caption}
          width={activeImage.width}
          height={activeImage.height}
          loading="lazy"
          decoding="async"
        />
        <span className="gallery-caption-bar">
          <span id={`heroCaption-${project.id}`}>{activeImage.caption}</span>
          <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--vermilion)', fontWeight: 600 }}>
            FIG. {String(activeIndex + 1).padStart(2, '0')}
          </span>
        </span>
      </button>
      <div className="gallery-thumbs-row" role="group" aria-label={`Thumbnails for ${project.title}`}>
        {project.gallery.map((image, index) => (
          <button
            type="button"
            className={`gallery-thumb-btn ${index === activeIndex ? 'active' : ''}`}
            key={image.src}
            onClick={() => setActiveIndex(index)}
            aria-label={`View figure ${index + 1} of ${project.title}`}
            aria-pressed={index === activeIndex}
          >
            <img
              src={image.src}
              alt={image.caption}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>
      <dialog
        className="project-image-dialog"
        ref={lightboxRef}
        aria-labelledby={`project-image-title-${project.id}`}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            event.preventDefault()
            lightboxRef.current?.close()
          }
        }}
        onClose={() => mainImageButtonRef.current?.focus()}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close()
        }}
      >
        <div className="project-image-dialog-header">
          <h3 id={`project-image-title-${project.id}`}>{project.title}</h3>
          <button
            type="button"
            className="lightbox-close-btn"
            aria-label="Close full-size image"
            onClick={() => lightboxRef.current?.close()}
          >
            [ CLOSE ]
          </button>
        </div>
        <figure className="project-image-dialog-figure">
          <img
            src={activeImage.src}
            alt={activeImage.caption}
            width={activeImage.width}
            height={activeImage.height}
            loading="lazy"
            decoding="async"
          />
          <figcaption>{activeImage.caption}</figcaption>
        </figure>
      </dialog>
    </div>
  )
}

function ProjectPlate({ project, index }) {
  const [ref, isVisible] = useInView()
  const gallery = <ProjectGallery project={project} />
  const ledger = (
    <div className="project-ledger-box">
      <h3 className="project-heading">{project.title}</h3>
      <div className="project-descriptor">{project.descriptor}</div>
      <div className="project-prose">
        <p><strong>Challenge:</strong> {project.writeup.problem}</p>
        <p><strong>Solution:</strong> {project.writeup.solution}</p>
        <p><strong>Implementation:</strong> {project.writeup.architecture}</p>
      </div>
      <div className="project-spec-strip">
        {project.specs.map((spec) => (
          <div className="spec-line" key={spec.label}>
            <span className="label">{spec.label}</span>
            <span className="val">{spec.value}</span>
          </div>
        ))}
      </div>
      <div className="project-stack-tags">
        {project.meta.stack.map((technology) => <span className="stack-tag" key={technology}>{technology}</span>)}
      </div>
      <details className="case-study">
        <summary>{portfolioData.caseStudyCopy.summary}</summary>
        <div className="case-study-content">
          <dl>
            <div><dt>{portfolioData.caseStudyCopy.labels.problem}</dt><dd>{project.writeup.problem}</dd></div>
            <div><dt>{portfolioData.caseStudyCopy.labels.role}</dt><dd>{project.caseStudy.role}</dd></div>
            <div><dt>{portfolioData.caseStudyCopy.labels.stack}</dt><dd>{project.meta.stack.join(', ')}</dd></div>
            <div><dt>{portfolioData.caseStudyCopy.labels.built}</dt><dd>{project.caseStudy.whatBuilt}</dd></div>
            {project.caseStudy.whatLearned && (
              <div><dt>{portfolioData.caseStudyCopy.labels.learned}</dt><dd>{project.caseStudy.whatLearned}</dd></div>
            )}
          </dl>
          <div className="case-study-links">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="press-btn press-btn-solid">{portfolioData.caseStudyCopy.liveLink}</a>
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="press-btn press-btn-outline">{portfolioData.caseStudyCopy.githubLink}</a>
            )}
          </div>
        </div>
      </details>
      <div className="project-link-actions">
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="press-btn press-btn-solid">
          Inspect Live Site ↗
        </a>
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="press-btn press-btn-outline">
            Source Code (GitHub) ↗
          </a>
        )}
      </div>
    </div>
  )

  return (
    <article
      className={`project-proof-plate reveal ${isVisible ? 'is-visible' : ''}`}
      data-revealed={isVisible}
      ref={ref}
      id={project.id}
    >
      <div className="project-plate-header">
        <span className="project-plate-stamp">{project.plateNumber}</span>
        <span className="project-live-indicator">
          <span className="pulse-led" aria-hidden="true" /> {project.status}
        </span>
      </div>
      <div className={index % 2 === 0 ? 'project-layout-a' : 'project-layout-b'}>
        {index % 2 === 0 ? <>{gallery}{ledger}</> : <>{ledger}{gallery}</>}
      </div>
    </article>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [gridVisible, setGridVisible] = useState(true)
  const filterTimerRef = useRef(null)
  const filters = portfolioData.projectFilterOptions
  const filteredProjects = useMemo(
    () => activeFilter === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((project) => project.tags.includes(activeFilter)),
    [activeFilter]
  )

  function selectFilter(filter) {
    if (filter === activeFilter) return
    setGridVisible(false)
    window.clearTimeout(filterTimerRef.current)
    filterTimerRef.current = window.setTimeout(() => {
      setActiveFilter(filter)
      setGridVisible(true)
    }, 250)
  }

  useEffect(() => () => window.clearTimeout(filterTimerRef.current), [])

  return (
    <section className="plate-section" id="proofs" aria-labelledby="proofsTitle">
      <div className="plate-header">
        <div className="plate-marker">
          <span className="plate-marker-num">PLATE NO. 04 &amp; 05</span>
          <span className="plate-marker-class">PRODUCTION WORK</span>
        </div>
        <div className="plate-title-row">
          <Reveal><h2 className="plate-title" id="proofsTitle">Proofs</h2></Reveal>
          <span className="plate-caption">COMMERCIAL &amp; FULL-STACK APPS</span>
        </div>
      </div>
      <div className="project-filters" role="group" aria-label={portfolioData.projectFilterLabel}>
        {filters.map((filter) => (
          <button type="button" key={filter} className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            aria-pressed={activeFilter === filter} onClick={() => selectFilter(filter)}>
            {filter}
          </button>
        ))}
      </div>
      <div className={`projects-container project-filter-grid ${gridVisible ? 'filter-visible' : ''}`} id="projectsContainer">
        {filteredProjects.map((project, index) => (
          <ProjectPlate project={project} index={index} key={project.id} />
        ))}
        {filteredProjects.length === 0 && <p className="filter-empty" role="status">
          {portfolioData.projectFilterEmpty.replace('{category}', activeFilter)}
        </p>}
      </div>
    </section>
  )
}
