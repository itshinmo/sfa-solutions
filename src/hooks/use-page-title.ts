import { useEffect } from "react";

const SITE_NAME = "SFA Solutions";

const setMetaDescription = (description: string) => {
  let meta = document.querySelector<HTMLMetaElement>(
    'meta[name="description"]',
  );

  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "description";
    document.head.appendChild(meta);
  }

  meta.content = description;
};

/**
 * Sets the document title (and optionally the meta description) for the
 * current page.
 *
 * @param title - Page-specific title. Omit it to show the site name only.
 * @param description - Optional meta description for the page.
 */
export const usePageTitle = (title?: string, description?: string) => {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

    if (description) {
      setMetaDescription(description);
    }
  }, [title, description]);
};
