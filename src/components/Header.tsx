import { TeamIcon } from "@/components";
import { LanguageChanger } from "@/components/LanguageChanger";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation("common");

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/20 shadow-sm backdrop-blur-md">
      <div className="maincontainer flex h-20 items-center justify-between">
        <div className="flex flex-row items-center gap-x-3">
          <div className="border-primary overflow-hidden rounded-xl border-2">
            <TeamIcon className="size-8" />
          </div>

          <div>
            <h5 className="text-foreground text-2xl font-bold tracking-tight">
              {t("sfa-solutions")}
            </h5>

            <p className="text-muted-foreground -mt-1 text-[10px]">
              {t("sfa-acro")}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-x-4">
          <LanguageChanger
            color="default"
            variant="outline"
            size="lg"
          />

          <Button
            color="primary"
            variant="default"
            size="lg"
            className="font-semibold"
          >
            {t("login")}
          </Button>
        </div>
      </div>
    </header>
  );
};
