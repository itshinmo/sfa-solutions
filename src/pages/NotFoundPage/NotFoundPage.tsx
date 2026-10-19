import animation from "@/assets/404/404-animation.gif";
import { usePageTitle } from "@/hooks";
import { useTranslation } from "react-i18next";
import { NotFoundContent } from "./NotFoundContent";

export const NotFoundPage = () => {
  const { t } = useTranslation("common");

  usePageTitle(t("not-found-title"), t("not-found-description"));

  return (
    <main className="bg-background flex min-h-svh w-full items-center justify-center overflow-hidden px-6 py-12">
      <div className="flex w-full max-w-xl flex-col items-center">
        <img
          src={animation}
          alt=""
          className="w-full max-w-md"
        />

        <NotFoundContent className="-mt-10" />
      </div>
    </main>
  );
};
