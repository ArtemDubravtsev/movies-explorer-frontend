import React from "react";
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
  checkBox,
  handleCheckBox,
}) {
  const { values, handleChange, setValue } = UseForm();

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
            value={values.search || ""}
            onChange={(evt) => {
              handleChange(evt);
              setIsError(false);
            }}
          />

          <button type="submit" className="searchform__button">
            Найти
          </button>

          <div className="searchform__wrapperCheckboxOne">
            <FilterCheckbox
              className="search-form__checkbox"
              checkBox={checkBox}
              handleCheckBox={handleCheckBox}
            />
          </div>
          <div className="searchform__wrapperCheckboxTwo">
            <FilterCheckboxMobile />
          </div>
        </form>
        {isError ? (
          <span className="searchform__message">Введите название фильма</span>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
