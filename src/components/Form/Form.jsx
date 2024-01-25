import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  isError,
  setIsError,
}) {
  const location = useLocation();

  useEffect(() => {
    setIsError(false);
  }, [setIsError]);

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

              {isError && location.pathname === "/signup" ? (
                <span className="form__message-error">
                  При регистрации пользователя произошла ошибка.
                </span>
              ) : isError && location.pathname === "/signin" ? (
                <span className="form__message-error">
                  При авторизации произошла ошибка.
                </span>
              ) : (
                " "
              )}

              <button
                type="submit"
                className={`form__button ${
                  isSend || !isValid || isError ? "form__button_disabled" : ""
                }`}
                disabled={isSend || !isValid || isError}
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
