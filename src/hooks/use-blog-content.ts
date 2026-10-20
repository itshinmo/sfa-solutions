import type { BlogContentNamespace } from "@/types/blog";
import { useTranslation } from "react-i18next";

/**
 * Returns the localized content bundle for a blog article.
 *
 * The content lives in the i18n resources so it follows the active language
 * and can be edited without touching the article layout.
 */
export const useBlogContent = <T>(namespace: BlogContentNamespace): T => {
  const { i18n } = useTranslation(namespace);

  return i18n.getResourceBundle(
    i18n.resolvedLanguage ?? i18n.language ?? "en",
    namespace,
  ) as T;
};
