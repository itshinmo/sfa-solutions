import { useTranslation } from "react-i18next";
import { FiLoader } from "react-icons/fi";

export const PageLoader = () => {
  const { t } = useTranslation("common");

  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[50vh] w-full items-center justify-center"
    >
      <FiLoader className="text-primary size-8 animate-spin" />
      <span className="sr-only">{t("loading")}</span>
    </div>
  );
};
