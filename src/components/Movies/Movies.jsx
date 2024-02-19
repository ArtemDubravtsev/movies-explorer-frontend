import React, { useCallback, useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesApi from "../../utils/MoviesApi";
import { MAX_FILM_DURATION } from "../../utils/configShowMovies";

export default function Movies({
  isSend,
  setIsSend,
  isError,
  setIsError,
  savedMovies,
  handleLikeMovie,
}) {
  //все фильмы
  const [allMovies, setAllMovies] = useState([]);
  //отфильтрованные фильмы
  const [filterMovies, setFilterMovies] = useState([]);
  //ошибка окна результатов
  const [searchError, setSearchError] = useState(false);
  //состояние чекбокса
  const [isCheckBox, setIsCheckBox] = useState(false);
  //поле поиска
  const [searchData, setSearchData] = useState("");

  const filterAllMovies = useCallback((allMovies, searchInput, isCheckBox) => {
    localStorage.setItem("movies", JSON.stringify(allMovies));
    localStorage.setItem("searchField", JSON.stringify(searchInput));
    localStorage.setItem("checkBoxState", JSON.stringify(isCheckBox));
    setSearchData(searchInput);
    setFilterMovies(
      allMovies.filter((item) => {
        const itemName = item.nameRU
          .toLowerCase()
          .includes(searchInput.toLowerCase());
        return isCheckBox
          ? itemName && item.duration <= MAX_FILM_DURATION
          : itemName;
      })
    );
  }, []);

  function searchMovies(searchInput) {
    if (allMovies.length === 0) {
      setIsSend(true);
      MoviesApi.getMovies()
        .then((res) => {
          setAllMovies(res);
          setSearchError(false);
          filterAllMovies(res, searchInput, isCheckBox);
        })
        .catch((error) => {
          setSearchError(true);
          console.log(`Ошибка при поиске фильмов ${error}`);
        })
        .finally(() => {
          setIsSend(false);
        });
    } else {
      filterAllMovies(allMovies, searchInput, isCheckBox);
    }
  }

  function handleCheckBox(searchQuery) {
    localStorage.setItem("searchField", JSON.stringify(searchQuery));
    if (isCheckBox) {
      setIsCheckBox(false);
      filterAllMovies(allMovies, searchQuery, false);
    } else {
      setIsCheckBox(true);
      filterAllMovies(allMovies, searchQuery, true);
    }
  }

  useEffect(() => {
    if (
      localStorage.movies &&
      localStorage.searchField &&
      localStorage.checkBoxState
    ) {
      const userMovies = JSON.parse(localStorage.movies);
      const userSearch = JSON.parse(localStorage.searchField);
      const userCheckBox = JSON.parse(localStorage.checkBoxState);
      setSearchError(false);
      setAllMovies(userMovies);
      setSearchData(userSearch);
      setIsCheckBox(userCheckBox);
      filterAllMovies(userMovies, userSearch, userCheckBox);
    }
  }, [filterAllMovies]);

  return (
    <main>
      <SearchForm
        searchMovies={searchMovies}
        searchData={searchData}
        isCheckBox={isCheckBox}
        handleCheckBox={handleCheckBox}
        isError={isError}
        setIsError={setIsError}
      />
      <MoviesCardList
        allMovies={allMovies}
        savedMovies={savedMovies}
        filterMovies={filterMovies}
        isSend={isSend}
        searchError={searchError}
        handleLikeMovie={handleLikeMovie}
      />
    </main>
  );
}
