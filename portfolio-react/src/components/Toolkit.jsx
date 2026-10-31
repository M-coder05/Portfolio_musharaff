import portfolioData from '../data/portfolioData'
import Reveal from './Reveal'

export default function Toolkit() {
  return (
    <section className="plate-section" id="toolkit" aria-labelledby="toolkitTitle">
      <div className="plate-header">
        <div className="plate-marker">
          <span className="plate-marker-num">PLATE NO. 03</span>
          <span className="plate-marker-class">TECHNICAL INDEX</span>
        </div>
        <div className="plate-title-row">
          <Reveal><h2 className="plate-title" id="toolkitTitle">Toolkit</h2></Reveal>
          <span className="plate-caption">CORE LANGUAGES, FRAMEWORKS &amp; WORKFLOWS</span>
        </div>
      </div>

      <div className="toolkit-index" id="toolkitContainer" role="region" aria-label="Skills by Category">
        {portfolioData.skills.map((group, index) => (
          <Reveal delay={index * 45} key={group.category}>
          <article className="toolkit-category-card">
            <div className="toolkit-cat-header">
              <span className="toolkit-cat-name">{group.category}</span>
              <span className="toolkit-cat-lead">{group.lead}</span>
            </div>
            <table className="toolkit-items-table" role="table">
              <tbody>
                {group.items.map((item) => (
                  <tr key={item.name}>
                    <td className="toolkit-skill-name">{item.name}</td>
                    <td className="toolkit-skill-detail">{item.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
