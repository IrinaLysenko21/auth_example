import { useTranslation } from "react-i18next";
import React from "react";

const HomePage = () => {
  const { t } = useTranslation();

  return <h1>{t("modals.nav.home")}</h1>;
};

export default HomePage;
