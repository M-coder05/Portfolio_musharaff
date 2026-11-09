import portfolioData from '../data/portfolioData'
import PlateHeader from './PlateHeader'
import Reveal from './Reveal'

export default function Repositories() {
  return (
    <section className="plate-section repository-section" id="github" aria-labelledby="repositories-title">
      <PlateHeader
        number="PLATE NO. 06"
        classification="OPEN SOURCE"
        title={portfolioData.repositoriesCopy.title}
        titleId="repositories-title"
        action={(
          <a
            className="repository-profile-link"
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            data-plate-action
          >
            {portfolioData.repositoriesCopy.profileLink} ↗
          </a>
        )}
      />
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
