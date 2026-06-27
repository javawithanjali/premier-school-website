import React, { useState } from 'react'
import './HeroSection.css'
import girlStudy from '../assets/images/girl-study.png'
import boyPlay from '../assets/images/boy-play.png'
import girlsGroup from '../assets/images/girls-group.png'

function HeroSection() {
  const [paused, setPaused] = useState(false)

  const col1 = [girlStudy, boyPlay, girlsGroup, girlStudy, boyPlay, girlsGroup]
  const col2 = [boyPlay, girlsGroup, girlStudy, boyPlay, girlsGroup, girlStudy]
  const col3 = [girlsGroup, girlStudy, boyPlay, girlsGroup, girlStudy, boyPlay]

  return (
    <section className="hero">

      {/* Left: Text */}
      <div className="hero__text">
        <h1 className="hero__heading">
          Discover Gurugram's<br />
          <span className="hero__heading-bold">Top 30+ Schools</span><br />
          <span className="hero__heading-sub">ALL IN ONE PLACE</span>
        </h1>
        <div className="hero__venue">
          <div className="hero__venue-left">
            <p className="hero__venue-name">Apparel House,</p>
            <p className="hero__venue-addr">Sec 44, Gurugram</p>
          </div>
          <div className="hero__venue-divider" />
          <div className="hero__venue-right">
            <p className="hero__venue-date">2-3 August 2025</p>
            <p className="hero__venue-time">Sat-Sun | 10AM - 6PM</p>
          </div>
        </div>
      </div>

      {/* Center: Image columns */}
      <div
        className="hero__images"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="hero__col">
          <div className={`hero__col-inner col-down ${paused ? 'paused' : ''}`}>
            {col1.map((img, i) => (
              <div className="hero__img-wrap" key={`c1-${i}`}>
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className="hero__col">
          <div className={`hero__col-inner col-up ${paused ? 'paused' : ''}`}>
            {col2.map((img, i) => (
              <div className="hero__img-wrap" key={`c2-${i}`}>
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className="hero__col">
          <div className={`hero__col-inner col-down ${paused ? 'paused' : ''}`}>
            {col3.map((img, i) => (
              <div className="hero__img-wrap" key={`c3-${i}`}>
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Form */}
      <form className="hero__form" aria-labelledby="hero-form-title">
        <h3 id="hero-form-title">Enquire Now</h3>
        <label className="hero__form-label" htmlFor="hero-parent-name">Parent's Name</label>
        <input id="hero-parent-name" type="text" placeholder="Parent's Name" />
        <label className="hero__form-label" htmlFor="hero-phone-number">Phone number</label>
        <input id="hero-phone-number" type="tel" placeholder="Phone number" />
        <label className="hero__form-label" htmlFor="hero-grade-question">Which grade are you looking for?</label>
        <input id="hero-grade-question" type="text" placeholder="Which grade are you looking for?" />
        <button type="submit">
          <span className="hero__form-icon">↗</span>
          SUBMIT
        </button>
      </form>

    </section>
  )
}

export default HeroSection