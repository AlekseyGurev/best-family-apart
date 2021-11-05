/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useParams } from "react-router";
import LoginForm from "../common/ui/loginForm";
import RegisterForm from "../common/ui/registerForm";

const Login = () => {
  const { type } = useParams();
  const [formType, setFormType] = useState(
    type === "register" ? type : "login"
  );
  const toggleFormType = (params) => {
    setFormType((prevState) =>
      prevState === "register" ? "login" : "register"
    );
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          {formType === "register" ? (
            <>
              <h3 className="mb-4">Регистрация</h3>
              <RegisterForm />
              <p>
                У Вас есть аккаунт ?{" "}
                <a
                  className="link-primary"
                  role="button"
                  onClick={toggleFormType}
                >
                  Войти
                </a>
              </p>
            </>
          ) : (
            <>
              <h3 className="mb-4">Вход</h3>
              <LoginForm />
              <p>
                У Вас есть аккаунт ?{" "}
                <a
                  className="link-primary"
                  role="button"
                  onClick={toggleFormType}
                >
                  Зарегистрироваться
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
