import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

export default function MoviesCardList({ movies, isSend }) {
  return (
    <section className="moviescardlist">
      {isSend ? (
        <Preloader />
      ) : (
        <>
          <ul className="moviescardlist__list">
            {movies.map((data) => {
              return <MoviesCard movies={movies} data={data} key={data.id} />;
            })}
          </ul>
          <div className="moviescardlist__more">
            <button type="button" className="moviescardlist__button">
              Ещё
            </button>
          </div>
        </>
      )}
    </section>
  );
}
