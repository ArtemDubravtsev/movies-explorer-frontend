import React from "react";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import UseForm from "../../utils/UseForm";
import Preloader from "../Preloader/Preloader";

export default function Profile({
  onUpdateUser,
  isSend,
  handleLogOut,
  isEditData,
  setIsEditData,
  isEditAnswer,
  setIsEditAnswer,
  isError,
  setIsError,
}) {
  const currentUser = useContext(CurrentUserContext);

  const { values, handleChange, setValue, isValid, error, setError } =
    UseForm();

  useEffect(() => {
    setValue("username", currentUser.name);
    setValue("email", currentUser.email);
  }, [currentUser, setValue]);

  useEffect(() => {
    setIsEditAnswer(false);
    setIsError(false);
  }, [setIsEditAnswer, setIsError]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({ username: values.username, email: values.email });
  }

  // в задании нет
  function handleCancel() {
    setValue("username", currentUser.name);
    setValue("email", currentUser.email);
  }

  return (
    <main>
      {isSend ? (
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
                  minLength={2}
                  maxLength={30}
                  required
                  className="profile__form-input"
                  value={values.username ? values.username : ""}
                  disabled={isSend || !isEditData}
                  onChange={handleChange}
                />
              </label>
              <p className="profile__form-error">{error.username}</p>
              <label className="profile__form-label">
                <span className="profile__form-title">E-Mail</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="profile__form-input"
                  value={values.email ? values.email : ""}
                  disabled={isSend || !isEditData}
                  onChange={handleChange}
                />
              </label>
              <p className="profile__form-error">{error.email}</p>
            </form>

            {isEditAnswer ? (
              <span className="profile__message">Успешно</span>
            ) : isError ? (
              <span className="profile__message-error">
                При обновлении профиля произошла ошибка.
              </span>
            ) : (
              ""
            )}

            <ul className="profile__links">
              {!isEditData ? (
                <>
                  <button
                    className="profile__link"
                    type="button"
                    onClick={() => {
                      setIsEditData(true);
                      setIsEditAnswer(false);
                      setIsError(false);
                    }}
                  >
                    Редактировать
                  </button>
                </>
              ) : (
                <>
                  <button
                    className={`profile__link-submit ${
                      (values.username === currentUser.name &&
                        values.email === currentUser.email) ||
                      !isValid ||
                      isError
                        ? "profile__link-submit_disabled"
                        : ""
                    }`}
                    type="submit"
                    disabled={isSend || !isValid || isError}
                    onClick={handleSubmit}
                  >
                    Сохранить
                  </button>
                  {/* в задании нет */}
                  <button
                    className="profile__link-cancel"
                    onClick={() => {
                      setIsEditData(false);
                      setIsEditAnswer(false);
                      setIsError(false);
                      setError({});
                      handleCancel();
                    }}
                  >
                    Отмена
                  </button>
                </>
              )}

              {!isEditData ? (
                <Link to="/" className="profile__link" onClick={handleLogOut}>
                  Выйти из аккаунта
                </Link>
              ) : (
                ""
              )}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}
