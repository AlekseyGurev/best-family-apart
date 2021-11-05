/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import TextField from "../form/textField";
import RadioField from "../form/radioField";
import CheckBoxField from "../form/checkBoxField";
import * as yup from "yup";

const RegisterForm = () => {
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    email: "",
    password: "",
    sex: "male",
    licence: false,
  });

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  const validateShema = yup.object().shape({
    password: yup
      .string()
      .required("Пароль обязателен для заполнения")
      .matches(
        /(?=.*[A-Z])/,
        "Пароль должен содержать хотя бы одну заглавную букву"
      )
      .matches(/(?=.*[0-9])/, "Пароль должен содержать хотя бы одно число")
      .matches(
        /(?=.*[!@#$%^&*])/,
        "Пароль должен содержать специальный символ !@#$%^&*"
      )
      .matches(/(?=.{8,})/, "Пароль должен состоять минимум из 8 символов"),
    email: yup
      .string()
      .required("Электронная почта обезательна для заполнения")
      .email("Почта введена некорректно"),
    licence: yup.string().matches(true, "Лицензия должна быть подтверждена"),
  });
  useEffect(() => {
    validate();
  }, [data]);
  const validate = () => {
    validateShema
      .validate(data)
      .then(() => setErrors({}))
      .catch((err) => setErrors({ [err.path]: err.message }));
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Введите почту"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        label="Введите пароль"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />
      <RadioField
        options={[
          { name: "Мужчина", value: "male" },
          { name: "Женщина", value: "female" },
          { name: "Другое", value: "other" },
        ]}
        name="sex"
        value={data.sex}
        onChange={handleChange}
        label="Выберете пол:"
      />
      <CheckBoxField
        onChange={handleChange}
        value={data.licence}
        name="licence"
        error={errors.licence}
      >
        Подтвердить <a>лицензионное соглашение</a>
      </CheckBoxField>
      <button disabled={!isValid} className="btn btn-primary  mb-2">
        Зарегистрироваться
      </button>
    </form>
  );
};

export default RegisterForm;
