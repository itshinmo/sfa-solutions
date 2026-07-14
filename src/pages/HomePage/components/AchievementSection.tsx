import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/utils";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

type AchievementCardProps = {
  idx: string;
  title: string;
  description: string;
};

const AchievementCard = (props: AchievementCardProps) => {
  const { description, title, idx } = props;

  return (
    <motion.div
      className="w-[28rem]"
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{
        once: true, // animate only first time
        amount: 0.35,
      }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
    >
      <Card className="w-full">
        <CardContent className="flex flex-row gap-x-3">
          <div className="flex aspect-square size-8 items-center justify-center">
            <span className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-full font-black">
              {idx}
            </span>
          </div>

          <div className="flex flex-col">
            <h5 className="h4 mb-2">{title}</h5>

            <p className="">{description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

type AchievementSectionProps = {
  className?: string;
};

export const AchievementSection = (props: AchievementSectionProps) => {
  const { className } = props;

  const { t } = useTranslation(["common", "achievement-section"]);

  const achievementList: AchievementCardProps[] = useMemo(() => {
    return [
      {
        idx: "I",
        title: t("achievement-section:1title"),
        description: t("achievement-section:1description"),
      },
      {
        idx: "II",
        title: t("achievement-section:2title"),
        description: t("achievement-section:2description"),
      },
      {
        idx: "III",
        title: t("achievement-section:3title"),
        description: t("achievement-section:3description"),
      },
      {
        idx: "IV",
        title: t("achievement-section:4title"),
        description: t("achievement-section:4description"),
      },
    ];
  }, [t]);

  const renderAchievements = () => {
    return achievementList.map((achievement, idx) => (
      <AchievementCard
        key={`${idx}-${achievement.idx}`}
        idx={achievement.idx}
        description={achievement.description}
        title={achievement.title}
      />
    ));
  };

  return (
    <section
      className={cn(
        "maincontainer flex w-full flex-col items-center",
        className,
      )}
    >
      <h2 className="h1 mb-12">{"Achievements"}</h2>

      <div className="flex max-w-6xl flex-row flex-wrap items-center justify-center gap-4">
        {renderAchievements()}
      </div>
    </section>
  );
};
