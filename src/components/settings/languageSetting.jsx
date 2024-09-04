// src/components/Settings.js
import React from "react";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="settings" style={{ margin: "10px" }}>
      <h1>{t("language")}</h1>
      <select onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="ru">Russian</option>
        <option value="es">Spanish</option>
        <option value="zh">Chinese</option>
      </select>
    </div>
  );
};

export default Settings;
