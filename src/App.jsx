import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Achievements from './component/Achievements'
import Participation from './component/Participation'
import ChooseSchool from './component/ChooseSchool'
import Appointments from './component/Appointments'
import Exhibition from './component/Exhibition'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection'

function App() {
  return (
    <div className="app">
      <a className="skip-link" href="#main-content">
        {/* Skip to content */}
      </a>
      <main id="main-content" className="app__main" aria-label="Main content">
        <div className="app__main-inner">
          <Navbar />
          <HeroSection />
          </div>
          <Achievements />
          <Participation />
          <ChooseSchool />
        <Appointments />
        <Exhibition />
        <Footer />
              

      </main>
    </div>
  )
}

export default App
