import React from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Field, reduxForm } from "redux-form";
import RenderInput from "./RenderInput";
import { signupValidation } from "../services/validation";
import * as sessionOperations from "../redux/session/sessionOperations";

const SignupForm = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onFormSubmit = (user) => {
    dispatch(sessionOperations.signup(user));
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit(onFormSubmit)}>
      <label className="inputLabel" htmlFor="loginNameId">
        <span className="inputLabelText">{t("modals.auth.name_label")}</span>
        <Field
          component={RenderInput}
          id="signupNameId"
          name="name"
          type="name"
          placeholder={t("modals.auth.name_placeholder")}
        />
      </label>
      <label className="inputLabel" htmlFor="loginEmailId">
        <span className="inputLabelText">{t("modals.auth.e_mail_label")}</span>
        <Field
          component={RenderInput}
          id="signupEmailId"
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
      <button className="submitBtn" type="submit">
        {t("modals.auth.signup")}
      </button>
    </form>
  );
};

export default reduxForm({
  form: "signup",
  validate: signupValidation,
})(SignupForm);
