import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import {
  resources,
  SUPPORTED_LANGUAGES,
  type SupportedLanguage,
} from "./resources";

const DEFAULT_LANGUAGE: SupportedLanguage = "en";

export const isRtlLanguage = (language: string) => language === "fa";

/**
 * Keep the document language/direction in sync with i18next.
 *
 * This is applied synchronously during initialisation (instead of in a
 * `useEffect`) so the first paint already has the correct direction — which
 * avoids the RTL/LTR flash on reload and Fast Refresh.
 */
const applyDocumentLanguage = (language: string) => {
  if (typeof document === "undefined") {
    return;
  }

  const resolvedLanguage = (SUPPORTED_LANGUAGES as readonly string[]).includes(
    language,
  )
    ? language
    : DEFAULT_LANGUAGE;

  document.documentElement.lang = resolvedLanguage;
  document.documentElement.dir = isRtlLanguage(resolvedLanguage)
    ? "rtl"
    : "ltr";
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: [...SUPPORTED_LANGUAGES],
    fallbackLng: DEFAULT_LANGUAGE,
    defaultNS: "common",
    ns: Object.keys(resources.en),
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

applyDocumentLanguage(
  i18n.resolvedLanguage ?? i18n.language ?? DEFAULT_LANGUAGE,
);

i18n.on("languageChanged", applyDocumentLanguage);

export { i18n };
export default i18n;
