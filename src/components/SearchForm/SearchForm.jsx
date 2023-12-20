import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import FilterCheckboxMobile from "../FilterCheckboxMobile/FilterCheckboxMobile";
import search_ikon from "../../images/search_icon.svg";

export default function SearchForm() {
  return (
    <section className="searchform">
      <div className="searchform__container">
        <form className="searchform__form">
          <img
            src={search_ikon}
            alt="Иконка поиска"
            className="searchform__ikon"
          />
          <input
            type="text"
            placeholder="Фильм"
            className="searchform__form__input"
            required
          />
          <button type="submit" className="search-form__button">
            Найти
          </button>

          <div className="searchform__wrapperCheckboxOne">
            <FilterCheckbox className="search-form__checkbox" />
          </div>

          <div className="searchform__wrapperCheckboxTwo">
            <FilterCheckboxMobile />
          </div>
        </form>
      </div>
    </section>
  );
}
