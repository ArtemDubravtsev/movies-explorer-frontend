import React, { useEffect, useState } from "react";
import like from "../../images/like.svg";
import dislike from "../../images/dislike.svg";
import remove from "../../images/delete_ikon.svg";
import { useLocation } from "react-router-dom";

export default function MoviesCard({
  data,
  handleDeleteMovie,
  handleLikeMovie,
  savedMovies,
}) {
  const { pathname } = useLocation();
  //статус лайка
  const [likeButton, setLikeButton] = useState(false);

  function likeMovie() {
    if (savedMovies.some((item) => data.id === item.movieId)) {
      setLikeButton(true);
      handleLikeMovie(data);
    } else {
      setLikeButton(false);
      handleLikeMovie(data);
    }
  }

  useEffect(() => {
    if (pathname === "/movies")
      setLikeButton(savedMovies.some((item) => data.id === item.movieId));
  }, [setLikeButton, savedMovies, data.id, pathname]);

  return (
    <div className="moviescard">
      <a href={data.trailerLink} className="moviescard__link">
        <img
          src={
            pathname === "/movies"
              ? `https://api.nomoreparties.co${data.image.url}`
              : data.image
          }
          alt="Кадр из фильма"
          className="moviescard__preview"
        />
      </a>
      <h3 className="moviescard__title">{data.nameRU}</h3>

      {pathname === "/saved-movies" ? (
        <button
          className="moviescard__button moviescard__button-delete"
          onClick={() => {
            handleDeleteMovie(data._id);
          }}
        >
          <img src={remove} alt="Кнопка удалить" />
        </button>
      ) : (
        <button
          className="moviescard__button moviescard__button-like"
          type="button"
          onClick={likeMovie}
        >
          {likeButton ? (
            <img src={like} alt="Кнопка лайк" />
          ) : (
            <img src={dislike} alt="Кнопка дизлайк" />
          )}
        </button>
      )}
      <p className="moviescard__duration">{data.duration}</p>
    </div>
  );
}
