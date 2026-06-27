import React from 'react'
import './Navbar.css'
import logo from '../assets/images/logo.png'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Premier Schools Exhibition" />
      </div>
      <a href="#" className="navbar__btn">
        <span className="navbar__btn-icon">↗</span>
        REGISTER NOW
      </a>
    </nav>
  )
}

export default Navbar