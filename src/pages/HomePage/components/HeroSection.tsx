import landscape from "@/assets/homepage/hero-section/landscape1.jpg";
import portrait from "@/assets/homepage/hero-section/portrait1.jpg";

import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks";
import { cn } from "@/utils";
import { useTranslation } from "react-i18next";
import { GoDotFill } from "react-icons/go";

type HeroSectionProps = {
  className?: string;
};

export const HeroSection = (props: HeroSectionProps) => {
  const { className } = props;

  const isMobile = useIsMobile();
  const { t } = useTranslation(["common"]);

  return (
    <section
      className={cn("relative h-screen w-full overflow-hidden", className)}
    >
      {/* Background Image - Full Cover */}
      <img
        src={isMobile ? portrait : landscape}
        alt="Smart Farm Aqua - Agricultural Landscape"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Optional dark overlay for better text readability */}
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/20 to-black/40" />

      {/* Foreground Content */}
      <div
        className={cn(
          "maincontainer relative z-20 flex w-full flex-col items-center justify-start gap-y-8 text-center",
          isMobile ? "mt-32" : "mt-48",
        )}
      >
        <h1
          className={cn(
            "h1 text-white drop-shadow-lg",
            isMobile ? "text-6xl" : "text-7xl",
          )}
        >
          {t("slogan-1")}
        </h1>

        <h2 className="text-primary h2 flex flex-row items-center justify-center gap-x-1.5 text-4xl">
          <span>{t("sfa")}</span>
          <GoDotFill className="fill-primary size-4" />
          <span>{t("sfa-acro")}</span>
        </h2>

        <div className="flex flex-row items-center justify-center gap-x-4">
          <Button
            color="primary"
            variant="default"
            size="lg"
            className="w-36! font-black!"
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
