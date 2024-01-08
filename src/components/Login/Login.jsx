import React from "react";
import Form from "../Form/Form";
import UseForm from "../../utils/UseForm";

export default function Login({ handleLogin }) {
  const { values, handleChange } = UseForm();

  function onLogin(evt) {
    evt.preventDefault();
    handleLogin(values.password, values.email);
  }

  return (
    <Form
      title="Рады видеть!"
      submit="Войти"
      question="Ещё не зарегистрированы?"
      link="Регистрация"
      path="/signup"
      onSubmit={onLogin}
    >
      <label className="form__input">
        <p className="form__input-title">E-mail</p>
        <input
          name="email"
          type="email"
          className="form__input-field"
          placeholder="E-mail"
          required
          value={values.email}
          onChange={handleChange}
        />
        <p className="form__input-error">Что-то пошло не так...</p>
      </label>

      <label className="form__input">
        <p className="form__input-title">Пароль</p>
        <input
          name="password"
          type="password"
          className="form__input-field"
          placeholder="Пароль"
          required
          value={values.password}
          onChange={handleChange}
        />
        <p className="form__input-error">Что-то пошло не так...</p>
      </label>
    </Form>
  );
}
