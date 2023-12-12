import React from "react";
import like from "../../images/like.svg";

export default function MoviesCard() {
  return (
    <div className="moviescard">
      <a className="moviescard__link">
        <img
          src="https://kinotv.ru/upload/resize_cache/iblock/606/1200_1200_1/606a63fd30fd7903213c5ee998cc6d4c.jpg"
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
