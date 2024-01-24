import { useCallback, useState } from "react";

export default function UseForm() {
  //значения импутов
  const [values, setValues] = useState({});
  //текст ошибки
  const [error, setError] = useState({});
  //валидность формы
  const [isValid, setIsValid] = useState(false);

  function handleChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    const validationMessage = evt.target.validationMessage;
    const form = evt.target.form;

    setValues((firstValues) => {
      return { ...firstValues, [name]: value };
    });

    setError((firstError) => {
      return { ...firstError, [name]: validationMessage };
    });

    setIsValid(form.checkValidity());
  }

  const setValue = useCallback((name, value) => {
    setValues((firstValues) => {
      return { ...firstValues, [name]: value };
    });
  }, []);

  return { values, error, isValid, handleChange, setValue, setError };
}
