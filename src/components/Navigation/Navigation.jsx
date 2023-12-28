import React from "react";
import { Link, NavLink } from "react-router-dom";
import account from "../../images/profile.svg";
import "./Navigation.css";

function Navigation({ handleCloseMobileMenu }) {
  return (
    <div className="navigation__overlay-page">
      <div className="navigation__overlay-container"></div>
      <div className="navigation__menu">
        <button
          className="navigation__close-button"
          onClick={handleCloseMobileMenu}
        ></button>
        <nav className="navigation__links">
          <NavLink
            exact
            to="/"
            className="navigation__link"
            activeClassName="navigation__link_active"
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className="navigation__link"
            activeClassName="navigation__link_active"
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className="navigation__link"
            activeClassName="navigation__link_active"
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <Link to="/profile" className="navigation__button-account">
          <span className="navigation__button-text">Аккаунт</span>
          <img
            className="navigation__button-ikon"
            src={account}
            alt="аккаунт"
          />
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
