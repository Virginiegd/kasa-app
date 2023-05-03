import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutBanner from '../components/AboutBanner'
import AboutAccordion from '../components/AboutAccordion'

// Page A propos

function About() {
  return (
    <div>
      <Header />
      <main>
        <AboutBanner />
        <AboutAccordion />
      </main>
      <Footer />
    </div>
  )
}

export default About