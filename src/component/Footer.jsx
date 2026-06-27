import React from 'react'
import './Footer.css'
import logo from '../assets/images/logo.png'
import phone from '../assets/images/phone.png'
import location from '../assets/images/location.png'
import facebook from '../assets/images/facebook.png'
import youtube from '../assets/images/youtube.png'
import instagram from '../assets/images/instagram.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">

        <div className="footer__logo">
          <img src={logo} alt="Premier Schools Exhibition" />
        </div>

        <div className="footer__block">
          <img src={location} alt="location" className="footer__icon" />
          <div>
            <p className="footer__label">Corporate Office:</p>
            <p className="footer__text">Suite B-5, Ballygunge Park Tower,<br />67B Ballygunge Circular Road,<br />Kolkata - 700019</p>
          </div>
        </div>

        <div className="footer__block">
          <img src={location} alt="location" className="footer__icon" />
          <div>
            <p className="footer__label">Ahmedabad Office:</p>
            <p className="footer__text">12/AA, Swastik Chambers, Near CU<br />Shah College, Ashram Road,<br />Ahmedabad - 380009</p>
          </div>
        </div>

        <div className="footer__block">
          <img src={phone} alt="phone" className="footer__icon" />
          <div>
            <p className="footer__label">Call us on</p>
            <p className="footer__text">9674805912</p>
            <p className="footer__text">9674585012</p>
          </div>
        </div>

        <div className="footer__block">
          <div>
            <p className="footer__label">Follow us on</p>
            <div className="footer__socials">
              <a href="#" aria-label="Instagram" className="footer__social-btn">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="#" aria-label="Facebook" className="footer__social-btn">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="#" aria-label="YouTube" className="footer__social-btn">
                <img src={youtube} alt="YouTube" />
              </a>
            </div>
          </div>
        </div>

      </div>

      <div className="footer__bottom">
        <p>Copyright © 2025 | All rights reserved. Premier Schools Exhibition</p>
      </div>
    </footer>
  )
}

export default Footer