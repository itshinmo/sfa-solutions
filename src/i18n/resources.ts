// English
import enAchievement from "./locales/en/achievement-section.json";
import enBlog from "./locales/en/blog.json";
import enSoilTextureTriangle from "./locales/en/blog/soil-texture-triangle.json";
import enSymphonyOfDroplets from "./locales/en/blog/symphony-of-droplets.json";
import enCommon from "./locales/en/common.json";
import enFeedback from "./locales/en/feedback.json";
import enFooter from "./locales/en/footer.json";
import enResearchSection from "./locales/en/research-section.json";
import enSfaSection from "./locales/en/sfa-section.json";
import enTeamSection from "./locales/en/team-section.json";

// Persian
import faAchievement from "./locales/fa/achievement-section.json";
import faBlog from "./locales/fa/blog.json";
import faSoilTextureTriangle from "./locales/fa/blog/soil-texture-triangle.json";
import faSymphonyOfDroplets from "./locales/fa/blog/symphony-of-droplets.json";
import faCommon from "./locales/fa/common.json";
import faFeedback from "./locales/fa/feedback.json";
import faFooter from "./locales/fa/footer.json";
import faResearchSection from "./locales/fa/research-section.json";
import faSfaSection from "./locales/fa/sfa-section.json";
import faTeamSection from "./locales/fa/team-section.json";

/**
 * Default (English) resources. This is also the source of truth for the
 * typed `t()` keys used throughout the app (see `src/types/i18next.d.ts`).
 */
export const defaultResources = {
  common: enCommon,
  footer: enFooter,
  blog: enBlog,
  feedback: enFeedback,
  "research-section": enResearchSection,
  "sfa-section": enSfaSection,
  "team-section": enTeamSection,
  "achievement-section": enAchievement,
  "blog-soil-texture-triangle": enSoilTextureTriangle,
  "blog-symphony-of-droplets": enSymphonyOfDroplets,
} as const;

export const resources = {
  en: defaultResources,
  fa: {
    common: faCommon,
    footer: faFooter,
    blog: faBlog,
    feedback: faFeedback,
    "research-section": faResearchSection,
    "sfa-section": faSfaSection,
    "team-section": faTeamSection,
    "achievement-section": faAchievement,
    "blog-soil-texture-triangle": faSoilTextureTriangle,
    "blog-symphony-of-droplets": faSymphonyOfDroplets,
  },
} as const;

export type DefaultNamespace = "common";
export type Namespace = keyof typeof defaultResources;
export type SupportedLanguage = keyof typeof resources;

export const SUPPORTED_LANGUAGES = [
  "en",
  "fa",
] as const satisfies readonly SupportedLanguage[];
