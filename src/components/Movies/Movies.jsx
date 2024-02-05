import React, { useCallback, useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesApi from "../../utils/MoviesApi";

export default function Movies({
  isSend,
  setIsSend,
  isError,
  setIsError,
  savedMovies,
  handleLikeMovie,
}) {
  //все фильмы
  const [movies, setMovies] = useState([]);
  //отфильтрованные фильмы
  const [filterMovies, setFilterMovies] = useState([]);
  //ошибка окна результатов
  const [searchError, setSearchError] = useState(false);
  //состояние чекбокса
  const [checkBox, setCheckBox] = useState(false);
  //поле поиска
  const [searchData, setSearchData] = useState("");

  const filterAllMovies = useCallback((movies, searchData, checkBox) => {
    localStorage.setItem("allMovies", JSON.stringify(movies));
    localStorage.setItem("searchData", JSON.stringify(searchData));
    localStorage.setItem("checkBox", JSON.stringify(checkBox));
    setSearchData(searchData);
    setFilterMovies(
      movies.filter((item) => {
        const itemName = item.nameRU
          .toLowerCase()
          .includes(searchData.toLowerCase());
        return checkBox ? itemName && item.duration <= 40 : itemName;
      })
    );
  }, []);

  function searchMovies(searchData) {
    if (movies.length === 0) {
      setIsSend(true);
      MoviesApi.getMovies()
        .then((res) => {
          setMovies(res);
          setSearchError(false);
          filterAllMovies(res, searchData, checkBox);
        })
        .catch((error) => {
          setSearchError(true);
          console.log(`Ошибка при поиске фильмов ${error}`);
        })
        .finally(() => {
          setIsSend(false);
        });
    } else {
      filterAllMovies(movies, searchData, checkBox);
    }
  }

  function handleCheckBox() {
    if (checkBox) {
      setCheckBox(false);
      filterAllMovies(movies, searchData, false);
    } else {
      setCheckBox(true);
      filterAllMovies(movies, searchData, true);
    }
  }

  useEffect(() => {
    if (
      localStorage.allMovies &&
      localStorage.searchData &&
      localStorage.checkBox
    ) {
      const allMovies = JSON.parse(localStorage.allMovies);
      const searchData = JSON.parse(localStorage.searchData);
      const checkBox = JSON.parse(localStorage.checkBox);
      setSearchError(false);
      setMovies(allMovies);
      setSearchData(searchData);
      setCheckBox(checkBox);
      filterAllMovies(allMovies, searchData, checkBox);
    }
  }, [filterAllMovies]);

  return (
    <main>
      <SearchForm
        searchMovies={searchMovies}
        searchData={searchData}
        checkBox={checkBox}
        handleCheckBox={handleCheckBox}
        isError={isError}
        setIsError={setIsError}
      />
      <MoviesCardList
        movies={movies}
        savedMovies={savedMovies}
        setMovies={setMovies}
        filterMovies={filterMovies}
        isSend={isSend}
        searchError={searchError}
        handleLikeMovie={handleLikeMovie}
      />
    </main>
  );
}
