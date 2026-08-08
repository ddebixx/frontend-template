import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { defaultLocale, isLocale, type Locale } from "./config";
import { messagesByLocale } from "./messages";

function syncDocumentLanguage(locale: string) {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.lang = locale;
}

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: messagesByLocale.en },
    pl: { translation: messagesByLocale.pl },
  },
  lng: defaultLocale,
  fallbackLng: defaultLocale,
  interpolation: {
    escapeValue: false,
  },
});

syncDocumentLanguage(i18n.language);

i18n.on("languageChanged", (locale) => {
  syncDocumentLanguage(locale);
});

export function changeLocale(locale: Locale) {
  if (!isLocale(locale)) {
    return;
  }

  void i18n.changeLanguage(locale);
}
