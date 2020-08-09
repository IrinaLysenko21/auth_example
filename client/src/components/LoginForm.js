import React from "react";
import { useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { useTranslation } from "react-i18next";
import RenderInput from "./RenderInput";
import { loginValidation } from "../services/validation";
import * as sessionOperations from "../redux/session/sessionOperations";

const LoginForm = ({ handleSubmit, submitting }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onFormSubmit = ({ email, password }) => {
    dispatch(sessionOperations.login({ email, password }));
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit(onFormSubmit)}>
      <label className="inputLabel" htmlFor="loginEmailId">
        <span className="inputLabelText">{t("modals.auth.e_mail_label")}</span>
        <Field
          component={RenderInput}
          id="loginEmailId"
          name="email"
          type="email"
          placeholder={t("modals.auth.e_mail_placeholder")}
        />
      </label>
      <label className="inputLabel" htmlFor="loginPasswordId">
        <span className="inputLabelText">
          {t("modals.auth.password_label")}
        </span>
        <Field
          component={RenderInput}
          id="loginPasswordId"
          name="password"
          type="password"
          placeholder={t("modals.auth.password_placeholder")}
        />
      </label>
      <button className="submitBtn" type="submit" disabled={submitting}>
        {t("modals.auth.login")}
      </button>
    </form>
  );
};

export default reduxForm({
  form: "login",
  validate: loginValidation,
})(LoginForm);
