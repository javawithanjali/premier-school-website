import React, { useState, useRef } from 'react';
import "./ChooseSchool.css";
import curriculum from "../assets/images/curriculum.png";
import heritage from "../assets/images/heritage.png";
import cbse from "../assets/images/cbse.png";
import library from "../assets/images/library.png";

const cards = [
  {
    img: library,
    title: "Pre-Schools & Early Learning Centres",
    desc: "Nurturing foundational skills for toddlers and pre-primary children.",
  },
  {
    img: cbse,
    title: "K-12 CBSE Day Schools",
    desc: "Reputed schools offering complete schooling from Kindergarten to Grade 12.",
  },
  {
    img: heritage,
    title: "Heritage to New-Age Schools",
    desc: "Time-tested schools to innovative pedagogy, tech enabled, future-ready schools.",
  },
  {
    img: curriculum,
    title: "International Curriculum Schools",
    desc: "Offering IB, Cambridge, Finnish and other global curricula with a global learning environment.",
  },
];

function ChooseSchool() {
  const [active, setActive] = useState(0);
  const startX = useRef(null);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (startX.current === null) return;
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 40 && active < cards.length - 1) setActive(active + 1);
    if (diff < -40 && active > 0) setActive(active - 1);
    startX.current = null;
  };

  const handleSliderKeyDown = (e) => {
    if (e.key === 'ArrowRight' && active < cards.length - 1) {
      setActive(active + 1);
    }
    if (e.key === 'ArrowLeft' && active > 0) {
      setActive(active - 1);
    }
  };

  return (
    <section className="choose-school" aria-labelledby="choose-school-title">
      <h2 id="choose-school-title" className="choose-school__title">
        Choose the School That Fits You Best
      </h2>

      <div className="choose-school__grid" aria-label="School options">
        {cards.map((card, i) => (
          <article className="choose-school__card" key={i}>
            <img className="choose-school__image" src={card.img} alt={card.title} />
            <div className="choose-school__overlay">
              <h3 className="choose-school__card-title">{card.title}</h3>
              <p className="choose-school__card-desc">{card.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="choose-school__slider-wrapper">

        <div
          className="choose-school__slider"
          role="region"
          aria-roledescription="carousel"
          aria-label="School cards carousel. Use left and right arrows to move slides."
          tabIndex={0}
          onKeyDown={handleSliderKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="choose-school__track"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {cards.map((card, i) => (
              <article
                className="choose-school__slide"
                key={i}
                role="group"
                aria-roledescription="slide"
                aria-label={`${card.title}, slide ${i + 1} of ${cards.length}`}
              >
                <img className="choose-school__image" src={card.img} alt={card.title} />
                <div className="choose-school__overlay">
                  <h3 className="choose-school__card-title">{card.title}</h3>
                  <p className="choose-school__card-desc">{card.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="choose-school__dots" role="tablist" aria-label="Slide navigation">
          {cards.map((_, i) => (
            <button
              key={i}
              className={`choose-school__dot ${i === active ? 'choose-school__dot--active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
              aria-selected={i === active}
              role="tab"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChooseSchool;