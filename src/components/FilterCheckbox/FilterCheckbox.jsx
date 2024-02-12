import React from "react";

export default function FilterCheckbox({
  isCheckBox,
  handleCheckBox,
  getQuery,
}) {
  const handleCheckBoxClick = () => {
    handleCheckBox(getQuery());
  };

  return (
    <label className="filtercheckbox">
      <input
        type="checkbox"
        className="filtercheckbox__input"
        checked={isCheckBox}
        onChange={() => handleCheckBoxClick()}
      />

      <span className="filtercheckbox__switch"></span>
      <p className="filtercheckbox__title">Короткометражки</p>
    </label>
  );
}
