import { Link } from "react-router-dom"

// Contenu de la page Error404

function ErrorPage() {
    const error = "Oups ! La page que vous demandez n'existe pas."
    const returned = "Retourner sur la page d'accueil"
    return (
        <div className="container">
            <div className="error__contend">
                <h1>404</h1>
                <p>{error}</p>
                <Link className='error__lien' to="/"> {returned} </Link>
            </div>
        </div>
    )
}

export default ErrorPage