import React from "react";
import like from "../../images/like.svg";
import remove from "../../images/delete_ikon.svg";

import { useLocation } from "react-router-dom";

export default function MoviesCard({ movies, data }) {
  const { pathname } = useLocation();

  return (
    <div className="moviescard">
      <a href={data.trailerLink} className="moviescard__link">
        <img
          src={`https://api.nomoreparties.co${data.image.url}`}
          alt="Кадр из фильма"
          className="moviescard__preview"
        />
      </a>
      <h3 className="moviescard__title">{data.nameRU}</h3>
      {pathname === "/saved-movies" ? (
        <button className="moviescard__button moviescard__button-delete">
          <img src={remove} alt="Кнопка удалить" />
        </button>
      ) : (
        <button className="moviescard__button moviescard__button-like">
          <img src={like} alt="Кнопка лайк" />
        </button>
      )}
      <p className="moviescard__duration">{data.duration}</p>
    </div>
  );
}
