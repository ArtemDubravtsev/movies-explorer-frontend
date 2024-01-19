import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function Movies({ movies, ...props }) {
  return (
    <main>
      <SearchForm />
      <MoviesCardList movies={movies} {...props} />
    </main>
  );
}
