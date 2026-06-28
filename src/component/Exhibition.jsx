import React, { useState, useEffect } from 'react';
import './Exhibition.css';
import exh1 from '../assets/images/exh1.png';
import exh2 from '../assets/images/exh2.png';
import exh3 from '../assets/images/exh3.png';
import exh4 from '../assets/images/exh4.png';
import exh5 from '../assets/images/exh5.png';

const originalCards = [
  { icon: exh1, title: "Interact Directly with School Heads", desc: "Get answers straight from the experts" },
  { icon: exh2, title: "Compare Curriculum & Pedagogy", desc: "Understand the differences between CBSE, ICSE, IB, Cambridge, Finnish & more" },
  { icon: exh3, title: "Get Exclusive Fee Structures & Offers", desc: "Access transparent information and avail offers" },
  { icon: exh4, title: "Explore Schools Offerings", desc: "Preview infrastructure, co-curricular, teaching methodology and culture" },
  { icon: exh5, title: "On-the-Spot Counselling", desc: "Save time with instant admission application support and expert guidance" },
];

const cards = [...originalCards, ...originalCards, ...originalCards, ...originalCards];
const total = originalCards.length;

function Exhibition() {
  const [visible, setVisible] = useState(4);
  const [index, setIndex] = useState(total);
  const [animated, setAnimated] = useState(true);

  useEffect(() => {
    const update = () => setVisible(window.innerWidth <= 640 ? 1 : 4);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const jump = (newIndex) => {
    setAnimated(false);
    setIndex(newIndex);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setAnimated(true));
    });
  };

  const prev = () => {
    setAnimated(true);
    setIndex(i => {
      const next = i - 1;
      if (next < total) setTimeout(() => jump(next + total), 400);
      return next;
    });
  };

  const next = () => {
    setAnimated(true);
    setIndex(i => {
      const next = i + 1;
      if (next >= total * 3) setTimeout(() => jump(next - total), 400);
      return next;
    });
  };

  const sliderRef = React.useRef(null);
  const [cardPx, setCardPx] = useState(0);

  useEffect(() => {
    const calc = () => {
      if (sliderRef.current) {
        const sliderW = sliderRef.current.offsetWidth;
        const gap = 16;
        const w = (sliderW - gap * (visible - 1)) / visible;
        setCardPx(w);
      }
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, [visible]);

  const translateX = index * (cardPx + 16);

  return (
    <section className="exhibition">
      <h2 className="exhibition__title">What Makes This Exhibition a Must-Visit</h2>

      <div className="exhibition__slider" ref={sliderRef}>
        <div
          className="exhibition__track"
          style={{
            transform: `translateX(-${translateX}px)`,
            transition: animated ? 'transform 0.4s ease' : 'none',
          }}
        >
          {cards.map((card, i) => (
            <div
              className="exhibition__card"
              key={i}
              style={{ width: `${cardPx}px`, flexShrink: 0 }}
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
        <button className="exhibition__btn" onClick={prev} aria-label="Previous">←</button>
        <button className="exhibition__btn" onClick={next} aria-label="Next">→</button>
      </div>

      <div className="exhibition__curve">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 Q720,80 1440,0 L1440,80 L0,80 Z" fill="#ffffff"/>
        </svg>
      </div>
    </section>
  );
}

export default Exhibition;