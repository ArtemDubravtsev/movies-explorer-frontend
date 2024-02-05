import React from "react";

export default function FilterCheckbox({ checkBox, handleCheckBox }) {
  return (
    <label className="filtercheckbox">
      <input
        type="checkbox"
        className="filtercheckbox__input"
        checked={checkBox}
        onChange={() => handleCheckBox()}
      />
      <span className="filtercheckbox__switch"></span>
      <p className="filtercheckbox__title">Короткометражки</p>
    </label>
  );
}
