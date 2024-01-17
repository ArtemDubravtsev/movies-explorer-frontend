import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({ movies }) {
  return (
    <section className="moviescardlist">
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
    </section>
  );
}
