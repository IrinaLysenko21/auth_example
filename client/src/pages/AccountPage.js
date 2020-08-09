import React from "react";
import { useTranslation } from "react-i18next";

const AccountPage = () => {
  const { t } = useTranslation();

  return <h1>{t("modals.nav.account")}</h1>;
};

export default AccountPage;
