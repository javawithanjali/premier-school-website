import React from 'react'
import './Navbar.css'
import logo from '../assets/images/logo.png'

function Navbar() {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <div className="navbar__logo">
        <img src={logo} alt="Premier Schools Exhibition" />
      </div>
      <a href="https://premierschoolsexhibition.com/contact.php" className="navbar__btn" aria-label="Register now">
        <span className="navbar__btn-icon">↗</span>
        REGISTER NOW
      </a>
    </nav>
  )
}

export default Navbar