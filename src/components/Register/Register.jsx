import React from "react";
import Form from "../Form/Form";
import UseForm from "../../utils/UseForm";

export default function Register({ handleRegister, isSend }) {
  const { values, error, isValid, handleChange } = UseForm();

  function onRegister(evt) {
    evt.preventDefault();
    handleRegister(values.username, values.email, values.password);
  }

  return (
    <Form
      title="Добро пожаловать!"
      submit="Зарегистрироваться"
      question="Уже зарегистрированы?"
      link="Войти"
      path="/signin"
      onSubmit={onRegister}
      isSend={isSend}
      isValid={isValid}
    >
      <label className="form__input">
        <p className="form__input-title">Имя</p>
        <input
          name="username"
          type="text"
          className="form__input-field"
          placeholder="Имя"
          required
          minLength={2}
          maxLength={30}
          value={values.username}
          onChange={handleChange}
        />
        <p className="form__input-error">{error.username}</p>
      </label>

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
          className="form__input-field form__input-field_error"
          placeholder="Пароль"
          required
          minLength={3}
          maxLength={14}
          value={values.password}
          onChange={handleChange}
        />
        <p className="form__input-error form__input-error_display">
          {error.password}
        </p>
      </label>
    </Form>
  );
}
