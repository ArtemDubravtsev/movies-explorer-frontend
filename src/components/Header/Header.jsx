import React from "react";
import "./Header.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";
import account from "../../images/profile.svg";
import mobileMenu from "../../images/menu-button.svg";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn }) {
  const location = useLocation();

  const [isClicked, setIsClicked] = React.useState(false);

  function handleOpenMobileMenu() {
    setIsClicked(true);
  }

  function handleCloseMobileMenu() {
    setIsClicked(false);
  }

  return loggedIn ? (
    <header
      className={`header ${location.pathname === "/" ? "header_color" : ""}`}
    >
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src={logo} alt="логотип приложения" />
        </Link>
        <div className="header__container-films">
          <NavLink
            to="/movies"
            className="header__button"
            activeclassname="header__button_active"
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className="header__button"
            activeclassname="header__button_active"
          >
            Сохранённые фильмы
          </NavLink>
        </div>
        <div className="header__button-container">
          <Link
            to="/profile"
            className={`header__button-account ${
              location.pathname === "/" ? "header_color" : ""
            }`}
          >
            <span className="header__button-text">Аккаунт</span>
            <img
              className={`header__button-icon ${
                location.pathname === "/" ? "header_color" : ""
              }`}
              src={account}
              alt="изображение иконки аккаунта"
            />
          </Link>
          <button
            className="header__menu-button"
            onClick={handleOpenMobileMenu}
          >
            <img
              src={mobileMenu}
              alt="кнопка мобильного меню"
              className="header__menu-ikon"
            />
          </button>
        </div>
      </div>
      {isClicked ? (
        <Navigation handleCloseMobileMenu={handleCloseMobileMenu} />
      ) : (
        ""
      )}
    </header>
  ) : (
    <header className="header header_color" id="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src={logo} alt="логотип сайта" />
        </Link>
        <div className="header__button-container">
          <Link to="/signup" className="header__button">
            Регистрация
          </Link>
          <Link to="/signin" className="header__button header__button-green">
            Войти
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
