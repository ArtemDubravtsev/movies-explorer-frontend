import React, { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import FilterCheckboxMobile from "../FilterCheckboxMobile/FilterCheckboxMobile";
import search_ikon from "../../images/search_icon.svg";
import UseForm from "../../utils/UseForm";
import { useEffect } from "react";

export default function SearchForm({
  searchMovies,
  isError,
  setIsError,
  searchData,
  isCheckBox,
  handleCheckBox,
}) {
  const { setValue } = UseForm();
  //хранениние введенного запроса поиска фильмов
  const [query, setQuery] = useState("");

  function handleQueryChange(evt) {
    setQuery(evt.target.value);
  }

  useEffect(() => {
    setValue("search", searchData);
    setIsError(false);
  }, [setValue, searchData, setIsError]);

  function onSearch(evt) {
    evt.preventDefault();
    if (evt.target.search.value) {
      searchMovies(evt.target.search.value);
    } else {
      setIsError(true);
    }
  }

  const getQuery = () => {
    return query;
  };

  return (
    <section className="searchform">
      <div className="searchform__container">
        <form className="searchform__form" onSubmit={onSearch}>
          <img
            src={search_ikon}
            alt="Иконка поиска"
            className="searchform__ikon"
          />

          <input
            type="text"
            name="search"
            placeholder="Фильм"
            className="searchform__form-input"
            value={query || ""}
            onChange={handleQueryChange}
          />

          <button type="submit" className="searchform__button">
            Найти
          </button>

          <div className="searchform__wrapperCheckboxOne">
            <FilterCheckbox
              className="search-form__checkbox"
              isCheckBox={isCheckBox}
              handleCheckBox={handleCheckBox}
              getQuery={getQuery}
            />
          </div>
          <div className="searchform__wrapperCheckboxTwo">
            <FilterCheckboxMobile
              isCheckBox={isCheckBox}
              handleCheckBox={handleCheckBox}
              getQuery={getQuery}
            />
          </div>
        </form>
        {isError ? (
          <span className="searchform__message">
            Нужно ввести ключевое слово
          </span>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
