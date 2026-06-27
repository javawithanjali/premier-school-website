import React, { useState, useEffect } from 'react';
import './Exhibition.css';
import exh1 from '../assets/images/exh1.png';
import exh2 from '../assets/images/exh2.png';
import exh3 from '../assets/images/exh3.png';
import exh4 from '../assets/images/exh4.png';
import exh5 from '../assets/images/exh5.png';

const cards = [
  { icon: exh1, title: "Interact Directly with School Heads", desc: "Get answers straight from the experts" },
  { icon: exh2, title: "Compare Curriculum & Pedagogy", desc: "Understand the differences between CBSE, ICSE, IB, Cambridge, Finnish & more" },
  { icon: exh3, title: "Get Exclusive Fee Structures & Offers", desc: "Access transparent information and avail offers" },
  { icon: exh4, title: "Explore Schools Offerings", desc: "Preview infrastructure, co-curricular, teaching methodology and culture" },
  { icon: exh5, title: "On-the-Spot Counselling", desc: "Save time with instant admission application support and expert guidance" },
];

function Exhibition() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(4);

  useEffect(() => {
const update = () => setVisible(window.innerWidth <= 640 ? 1 : 4);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const prev = () => setIndex(i => Math.max(i - 1, 0));
  const next = () => setIndex(i => Math.min(i + 1, cards.length - Math.floor(visible)));

  return (
    <section className="exhibition">
      <h2 className="exhibition__title">What Makes This Exhibition a Must-Visit</h2>

      <div className="exhibition__slider">
        <div
          className="exhibition__track"
          style={{ transform: `translateX(-${index * (100 / visible)}%)` }}
        >
          {cards.map((card, i) => (
            <div
              className="exhibition__card"
              key={i}
              style={{ flex: `0 0 calc(${100 / visible}% - 16px)` }}
            >
              <div className="exhibition__icon">
                <img src={card.icon} alt={card.title} />
              </div>
              <h3 className="exhibition__card-title">{card.title}</h3>
              <p className="exhibition__card-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="exhibition__controls">
        <button
          className="exhibition__btn"
          onClick={prev}
          disabled={index === 0}
          aria-label="Previous"
        >
          ←
        </button>
        <button
          className="exhibition__btn"
          onClick={next}
          disabled={index >= cards.length - Math.floor(visible)}
          aria-label="Next"
        >
          →
        </button>
      </div>
    </section>
  );
}

export default Exhibition;