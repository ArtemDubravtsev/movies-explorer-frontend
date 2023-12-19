import React from "react";
import "./Portfolio.css";
import arrow from "../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <nav className="portfolio__links">
        <a
          className="portfolio__link portfolio__link-border"
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__title-link">Статичный сайт</p>
          <img
            className="portfolio__image-arrow"
            src={arrow}
            alt="изображение стрелки для перехода по ссылке на сайт"
          />
        </a>
        <a
          className="portfolio__link portfolio__link-border"
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__title-link">Адаптивный сайт</p>
          <img
            className="portfolio__image-arrow"
            src={arrow}
            alt="изображение стрелки для перехода по ссылке на сайт"
          />
        </a>
        <a
          className="portfolio__link"
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__title-link">Одностраничное приложение</p>
          <img
            className="portfolio__image-arrow"
            src={arrow}
            alt="изображение стрелки для перехода по ссылке на сайт"
          />
        </a>
      </nav>
    </section>
  );
}

export default Portfolio;
