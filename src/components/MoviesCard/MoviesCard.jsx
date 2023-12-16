import React from "react";
import like from "../../images/like.svg";
import preview from "../../images/preview.jpg";

export default function MoviesCard() {
  return (
    <div className="moviescard">
      <a href="https://practicum.yandex.ru/" className="moviescard__link">
        <img
          src={preview}
          alt="Кадр из фильма"
          className="moviescard__preview"
        />
      </a>
      <h3 className="moviescard__title">Название</h3>
      <button className="moviescard__like">
        <img src={like} alt="Кнопка лайк" />
      </button>
      <p className="moviescard__duration">1:30</p>
    </div>
  );
}
