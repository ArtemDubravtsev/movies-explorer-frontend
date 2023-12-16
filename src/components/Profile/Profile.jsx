import React from "react";

export default function Profile() {
  return (
    <>
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
                className="profile__form-input"
              />
            </label>
            <label className="profile__form-label">
              <span className="profile__form-title">E-Mail</span>
              <input
                type="text"
                dir="rtl"
                placeholder="E-Mail"
                className="profile__form-input"
              />
            </label>
          </form>
          <ul className="profile__links">
            <button className="profile__link">Редактировать</button>
            <button className="profile__link">Выйти из аккаунта</button>
          </ul>
        </div>
      </section>
    </>
  );
}
