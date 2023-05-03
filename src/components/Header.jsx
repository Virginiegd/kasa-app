import { NavLink } from 'react-router-dom'
import red__logo from '../assets/red__logo.png'

// Header

function Header() {
    let activeStyle = {
        textDecoration: "underline"
    }

    return (
        <header>
            <div className='container'>
                <div className='header__contend'>
                    <NavLink className='header__logo' to='/' ><img src={red__logo} alt='Kasa' /></NavLink>
                    <nav className='header__nav'>
                        <ul className='nav__ul'>
                            {/* isActive permet d'indiquer au visiteur sur quel lien il se trouve (lien actif)*/}
                            <li><NavLink className='nav__a' to="/" style={({ isActive }) =>
                                isActive ? activeStyle : undefined} > Accueil </NavLink></li>
                            <li><NavLink className='nav__a' to="/about" style={({ isActive }) =>
                                isActive ? activeStyle : undefined}> A Propos</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header