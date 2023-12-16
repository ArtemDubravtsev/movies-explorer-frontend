import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import profil_ikon from "../../images/profil_icon.svg";

export default function Header({ isAuth }) {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src={logo} alt="Логотип" />
        </Link>
        {isAuth ? (
          <nav className="header__navigation">
            <li className="header__navigation-list">
              <Link to="/movies" className="header__navigation-item">
                Фильмы
              </Link>
              <Link to="/saved-movies" className="header__navigation-item">
                Сохранённые фильмы
              </Link>
            </li>
            <Link to="/profile">
              <button className="header__navigation-profil">
                Аккаунт
                <img
                  src={profil_ikon}
                  alt="Логотип"
                  className="header__navigation-ikon"
                />
              </button>
            </Link>
          </nav>
        ) : (
          <nav className="header__auth">
            <Link to="/signin" className="header__auth-register">
              Регистрация
            </Link>
            <Link to="/signup">
              <button className="header__auth-login">Войти</button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
