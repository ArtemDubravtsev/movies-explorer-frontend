import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function SavedMovies() {
  return (
    <main>
      <SearchForm />
      <MoviesCardList />
    </main>
  );
}
