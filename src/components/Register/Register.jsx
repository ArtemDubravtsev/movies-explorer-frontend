import React from "react";
import Form from "../Form/Form";

export default function Register() {
  return (
    <Form
      title="Добро пожаловать!"
      submit="Зарегистрироваться"
      question="Уже зарегистрированы?"
      link="Войти"
      path="/signup"
    >
      <label className="form__input">
        <p className="form__input-title">Имя</p>
        <input
          type="text"
          className="form__input-field"
          defaultValue="Виталий"
          required
        />
        <p className="form__input-error">Что-то пошло не так...</p>
      </label>

      <label className="form__input">
        <p className="form__input-title">E-mail</p>
        <input
          type="email"
          className="form__input-field"
          defaultValue="pochta@yandex.ru"
          required
        />
        <p className="form__input-error">Что-то пошло не так...</p>
      </label>

      <label className="form__input">
        <p className="form__input-title">Пароль</p>
        <input
          type="password"
          className="form__input-field form__input-field_error"
          defaultValue="••••••••••••••"
          required
        />
        <p className="form__input-error form__input-error_display">
          Что-то пошло не так...
        </p>
      </label>
    </Form>
  );
}
