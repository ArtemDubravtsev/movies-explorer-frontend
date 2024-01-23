import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import Preloader from "../Preloader/Preloader";

export default function Form({
  title,
  children,
  submit,
  question,
  path,
  link,
  onSubmit,
  isValid,
  isSend,
}) {
  return (
    <main>
      {isSend ? (
        <Preloader />
      ) : (
        <section className="form">
          <div className="form__container">
            <Link to="/" className="form__logo">
              <img src={logo} alt="Логотип"></img>
            </Link>
            <h1 className="form__title">{title}</h1>
            <form className="form__items" onSubmit={onSubmit}>
              <div className="form__item"> {children} </div>
              <button
                type="submit"
                className={`form__button ${
                  isValid ? "" : "form__button_disabled"
                }`}
              >
                {submit}
              </button>
            </form>
            <p className="form__question">
              {question}
              <Link to={path} className="form__link">
                {link}
              </Link>
            </p>
          </div>
        </section>
      )}
    </main>
  );
}
