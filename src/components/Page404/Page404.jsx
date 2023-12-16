import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div className="page-not-found">
      <div className="page-not-found__container">
        <h1 className="page-not-found__title">404</h1>
        <p className="pege-not-found__subtitle">Страница не найдена</p>
      </div>
      <Link to="/" className="page-not-found__link">
        Назад
      </Link>
    </div>
  );
}
