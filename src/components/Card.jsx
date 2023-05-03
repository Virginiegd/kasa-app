import appartList from '../datas/logements.json'
import { Link } from 'react-router-dom'

// Card Appartement

function Card() {

  return (
    <section>
      <div className='container'>
        <ul className='card__appart'>
          {/*.map permet de récupérer les éléments voulus du fichier json*/}
          {appartList.map((appart) => (
            <li className='card__appart1' key={appart.id}>
              <Link to={`/appartment/${appart.id}`}>
                <img src={appart.cover} alt="appartement" title="Cliquez ici pour plus d'informations" />
                <h2>{appart.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Card