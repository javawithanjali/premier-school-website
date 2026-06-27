import React from "react";
import "./Participation.css";
import aga from "../assets/images/aga.png";
import kings from "../assets/images/kings.png";
import sadem from "../assets/images/sadem.png";
import woodstock from "../assets/images/woodstock.png";
import shrewsbury from "../assets/images/shrewsbury.png";
import harrow from "../assets/images/harrow.png";

const logos = [
  { src: aga, alt: "Aga" },
  { src: kings, alt: "Kings" },
  { src: sadem, alt: "Sadem" },
  { src: woodstock, alt: "Woodstock" },
  { src: shrewsbury, alt: "Shrewsbury" },
  { src: harrow, alt: "Harrow" },
];

function Participation() {
  const repeated = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="participation" aria-labelledby="participation-title">
      <h2 id="participation-title" className="participation__title">
        Participating Schools
      </h2>

      <div className="participation__marquee" aria-label="Participating schools carousel">
        <div className="participation__track" role="region" aria-label="School logos moving right to left">
          <div className="participation__inner participation__inner--ltr">
            {repeated.map((logo, i) => (
              <div
                className="participation__logo-card"
                key={`ltr-${i}`}
                aria-hidden="true"
              >
                <img
                  className="participation__logo-image"
                  src={logo.src}
                  alt={logo.alt}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="participation__track" role="region" aria-label="School logos moving left to right">
          <div className="participation__inner participation__inner--rtl">
            {repeated.map((logo, i) => (
              <div
                className="participation__logo-card"
                key={`rtl-${i}`}
                aria-hidden="true"
              >
                <img
                  className="participation__logo-image"
                  src={logo.src}
                  alt={logo.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Participation;