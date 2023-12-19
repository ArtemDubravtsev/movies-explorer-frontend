import React from "react";

export default function FilterCheckbox() {
  return (
    <label className="filtercheckboxMobile">
      <input type="checkbox" className="filtercheckboxMobile__input" />
      <span className="filtercheckboxMobile__switch"></span>
      <p className="filtercheckboxMobile__title">Короткометражки</p>
    </label>
  );
}
