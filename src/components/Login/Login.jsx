import React from "react";
import Form from "../Form/Form";
import UseForm from "../../utils/UseForm";

export default function Login({ handleLogin, isSend, isError, setIsError }) {
  const { values, error, isValid, handleChange } = UseForm();

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
      isSend={isSend}
      isValid={isValid}
      isError={isError}
      setIsError={setIsError}
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
        <p className="form__input-error">{error.email}</p>
      </label>

      <label className="form__input">
        <p className="form__input-title">Пароль</p>
        <input
          name="password"
          type="password"
          className="form__input-field"
          placeholder="Пароль"
          required
          minLength={3}
          maxLength={14}
          value={values.password}
          onChange={handleChange}
        />
        <p className="form__input-error">{error.password}</p>
      </label>
    </Form>
  );
}
