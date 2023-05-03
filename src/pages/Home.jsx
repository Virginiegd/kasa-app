import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeBanner from '../components/HomeBanner'
import Card from '../components/Card'

// Page d'accueil

function Home() {
  return (
    <div>
      <Header />
      <main>
        <HomeBanner />
        <Card />
      </main>
      <Footer />
    </div>
  )
}

export default Home
