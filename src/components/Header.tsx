import { LanguageChanger } from "@/components/LanguageChanger";
import { TeamIcon } from "@/components/TeamIcon";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { useIsHeaderOverHero } from "@/hooks";
import { cn } from "@/utils";
import { useTranslation } from "react-i18next";
import { IoMdPaper } from "react-icons/io";
import { Link, NavLink } from "react-router";

export const Header = () => {
  const { t } = useTranslation("common");

  const isOverHero = useIsHeaderOverHero();

  return (
    <header
      id="site-header"
      className={cn(
        "sticky top-0 right-0 left-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300",
        isOverHero
          ? "border-transparent bg-transparent shadow-none"
          : "bg-background/95 shadow-sm",
      )}
    >
      <div className="maincontainer flex h-(--header-height) items-center gap-3">
        <Link
          to={ROUTES.HOME}
          className="flex shrink-0 items-center gap-x-3"
        >
          <div
            className={cn(
              "overflow-hidden rounded-xl border-2 transition-colors",
              isOverHero ? "border-white/70" : "border-primary",
            )}
          >
            <TeamIcon className="size-8" />
          </div>

          <div>
            <h5
              className={cn(
                "text-2xl font-bold tracking-tight transition-colors",
                isOverHero ? "text-white drop-shadow-sm" : "text-foreground",
              )}
            >
              {t("sfa-solutions")}
            </h5>

            <p
              className={cn(
                "-mt-1 hidden text-[10px] transition-colors sm:block",
                isOverHero ? "text-white/80" : "text-muted-foreground",
              )}
            >
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
                "flex items-center justify-center gap-x-1 transition-colors text-shadow-2xs",
                isOverHero
                  ? cn(
                      "text-white/90 hover:text-white",
                      isActive && "font-semibold text-white",
                    )
                  : cn(
                      "text-foreground hover:text-primary",
                      isActive && "text-primary font-semibold",
                    ),
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
            className={cn(
              isOverHero &&
                "border-white/70! bg-white/10! text-white! hover:bg-white/20!",
            )}
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
