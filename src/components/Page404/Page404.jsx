import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <main>
      <section className="page-not-found">
        <div className="page-not-found__container">
          <h1 className="page-not-found__title">404</h1>
          <p className="page-not-found__subtitle">Страница не найдена</p>
        </div>
        <Link to={-1} className="page-not-found__link">
          Назад
        </Link>
      </section>
    </main>
  );
}
