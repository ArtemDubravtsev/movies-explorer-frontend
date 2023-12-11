import React from "react";
import photo from "../../images/photo.jpg";

export default function AboutMe() {
  return (
    <section className="aboutme">
      <div className="aboutme__container">
        <h2 className="about__title">Студент</h2>
        <div className="aboutme__description">
          <h3 className="aboutme__name">Артём</h3>
          <p className="aboutme__subtitle">Фронтенд-разработчик, 35 лет</p>
          <p className="aboutme__text">
            ТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекст
            ТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекст
            ТекстТекстТекстТекстТекстТекстТекстТекст
          </p>
          <a href="https://github.com/" className="aboutme__link">
            Github
          </a>
        </div>
        <img src={photo} alt="Фотография" className="aboutme__photo" />
      </div>
    </section>
  );
}
