import React from 'react';
import './Appointments.css';
import appointmentDesktop from '../assets/images/appointment-desktop.webp';
import appointMobile from '../assets/images/appoint-mobile.png';

function Appointments() {
  return (
    <section className="appointment">
      <img className="appointment__img-desktop" src={appointmentDesktop} alt="Parents meeting school representatives" />
      <img className="appointment__img-mobile" src={appointMobile} alt="Parents meeting school representatives" />

      <div className="appointment__content">
        <p className="appointment__eyebrow">Exciting Opportunities for Parents!</p>
        <h2 className="appointment__heading">
          Pre-schedule Your<br />School Appointments
        </h2>
        <p className="appointment__subtext">To Avoid Rush</p>
        <button type="button" className="appointment__btn">
          <span className="appointment__btn-icon">↗</span>
          PRE-SCHEDULE NOW
        </button>
      </div>
    </section>
  );
}

export default Appointments;