import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h3 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h3>
        <nav className="footer__navigation">
          <p className="footer__subtitle">&#169; 2023</p>
          <ul className="footer__links">
            <li>
              <a href="https://practicum.yandex.ru/" className="footer__link">
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a href="https://github.com/" className="footer__link">
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
