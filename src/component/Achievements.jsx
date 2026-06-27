import React from 'react'
import parents from "../assets/images/parents.png";
import globe from "../assets/images/globe.png"
import legacy from "../assets/images/legacy.png"
import school from "../assets/images/school.png"
import "./Achievements.css";

function Achievements() {
  return (
    <section className="achievements" aria-label="Achievements">
      <img className="achievements__image" src={parents} alt="Parents" />
      <img className="achievements__image" src={legacy} alt="Legacy" />
      <img className="achievements__image" src={school} alt="School" />
      <img className="achievements__image" src={globe} alt="Globe" />
    </section>
  )
}

export default Achievements
