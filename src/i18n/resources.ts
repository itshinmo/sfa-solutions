import achievementSection from "./locales/en/achievement-section.json";
import common from "./locales/en/common.json";
import footer from "./locales/en/footer.json";
import researchSection from "./locales/en/research-section.json";
import sfaSection from "./locales/en/sfa-section.json";
import teamSection from "./locales/en/team-section.json";

export const resources = {
  common,
  footer,
  "research-section": researchSection,
  "sfa-section": sfaSection,
  "team-section": teamSection,
  "achievement-section": achievementSection,
} as const;

export type DefaultNamespace = "common";
