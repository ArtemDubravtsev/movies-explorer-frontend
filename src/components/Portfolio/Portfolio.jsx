import React from "react";
import ikon from "../../images/text__COLOR_font-main.svg";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__list-item">
            <a href="https://github.com/" className="portfolio__link">
              <p className="portfolio__link-name">Статичный сайт</p>
              <img
                src={ikon}
                alt="Иконка ссылки"
                className="portfolio__link-ikon"
              />
            </a>
          </li>
          <li className="portfolio__list-item">
          <a href="https://github.com/" className="portfolio__link">
              <p className="portfolio__link-name">Адаптивный сайт</p>
              <img
                src={ikon}
                alt="Иконка ссылки"
                className="portfolio__link-ikon"
              />
            </a>
          </li>
          <li className="portfolio__list-item">
          <a href="https://github.com/" className="portfolio__link">
              <p className="portfolio__link-name">Одностраничное приложение</p>
              <img
                src={ikon}
                alt="Иконка ссылки"
                className="portfolio__link-ikon"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
