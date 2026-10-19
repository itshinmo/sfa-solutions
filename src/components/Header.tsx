import { LanguageChanger } from "@/components/LanguageChanger";
import { TeamIcon } from "@/components/TeamIcon";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/utils";
import { useTranslation } from "react-i18next";
import { IoMdPaper } from "react-icons/io";
import { Link, NavLink } from "react-router";

export const Header = () => {
  const { t } = useTranslation("common");

  return (
    <header className="bg-background/90 sticky top-0 right-0 left-0 z-50 border-b shadow-sm">
      <div className="maincontainer flex h-(--header-height) items-center gap-3">
        <Link
          to={ROUTES.HOME}
          className="flex shrink-0 items-center gap-x-3"
        >
          <div className="border-primary overflow-hidden rounded-xl border-2">
            <TeamIcon className="size-8" />
          </div>

          <div>
            <h5 className="text-foreground text-2xl font-bold tracking-tight">
              {t("sfa-solutions")}
            </h5>

            <p className="text-muted-foreground -mt-1 hidden text-[10px] sm:block">
              {t("sfa-acro")}
            </p>
          </div>
        </Link>

        <nav className="ms-4 flex items-center md:ms-8">
          <NavLink
            to={ROUTES.BLOGS}
            aria-label={t("blogs")}
            className={({ isActive }) =>
              cn(
                "hover:text-primary flex items-center justify-center gap-x-1 transition-colors text-shadow-2xs",
                isActive ? "text-primary font-semibold" : "text-foreground",
              )
            }
          >
            <IoMdPaper />
            <span className="hidden sm:inline">{t("blogs")}</span>
          </NavLink>
        </nav>

        <div className="ms-auto flex items-center gap-x-2 sm:gap-x-4">
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
            nativeButton={false}
            render={<Link to={ROUTES.APP} />}
          >
            {t("login")}
          </Button>
        </div>
      </div>
    </header>
  );
};
