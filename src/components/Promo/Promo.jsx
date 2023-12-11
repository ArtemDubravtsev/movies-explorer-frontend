import React from "react";
import promologo from "../../images/text__COLOR_landing-logo.svg";

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <img src={promologo} className="promo__logo" alt="Промо логотип" />
      </div>
    </section>
  );
}
