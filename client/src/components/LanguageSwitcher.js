import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

const LanguageSwitcher = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="languages">
      <button
        className="languagesBtn"
        type="button"
        onClick={() => {
          setIsListOpen(!isListOpen);
        }}
      >
        {language}{" "}
        <span
          className={classNames([isListOpen ? "arrowUp" : "arrowDown"])}
        ></span>
      </button>
      {isListOpen && (
        <ul className="languagesList">
          <li className="languagesListItem">
            <button
              className="languageBtn"
              type="button"
              onClick={() => {
                setLanguage("EN");
                changeLanguage("en");
                setIsListOpen(false);
              }}
            >
              EN
            </button>
          </li>
          <li className="languagesListItem">
            <button
              className="languageBtn"
              type="button"
              onClick={() => {
                setLanguage("RU");
                changeLanguage("ru");
                setIsListOpen(false);
              }}
            >
              RU
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
