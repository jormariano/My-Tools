import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {

  const imgLogo = "../../logos/logo-01.png"
  const imgGitHub = "../../img/footer-icono-github.png"
  const imgLinkedIn = "../../img/footer-icono-linkedin.png"
  const imgInstagram = "../../img/footer-icono-instagram.png"

  return (
    <>
      <div className='footer'>
        <div className='footer-socialnetworks'>
          <a href="https://linkedin.com/in/jorgelina-mariano" target="_blank"><img src={imgLinkedIn}
            alt="Enlace a LinkedIn" /></a>
          <a href="https://github.com/jormariano" target="_blank"><img src={imgGitHub}
            alt="Enlace a GitHub" /></a>
          <a href="https://www.instagram.com/jmarianoweb" target="_blank"><img src={imgInstagram}
            alt="Enlace a Instagram" /></a>
        </div>
        <div className='footer-copy-logo'>
          <p className='footer-copyright'> Copyright © 2023 </p>
          <Link to="/"><img className="img-logo-footer" src={imgLogo} alt="logo de la empresa" /></Link>
        </div>
      </div>
    </>
  )
}

export default Footer