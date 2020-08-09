import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLocale from "./enLocale";
import ruLocale from "./ruLocale";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          ...enLocale,
        },
      },
      ru: {
        translation: {
          ...ruLocale,
        },
      },
    },
    whiteList: ["en", "ru"],
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
