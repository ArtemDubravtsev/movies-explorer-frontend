import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList() {
  return (
    <section className="moviescardlist">
      <ul className="moviescardlist__list">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        
      </ul>
      <div className="moviescardlist__more">
        <button type="button" className="moviescardlist__button">
          Ещё
        </button>
      </div>
    </section>
  );
}
