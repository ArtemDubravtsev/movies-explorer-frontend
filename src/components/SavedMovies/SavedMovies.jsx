import React, { useCallback, useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function SavedMovies({
  movies,
  setMovies,
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
  const [checkBoxSave, setCheckBoxSave] = useState(false);

  const filterSaveMovies = useCallback((movies, searchData, checkBox) => {
    setSearchDataSave(searchData);
    setFilterMoviesSave(
      movies.filter((item) => {
        const itemName = item.nameRU
          .toLowerCase()
          .includes(searchData.toLowerCase());
        return checkBox ? itemName && item.duration <= 40 : itemName;
      })
    );
  }, []);

  function searcSaveMovies(searchDataSave) {
    filterSaveMovies(savedMovies, searchDataSave, checkBoxSave);
  }

  function handleSaveCheckBox() {
    if (checkBoxSave) {
      setCheckBoxSave(false);
      filterSaveMovies(savedMovies, searchDataSave, false);
    } else {
      setCheckBoxSave(true);
      filterSaveMovies(savedMovies, searchDataSave, true);
    }
  }

  useEffect(() => {
    filterSaveMovies(savedMovies, searchDataSave, checkBoxSave);
  }, [filterSaveMovies, savedMovies, searchDataSave, checkBoxSave]);

  return (
    <main>
      <SearchForm
        isError={isError}
        setIsError={setIsError}
        searchData={searchDataSave}
        searchMovies={searcSaveMovies}
        checkBox={checkBoxSave}
        handleCheckBox={handleSaveCheckBox}
      />
      <MoviesCardList
        movies={movies}
        savedMovies={savedMovies}
        setMovies={setMovies}
        isSend={isSend}
        searchError={searchError}
        handleDeleteMovie={handleDeleteMovie}
        filterMoviesSave={filterMoviesSave}
      />
    </main>
  );
}
