import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks";
import { cn } from "@/utils";
import { Button } from "@base-ui/react";
import { motion, useAnimationFrame, useMotionValue } from "motion/react";
import { useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

type TeamCardProps = {
  name: string;
  title: string;
  description?: string;
  media?: {
    email?: string;
    linkedin?: string;
    website?: string;
  };
};

const TeamCard = (props: TeamCardProps) => {
  const { description, title, name, media } = props;

  return (
    <Card
      dir="ltr"
      className="h-[16.875rem] w-64 shrink-0"
    >
      <CardContent className="relative flex h-full flex-col items-center text-center">
        {media && (
          <div className="absolute top-0 right-4 flex flex-col gap-y-2">
            {media.linkedin && (
              <Button onClick={() => window.open(media.linkedin, "_blank")}>
                <FaLinkedin className="fill-ring size-6 cursor-pointer hover:fill-[#126ac4]" />
              </Button>
            )}

            {media.email && (
              <Button
                onClick={() => {
                  window.location.href = `mailto:${media.email}`;
                }}
              >
                <IoIosMail className="fill-ring size-6 cursor-pointer hover:fill-[#dd4234]" />
              </Button>
            )}

            {media.website && (
              <Button onClick={() => window.open(media.website, "_blank")}>
                <AiOutlineGlobal className="fill-ring hover:fill-foreground size-6 cursor-pointer" />
              </Button>
            )}
          </div>
        )}

        <div className="border-primary mb-4 size-24 rounded-full border-2 bg-white" />

        <h5 className="h4 mb-2">{name}</h5>

        <span className="text-primary mb-1 font-semibold">{title}</span>

        {description && <p className="text-description">{description}</p>}
      </CardContent>
    </Card>
  );
};

type TeamMobileCarouselProps = {
  children: React.ReactNode;
};

const TeamMobileCarousel = ({ children }: TeamMobileCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(-20);

  const isDragging = useRef(false);

  // auto scroll speed
  const speed = 0.5;

  useAnimationFrame(() => {
    if (isDragging.current) return;

    const container = containerRef.current;

    if (!container) return;

    const currentX = x.get();

    // width of one full set
    const scrollWidth = container.scrollWidth / 2;

    let next = currentX - speed;

    // seamless loop LEFT
    if (next <= -scrollWidth) {
      next += scrollWidth;
    }

    // seamless loop RIGHT
    if (next >= 0) {
      next -= scrollWidth;
    }

    x.set(next);
  });

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left Fade */}
      <div className="from-background pointer-events-none absolute top-0 left-0 z-10 h-full w-12 bg-linear-to-r to-transparent" />

      {/* Right Fade */}
      <div className="from-background pointer-events-none absolute top-0 right-0 z-10 h-full w-12 bg-linear-to-l to-transparent" />

      <motion.div
        ref={containerRef}
        className="my-1 flex w-max cursor-grab gap-4 active:cursor-grabbing"
        style={{ x }}
        drag="x"
        dragMomentum
        dragElastic={0.05}
        whileTap={{ cursor: "grabbing" }}
        onDragStart={() => {
          isDragging.current = true;
        }}
        onDragEnd={() => {
          isDragging.current = false;
        }}
        onDrag={(_, info) => {
          const container = containerRef.current;

          if (!container) return;

          const scrollWidth = container.scrollWidth / 2;

          let next = x.get() + info.delta.x;

          // seamless loop LEFT
          if (next <= -scrollWidth) {
            next += scrollWidth;
          }

          // seamless loop RIGHT
          if (next >= 0) {
            next -= scrollWidth;
          }

          x.set(next);
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

type TeamSectionProps = {
  className?: string;
};

export const TeamSection = ({ className }: TeamSectionProps) => {
  const isMobile = useIsMobile();

  const { t } = useTranslation(["common", "team-section"]);

  const teamMembers = useMemo<TeamCardProps[]>(
    () => [
      {
        name: t("team-section:mahdi-sarai"),
        title: t("team-section:mahdi-sarai-title"),
        description: t("team-section:mahdi-sarai-desc"),
      },
      {
        name: t("team-section:arash-tafteh"),
        title: t("team-section:arash-tafteh-title"),
        description: t("team-section:arash-tafteh-desc"),
      },
      {
        name: t("team-section:hossein-moradi"),
        title: t("team-section:hossein-moradi-title"),
        description: t("team-section:hossein-moradi-desc"),
      },
      {
        name: t("team-section:mohsen-shamsitabar"),
        title: t("team-section:mohsen-shamsitabar-title"),
        description: t("team-section:mohsen-shamsitabar-desc"),
        media: {
          email: "test@test.com",
          website: "https://example.com",
          linkedin: "asd",
        },
      },
      {
        name: t("team-section:kamyar-nakhaie"),
        title: t("team-section:kamyar-nakhaie-title"),
        description: t("team-section:kamyar-nakhaie-desc"),
      },
      {
        name: t("team-section:soheil-mehrizi"),
        title: t("team-section:soheil-mehrizi-title"),
        description: t("team-section:soheil-mehrizi-desc"),
      },
      {
        name: t("team-section:farhad-saeidinejad"),
        title: t("team-section:farhad-saeidinejad-title"),
        description: t("team-section:farhad-saeidinejad-desc"),
      },
    ],
    [t],
  );

  return (
    <section
      dir="ltr"
      className={cn(
        "maincontainer flex w-full flex-col items-center overflow-hidden",
        className,
      )}
    >
      <h2 className="h1 mb-12">{t("team-section:sfa-team")}</h2>

      {isMobile ? (
        <TeamMobileCarousel>
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              {...member}
            />
          ))}
        </TeamMobileCarousel>
      ) : (
        <div className="relative w-full overflow-hidden">
          {/* Left Fade */}
          <div className="from-background pointer-events-none absolute top-0 left-0 z-10 h-full w-24 bg-linear-to-r to-transparent" />

          {/* Right Fade */}
          <div className="from-background pointer-events-none absolute top-0 right-0 z-10 h-full w-24 bg-linear-to-l to-transparent" />

          <div className="animate-team-scroll hover:paused my-1 flex w-max gap-4">
            {[...teamMembers, ...teamMembers].map((member, index) => (
              <TeamCard
                key={index}
                {...member}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
