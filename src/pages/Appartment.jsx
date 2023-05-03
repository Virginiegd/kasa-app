import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import appartList from '../datas/logements.json'
import Error404 from './Error404'
import AppartSlider from '../components/AppartSlider'
import AppartInformation from '../components/AppartInformation'

// Page Appartement

function Appartment() {
  const { id } = useParams()
  const appart = appartList.find((appart) => appart.id === id)

  // Si l'id de l'appartement est correcte
  if (appart) {
    return (
      <div>
        <Header />
        <main>
          <AppartSlider appartId={appart} />
          <AppartInformation appartId={appart} />
        </main>
        <Footer />
      </div>
    )

  } else {
    return (
      <div>
        <Error404 />
      </div>
    )
  }
}

export default Appartment
