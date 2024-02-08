import { useCallback, useState } from "react";

export default function UseForm() {
  //значения импутов
  const [values, setValues] = useState({});
  //текст ошибки
  const [error, setError] = useState({});
  //валидность формы
  const [isValid, setIsValid] = useState(false);
  //валидность email
  const emailRegex = /^\S+@\S+\.\S+$/;
  const [validEmail, setValidEmail] = useState(false);

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

  const handleEmailChange = (evt) => {
    const enteredEmail = evt.target.value;
    setValidEmail(emailRegex.test(enteredEmail));
  };

  const setValue = useCallback((name, value) => {
    setValues((firstValues) => {
      return { ...firstValues, [name]: value };
    });
  }, []);

  return {
    values,
    error,
    isValid,
    handleChange,
    setValue,
    setError,
    validEmail,
    handleEmailChange,
  };
}
