import React from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

export default function MoviesCardList({
  movies,
  savedMovies,
  isSend,
  filterMovies,
  searchError,
  handleDeleteMovie,
  handleLikeMovie,
  filterMoviesSave,
}) {
  const location = useLocation();

  return (
    <section className="moviescardlist">
      {isSend ? (
        <Preloader />
      ) : (
        <ul className="moviescardlist__list">
          {location.pathname === "/movies" && filterMovies.length !== 0 ? (
            filterMovies.map((data) => {
              return (
                <MoviesCard
                  key={data.id}
                  data={data}
                  savedMovies={savedMovies}
                  handleLikeMovie={handleLikeMovie}
                />
              );
            })
          ) : (
            <>
              {location.pathname === "/movies" &&
              !searchError &&
              filterMovies.length === 0 &&
              movies.length === 0 ? (
                <span className="moviescardlist__message">
                  «Выполните поиск чтобы увидеть список фильмов»
                </span>
              ) : (
                ""
              )}

              {location.pathname === "/movies" &&
              !searchError &&
              movies.length !== 0 ? (
                <span className="moviescardlist__message">
                  «По вашему запросу ничего не найдено»
                </span>
              ) : (
                ""
              )}

              {location.pathname === "/movies" && searchError ? (
                <span className="moviescardlist__message">
                  «Во время запроса произошла ошибка. Возможно, проблема с
                  соединением или сервер недоступен. Подождите немного и
                  попробуйте ещё раз»
                </span>
              ) : (
                ""
              )}
            </>
          )}

          {location.pathname === "/saved-movies" && savedMovies.length !== 0 ? (
            filterMoviesSave.map((data) => {
              return (
                <MoviesCard
                  key={data._id}
                  data={data}
                  savedMovies={savedMovies}
                  handleDeleteMovie={handleDeleteMovie}
                />
              );
            })
          ) : (
            <>
              {location.pathname === "/saved-movies" &&
              savedMovies.length === 0 ? (
                <span className="moviescardlist__message">
                  «Сохраненных фильмов нет»
                </span>
              ) : (
                ""
              )}
            </>
          )}
        </ul>
      )}

      <div className="moviescardlist__more">
        <button type="button" className="moviescardlist__button">
          Ещё
        </button>
      </div>
    </section>
  );
}
