import React from "react";
import photo from "../../images/photo.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__text-container">
          <h3 className="about-me__subtitle">Артем</h3>
          <h4 className="about-me__information">
            Фронтенд-разработчик, 35 лет
          </h4>
          <p className="about-me__history">
            ТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекст
            ТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекст
            ТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекст
            ТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекст
            ТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекст
          </p>
          <a
            className="about-me__link"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img src={photo} className="about-me__avatar" alt="моя аватарка" />
      </div>
    </section>
  );
}

export default AboutMe;
