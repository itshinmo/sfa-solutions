import landscape1 from "@/assets/homepage/slideshow/landscape1.jpg";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils";
import { GoDotFill } from "react-icons/go";

type HeroSectionProps = {
  className?: string;
};

export const HeroSection = (props: HeroSectionProps) => {
  const { className } = props;

  return (
    <section className={cn("relative h-dvh w-full overflow-hidden", className)}>
      {/* Background Image - Full Cover */}
      <img
        src={landscape1}
        alt="Smart Farm Aqua - Agricultural Landscape"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Optional dark overlay for better text readability */}
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/20 to-black/40" />

      {/* Foreground Content */}
      <div className="desktopContainer relative z-20 mt-48 flex h-full w-full flex-col items-center justify-start gap-y-8 text-center">
        <h1 className="h1 text-7xl text-white drop-shadow-lg">
          Smarter Water, Stronger Farms
        </h1>

        <h2 className="text-primary h2 flex flex-row items-center justify-center gap-x-1.5 text-4xl">
          <span>SFA</span>
          <GoDotFill className="fill-primary size-4" />
          <span>Smart Farm Aqua</span>
        </h2>

        <div className="flex flex-row items-center justify-center gap-x-4">
          <Button
            color="primary"
            variant="default"
            size="lg"
            className="w-36! font-black!"
          >
            Start with SFA
          </Button>
          <Button
            color="primary"
            variant="outline"
            size="lg"
            className="w-36! font-black!"
          >
            See how it works
          </Button>
        </div>
      </div>
    </section>
  );
};
