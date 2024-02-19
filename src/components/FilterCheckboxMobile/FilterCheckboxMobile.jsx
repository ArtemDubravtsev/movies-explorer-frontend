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
    <label className="filtercheckboxMobile">
      <input
        type="checkbox"
        className="filtercheckboxMobile__input"
        checked={isCheckBox}
        onChange={() => handleCheckBoxClick()}
      />

      <span className="filtercheckboxMobile__switch"></span>
      <p className="filtercheckboxMobile__title">Короткометражки</p>
    </label>
  );
}
