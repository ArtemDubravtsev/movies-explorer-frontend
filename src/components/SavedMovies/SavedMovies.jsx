import React, { useCallback, useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function SavedMovies({
  isSend,
  isError,
  setIsError,
  searchError,
  savedMovies,
  handleDeleteMovie,
}) {
  //отфильтрованные сохр. фильмы
  const [filterMoviesSave, setFilterMoviesSave] = useState(savedMovies);
  //поле поиска
  const [searchDataSave, setSearchDataSave] = useState("");
  //состояние чекбокса
  const [isCheckBoxSave, setIsCheckBoxSave] = useState(false);

  const filterSaveMovies = useCallback((movies, searchData, isCheckBoxSave) => {
    setSearchDataSave(searchData);
    setFilterMoviesSave(
      movies.filter((item) => {
        const itemName = item.nameRU
          .toLowerCase()
          .includes(searchData.toLowerCase());
        return isCheckBoxSave ? itemName && item.duration <= 40 : itemName;
      })
    );
  }, []);

  function searcSaveMovies(searchDataSave) {
    filterSaveMovies(savedMovies, searchDataSave, isCheckBoxSave);
  }

  function handleSaveCheckBox(searchQuery) {
    if (isCheckBoxSave) {
      setIsCheckBoxSave(false);
      filterSaveMovies(savedMovies, searchQuery, false);
    } else {
      setIsCheckBoxSave(true);
      filterSaveMovies(savedMovies, searchQuery, true);
    }
  }

  useEffect(() => {
    filterSaveMovies(savedMovies, searchDataSave, isCheckBoxSave);
  }, [filterSaveMovies, savedMovies, searchDataSave, isCheckBoxSave]);

  return (
    <main>
      <SearchForm
        isError={isError}
        setIsError={setIsError}
        searchData={searchDataSave}
        searchMovies={searcSaveMovies}
        isCheckBox={isCheckBoxSave}
        handleCheckBox={handleSaveCheckBox}
      />
      <MoviesCardList
        savedMovies={savedMovies}
        isSend={isSend}
        searchError={searchError}
        handleDeleteMovie={handleDeleteMovie}
        filterMoviesSave={filterMoviesSave}
      />
    </main>
  );
}
