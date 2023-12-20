import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__container">
        <p className="footer__subtitle"> © 2023</p>
        <a
          className="footer__link"
          href="https://practicum.yandex.ru"
          target="_blank"
        >
          Яндекс.Практикум
        </a>
        <a className="footer__link" href="https://github.com" target="_blank">
          Github
        </a>
      </div>
    </footer>
  );
}

export default Footer;
