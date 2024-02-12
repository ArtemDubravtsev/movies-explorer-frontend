import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import {
  MIN_SIZE_FOR_LARGE_SCREEN,
  MAX_SIZE_FOR_MEDIUM_SCREEN,
  MIN_SIZE_FOR_MEDIUM_SCREEN,
  MOVIES_AMOUNT_LARGE,
  MOVIES_AMOUNT_MEDIUM,
  MOVIES_AMOUNT_SMALL,
  MOVIES_MORE_LARGE,
  MOVIES_MORE_SMALL,
} from "../../utils/configShowMovies";

export default function MoviesCardList({
  allMovies,
  savedMovies,
  isSend,
  filterMovies,
  searchError,
  handleDeleteMovie,
  handleLikeMovie,
  filterMoviesSave,
}) {
  const location = useLocation();
  const [showMoviesAmount, setShowMoviesAmount] = useState(0);

  function handleShowMoviesAmount() {
    const display = window.innerWidth;
    if (display > MIN_SIZE_FOR_LARGE_SCREEN) {
      setShowMoviesAmount(MOVIES_AMOUNT_LARGE);
    } else if (display > MIN_SIZE_FOR_MEDIUM_SCREEN) {
      setShowMoviesAmount(MOVIES_AMOUNT_MEDIUM);
    } else {
      setShowMoviesAmount(MOVIES_AMOUNT_SMALL);
    }
  }

  function clickShowMoreMovies() {
    const display = window.innerWidth;
    if (display > MAX_SIZE_FOR_MEDIUM_SCREEN) {
      setShowMoviesAmount(showMoviesAmount + MOVIES_MORE_LARGE);
    } else if (display > MIN_SIZE_FOR_MEDIUM_SCREEN) {
      setShowMoviesAmount(showMoviesAmount + MOVIES_MORE_SMALL);
    } else {
      setShowMoviesAmount(showMoviesAmount + MOVIES_MORE_SMALL);
    }
  }

  useEffect(() => {
    if (location.pathname === "/movies") {
      handleShowMoviesAmount();
    }
  }, [location, filterMovies]);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", handleShowMoviesAmount);
    }, 500);
    return () => {
      window.removeEventListener("resize", handleShowMoviesAmount);
    };
  }, []);

  return (
    <section className="moviescardlist">
      {isSend ? (
        <Preloader />
      ) : (
        <ul className="moviescardlist__list">
          {location.pathname === "/movies" && filterMovies.length !== 0 ? (
            filterMovies.slice(0, showMoviesAmount).map((data) => {
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
              allMovies.length === 0 ? (
                <span className="moviescardlist__message">
                  «Выполните поиск чтобы увидеть список фильмов»
                </span>
              ) : (
                ""
              )}

              {location.pathname === "/movies" &&
              !searchError &&
              allMovies.length !== 0 ? (
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

      {location.pathname === "/movies" &&
      filterMovies.length > showMoviesAmount ? (
        <div className="moviescardlist__more">
          <button
            type="button"
            className="moviescardlist__button"
            onClick={clickShowMoreMovies}
          >
            Ещё
          </button>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
