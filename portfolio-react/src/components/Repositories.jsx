import portfolioData from '../data/portfolioData'
import Reveal from './Reveal'

export default function Repositories() {
  return (
    <section className="plate-section repository-section" id="github" aria-labelledby="repositories-title">
      <div className="plate-header">
        <div className="plate-marker">
          <span className="plate-marker-num">PLATE NO. 06</span>
          <span className="plate-marker-class">OPEN SOURCE</span>
        </div>
        <div className="plate-title-row">
          <Reveal><h2 className="plate-title" id="repositories-title">{portfolioData.repositoriesCopy.title}</h2></Reveal>
          <a className="repository-profile-link" href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer">
            {portfolioData.repositoriesCopy.profileLink} ↗
          </a>
        </div>
      </div>
      <div className="repository-list">
        {portfolioData.repositories.map((repo) => (
          <Reveal key={repo.name}>
            <a className="repository-entry" href={repo.url} target="_blank" rel="noopener noreferrer">
              <span className="repository-name">{repo.name}</span>
              <span className="repository-description">{repo.description}</span>
              <span className="repository-language">{repo.language}</span>
              <span aria-hidden="true">↗</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
