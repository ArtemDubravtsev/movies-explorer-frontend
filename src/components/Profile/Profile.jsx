import React from "react";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import UseForm from "../../utils/UseForm";
import Preloader from "../Preloader/Preloader";

export default function Profile({ onUpdateUser, isPreloader }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, setValue } = UseForm();

  useEffect(() => {
    setValue("username", currentUser.name);
    setValue("email", currentUser.email);
  }, [currentUser, setValue]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({ username: values.username, email: values.email });
  }

  return (
    <main>
      {isPreloader ? (
        <Preloader />
      ) : (
        <section className="profile">
          <div className="profile__container">
            <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
            <form className="profile__form">
              <label className="profile__form-label">
                <span className="profile__form-title">Имя</span>
                <input
                  name="username"
                  type="text"
                  dir="rtl"
                  className="profile__form-input"
                  value={values.username ? values.username : ""}
                  onChange={handleChange}
                />
              </label>
              <label className="profile__form-label">
                <span className="profile__form-title">E-Mail</span>
                <input
                  name="email"
                  type="email"
                  dir="rtl"
                  className="profile__form-input"
                  value={values.email ? values.email : ""}
                  onChange={handleChange}
                />
              </label>
            </form>
            <ul className="profile__links">
              <button className="profile__link" onClick={handleSubmit}>
                Редактировать
              </button>
              <Link to="/" className="profile__link">
                Выйти из аккаунта
              </Link>
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}
