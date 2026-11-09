import portfolioData from '../data/portfolioData'
import Reveal from './Reveal'

export default function Currently() {
  return (
    <section className="currently-strip" aria-labelledby="currently-title">
      <Reveal>
        <h2 id="currently-title">{portfolioData.currentlyCopy.title}</h2>
      </Reveal>
      <Reveal selector="li" stagger={0.07} y={12}>
        <ul>
          {portfolioData.currently.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </Reveal>
    </section>
  )
}
