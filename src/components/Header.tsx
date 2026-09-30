import { TeamIcon } from "@/components";
import { LanguageChanger } from "@/components/LanguageChanger";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { useTranslation } from "react-i18next";
import { IoMdPaper } from "react-icons/io";
import { Link, NavLink } from "react-router";

export const Header = () => {
  const { t } = useTranslation("common");

  return (
    <header className="sticky top-0 right-0 left-0 z-50 border-b border-white/20 shadow-sm backdrop-blur-md">
      <div className="maincontainer flex h-20 items-center">
        <Link to={`${ROUTES.HOME}`}>
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
        </Link>

        {/* NAV */}
        <nav className="ms-8 flex flex-row items-center justify-center">
          <NavLink
            to={`${ROUTES.BLOGS}`}
            className="flex flex-row items-center justify-center gap-x-1 text-shadow-2xs"
          >
            <IoMdPaper />
            <span>{t("blogs")}</span>
          </NavLink>
        </nav>

        {/* Actions */}
        <div className="ms-auto flex items-center gap-x-4">
          <LanguageChanger
            color="default"
            variant="outline"
            size="lg"
          />

          <Link to={`${ROUTES.APP}`}>
            <Button
              color="primary"
              variant="default"
              size="lg"
              className="font-semibold"
            >
              {t("login")}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
