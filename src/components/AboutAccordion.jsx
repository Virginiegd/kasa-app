import listAbout from '../datas/about.json'
import Accordion from './Accordion'

// Accordion propre à la page A propos

function AboutAccordion() {
  return (
    <section>
      <div className="container">
        <ul>
          {listAbout.map(({ id, heading, content }) => (
            <Accordion key={id} heading={heading} content={content} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AboutAccordion