import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LoginForm from "../components/LoginForm";
import WithAuthRedirect from "../components/hoc/withAuthRedirect";

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <main className="container">
      <h1 className="pageTitle">{t("modals.auth.login")}</h1>
      <LoginForm />
      <div className="authOption">
        <span>{t("modals.auth.or")}</span>
        <Link className="authLink" to="/signup">
          {t("modals.auth.signup")}
        </Link>
      </div>
    </main>
  );
};

export default WithAuthRedirect(LoginPage);
