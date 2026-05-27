import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// English
import enErrorPage from "./locales/en/errorpage.json";
import enHomePage from "./locales/en/homepage.json";

// Persian
import faErrorPage from "./locales/fa/errorpage.json";
import faHomePage from "./locales/fa/homepage.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        homepage: enHomePage,
        errorpage: enErrorPage,
      },

      fa: {
        homepage: faHomePage,
        errorpage: faErrorPage,
      },
    },

    ns: ["homepage", "errorpage"],
    defaultNS: "homepage",

    supportedLngs: ["en", "fa"],
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
