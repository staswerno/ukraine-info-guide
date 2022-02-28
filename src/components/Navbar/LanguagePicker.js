import React from "react";
import SelectSearch from "react-select-search";
import { useTranslation } from "react-i18next";

const languages = [
  { value: "en", name: "English" },
  { value: "ua", name: "Українська" },
  { value: "ru", name: "Русский" },
  { value: "it", name: "Italiano" },
  { value: "de", name: "Deutsch" },
  { value: "es", name: "Español" },
  { value: "pl", name: "Polski" },
  { value: "kr", name: "한국어" },
  { value: "rs", name: "Српски" },
];

const LanguagePicker = () => {
  const { i18n } = useTranslation();

  return (
    <SelectSearch
      name="language"
      options={languages}
      value={languages.find(({ value }) => value === (i18n.language || "en"))}
      onChange={(value) => i18n.changeLanguage(value)}
    />
  );
};

export default LanguagePicker;
