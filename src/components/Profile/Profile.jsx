import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <main>
      <section className="profile">
        <div className="profile__container">
          <h1 className="profile__title">Привет, Артем</h1>
          <form className="profile__form">
            <label className="profile__form-label">
              <span className="profile__form-title">Имя</span>
              <input
                type="text"
                dir="rtl"
                placeholder="Имя"
                defaultValue="Артем"
                className="profile__form-input"
              />
            </label>
            <label className="profile__form-label">
              <span className="profile__form-title">E-Mail</span>
              <input
                type="email"
                dir="rtl"
                placeholder="E-mail"
                defaultValue="pochta@yandex.ru"
                className="profile__form-input"
              />
            </label>
          </form>
          <ul className="profile__links">
            <button className="profile__link">Редактировать</button>
            <Link to="/" className="profile__link">
              Выйти из аккаунта
            </Link>
          </ul>
        </div>
      </section>
    </main>
  );
}
