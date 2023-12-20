import React from "react";
import Form from "../Form/Form";

export default function Login() {
  return (
    <Form
      title="Рады видеть!"
      submit="Войти"
      question="Ещё не зарегистрированы?"
      link="Регистрация"
      path="/signup"
    >
      <label className="form__input">
        <p className="form__input-title">E-mail</p>
        <input
          type="email"
          className="form__input-field"
          placeholder="E-mail"
          defaultValue="pochta@yandex.ru"
          required
        />
        <p className="form__input-error">Что-то пошло не так...</p>
      </label>

      <label className="form__input">
        <p className="form__input-title">Пароль</p>
        <input
          type="password"
          className="form__input-field"
          placeholder="Пароль"
          required
        />
        <p className="form__input-error">Что-то пошло не так...</p>
      </label>
    </Form>
  );
}
