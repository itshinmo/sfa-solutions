import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// English
import enAchievement from "./locales/en/achievement-section.json";
import enCommon from "./locales/en/common.json";
import enFooter from "./locales/en/footer.json";
import enResearchSection from "./locales/en/research-section.json";
import enSfaSection from "./locales/en/sfa-section.json";
import enTeamSection from "./locales/en/team-section.json";

// Persian
import faAchievement from "./locales/fa/achievement-section.json";
import faCommon from "./locales/fa/common.json";
import faFooter from "./locales/fa/footer.json";
import faResearchSection from "./locales/fa/research-section.json";
import faSfaSection from "./locales/fa/sfa-section.json";
import faTeamSection from "./locales/fa/team-section.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        "sfa-section": enSfaSection,
        "research-section": enResearchSection,
        "team-section": enTeamSection,
        footer: enFooter,
        "achievement-section": enAchievement,
      },

      fa: {
        common: faCommon,
        "sfa-section": faSfaSection,
        "research-section": faResearchSection,
        "team-section": faTeamSection,
        footer: faFooter,
        "achievement-section": faAchievement,
      },
    },

    ns: [
      "common",
      "footer",
      "research-section",
      "sfa-section",
      "team-section",
      "achievement-section",
    ],
    defaultNS: "common",

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
