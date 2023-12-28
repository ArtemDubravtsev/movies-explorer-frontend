import React from "react";

export default function FilterCheckbox() {
  return (
    <label className="filtercheckbox">
      <input type="checkbox" className="filtercheckbox__input" />
      <span className="filtercheckbox__switch"></span>
      <p className="filtercheckbox__title">Короткометражки</p>
    </label>
  );
}
