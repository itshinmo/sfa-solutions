import { useTranslation } from "react-i18next";
import { FiLoader } from "react-icons/fi";

export const PageLoader = () => {
  const { t } = useTranslation("common");

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="bg-background fixed inset-0 z-50 flex h-svh w-full items-center justify-center"
    >
      <FiLoader className="text-primary size-10 animate-spin" />
      <span className="sr-only">{t("loading")}</span>
    </div>
  );
};
