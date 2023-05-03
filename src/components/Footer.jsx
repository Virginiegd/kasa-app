import white__logo from '../assets/white__logo.png'

// Footer

function Footer() {
    const cop = "© 2020 Kasa. All rights reserved";
    return (
        <footer>
            <div className='container--footer'>
                <div className='footer__contend'>
                    <img src={white__logo} alt='Kasa' className='footer__logo' />
                    <p>{cop}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer