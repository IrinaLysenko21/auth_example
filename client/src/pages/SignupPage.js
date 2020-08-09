import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SignupForm from "../components/SignupForm";
import WithAuthRedirect from "../components/hoc/withAuthRedirect";

const SignupPage = () => {
  const { t } = useTranslation();

  return (
    <main className="container">
      <h1 className="pageTitle">{t("modals.auth.signup")}</h1>
      <SignupForm />
      <div className="authOption">
        <span>{t("modals.auth.or")}</span>
        <Link className="authLink" to="/login">
          {t("modals.auth.login")}
        </Link>
      </div>
    </main>
  );
};

export default WithAuthRedirect(SignupPage);
