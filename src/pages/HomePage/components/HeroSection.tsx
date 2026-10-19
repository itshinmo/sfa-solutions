import landscape from "@/assets/homepage/hero-section/landscape1.jpg";
import portrait from "@/assets/homepage/hero-section/portrait1.jpg";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/utils";
import { useTranslation } from "react-i18next";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router";

type HeroSectionProps = {
  className?: string;
};

export const HeroSection = (props: HeroSectionProps) => {
  const { className } = props;

  const { t } = useTranslation("common");

  return (
    <section
      className={cn(
        "relative h-svh min-h-[40rem] w-full overflow-hidden",
        className,
      )}
    >
      {/* Responsive background image — CSS handles the swap so there is no
          extra render or layout shift. */}
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={landscape}
        />
        <img
          src={portrait}
          alt="Smart Farm Aqua — agricultural landscape"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 size-full object-cover"
        />
      </picture>

      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/20 to-black/40" />

      <div className="maincontainer relative z-20 flex w-full flex-col items-center justify-start gap-y-8 pt-32 text-center md:pt-48">
        <h1 className="h1 text-5xl text-white drop-shadow-lg sm:text-6xl md:text-7xl">
          {t("slogan-1")}
        </h1>

        <h2 className="text-primary h2 flex flex-row items-center justify-center gap-x-1.5 text-3xl sm:text-4xl">
          <span>{t("sfa")}</span>
          <GoDotFill className="fill-primary size-4" />
          <span>{t("sfa-acro")}</span>
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            color="primary"
            variant="default"
            size="lg"
            className="w-36! font-black!"
            nativeButton={false}
            render={<Link to={ROUTES.APP} />}
          >
            {t("start-with-sfa")}
          </Button>

          <Button
            color="primary"
            variant="outline"
            size="lg"
            className="w-36! font-black!"
          >
            {t("see-how-it-works")}
          </Button>
        </div>
      </div>
    </section>
  );
};
