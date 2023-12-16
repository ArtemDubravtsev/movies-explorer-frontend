import React from "react";
import like from "../../images/like.svg";
import remove from "../../images/delete_ikon.svg";
import preview from "../../images/preview.jpg";

import { useLocation } from "react-router-dom";

export default function MoviesCard() {
  const { pathname } = useLocation();

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
      {pathname === "/saved-movies" ? (
        <button className="moviescard__button moviescard__button-delete">
          <img src={remove} alt="Кнопка удалить" />
        </button>
      ) : (
        <button className="moviescard__button moviescard__button-like">
          <img src={like} alt="Кнопка лайк" />
        </button>
      )}
      <p className="moviescard__duration">1:30</p>
    </div>
  );
}
