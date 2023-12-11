import React from "react";
import logo from "../../images/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="Логотип" />
        <nav className="header__navigation">
          <ul className="header__auth">
            <li className="header__auth-register">
              <a href="#" className="header__link-register">
                Регистрация
              </a>
            </li>
            <button className="header__auth-login">
              <a href="#" className="header__link-login">
                Войти
              </a>
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
}
