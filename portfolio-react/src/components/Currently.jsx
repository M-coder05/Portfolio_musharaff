import portfolioData from '../data/portfolioData'
import Reveal from './Reveal'

export default function Currently() {
  return (
    <section className="currently-strip" aria-labelledby="currently-title">
      <Reveal>
        <h2 id="currently-title">{portfolioData.currentlyCopy.title}</h2>
      </Reveal>
      <ul>
        {portfolioData.currently.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </section>
  )
}
