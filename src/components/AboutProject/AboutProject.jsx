import React from "react";

export default function AboutProject() {
  return (
    <section className="aboutproject">
      <div className="aboutproject__container">
        <h2 className="aboutproject__title">О проекте</h2>
        <ul className="aboutproject__list">
          <li>
            <h3 className="aboutproject__subtitle">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="aboutproject__description">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </li>
          <li>
            <h3 className="aboutproject__subtitle">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="aboutproject__description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>
        <div className="aboutproject__duration">
          <h3 className="aboutproject__duration-time">1 неделя</h3>
          <p className="aboutproject__duration-title">Back-end</p>
          <h3 className="aboutproject__duration-time">4 недели</h3>
          <p className="aboutproject__duration-title">Front-end</p>
        </div>
      </div>
    </section>
  );
}
